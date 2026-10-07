// Cambiá el número de versión cada vez que subas cambios, así los teléfonos se actualizan.
const CACHE = "quesabores-v13";
const BASE = ["./", "./index.html", "./menu.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./logo.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Mapa y buscador de direcciones: siempre por internet, no se guardan.
  if (url.hostname.endsWith("tile.openstreetmap.org") || url.hostname === "nominatim.openstreetmap.org") return;
  // El menú fijo siempre se lee de internet para que muestre los últimos precios.
  if (url.pathname.endsWith("/menu.json")) return;

  // La página: primero internet (para tener la última versión), si no hay, la guardada.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => {
      const copia = r.clone(); caches.open(CACHE).then(c => c.put("./index.html", "./menu.html", copia)); return r;
    }).catch(() => caches.match("./index.html")));
    return;
  }

  // Librerías, tipografías e íconos: la guardada primero, internet si no está.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === "opaque") { const copia = r.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
    return r;
  })));
});
