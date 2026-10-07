# Que Sabores: costos, envíos y menú

App para calcular el costo de cada plato y cobrar el envío según la zona.
Se instala como app en celular o compu y funciona sin internet (menos el mapa y el buscador de direcciones).

## Archivos

- `index.html`: la app del local (costos, envíos y armado del menú)
- `menu.html`: la página que ven los clientes para pedir por WhatsApp
- `logo.png`: logo de Que Sabores
- `manifest.webmanifest`: nombre, colores e íconos para instalarla
- `sw.js`: hace que funcione sin internet
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`: íconos

## Subirla a GitHub Pages desde el celular

1. Descomprimí el zip (en Android desde la app Archivos; en iPhone tocando el zip en Archivos).
2. Con la cuenta de GitHub de Que Sabores (por ejemplo usuario `quesabores`), creá un repositorio público
   llamado exactamente `quesabores.github.io` (el usuario + `.github.io`).
3. Dentro del repo: **Add file > Upload files**, elegí los 10 archivos sueltos (no la carpeta) y tocá **Commit changes**.
4. **Settings > Pages**. En "Branch" elegí `main` y la carpeta `/ (root)`, y tocá **Save**.
5. En 1 o 2 minutos queda en:
   `https://quesabores.github.io` (la app) y `https://quesabores.github.io/menu.html` (el menú para clientes)
6. **Settings > Collaborators > Add people** y agregá a `ftapiacabletelevisoracolor-beep` para poder seguir haciendo cambios.

## Menú para clientes

En la pestaña **Menú** de la app:
- **Hoy:** abrir o cerrar pedidos, y escribir la promo o aviso del día.
- **Platos del menú:** qué se muestra, descripción y "Agotado por hoy".
- **Publicar cambios:** sube el menú a GitHub. En 1 o 2 minutos se ve en `quesabores.github.io/menu.html`.
  El link es siempre el mismo: va en la bio de Instagram y en las historias.

Los precios se cambian en la pestaña **Platos**. Las cuentas de costos e insumos nunca se suben: solo el menú.

Cuando llega un pedido por WhatsApp, se puede copiar el mensaje entero y pegarlo en **Envíos**:
la app toma la ubicación, el nombre y la dirección, y lo suma al recorrido del cadete.

## Conectar la nube (una sola vez, desde la compu)

Hacen falta dos repositorios en la cuenta de Que Sabores:
- `quesabores.github.io` (público): la app y el menú para clientes.
- `quesabores-datos` (**privado**): platos, costos, insumos, envíos, pedidos e historial.
  Se crea vacío con **+ > New repository**, marcando **Private**.

Después, el permiso (token):
1. Foto de perfil > **Settings > Developer settings > Personal access tokens > Fine-grained tokens > Generate new token**.
2. Nombre: `app que sabores`. Expiración: la más larga que permita (anotá cuándo vence).
3. **Repository access > Only select repositories**: elegí **los dos** repos.
4. **Permissions > Contents: Read and write**.
5. **Generate token** y copialo (empieza con `github_pat_`).
6. En la app: **Menú > Conexión y datos en la nube**, completá usuario, los dos repos y el token, y tocá **Guardar y probar**.

## Sumar otro celu o compu

En **Menú > Conexión y datos en la nube > Copiar link de conexión** (o "Mandar por WhatsApp").
Se abre ese link en el otro dispositivo y queda todo cargado: platos, local, zonas, menú, pedidos e historial.
En iPhone, si la app ya está instalada en la pantalla de inicio: abrirla, tocar "Ya lo usamos en otro dispositivo"
(o Menú > Conexión) y pegar el link.

**El link de conexión permite editar todo: mandalo solo por privado, nunca en Instagram ni en estados.**
Si se pierde un celu, se borra el token en GitHub, se crea otro y se genera un link nuevo.

## Pedidos al instante (campana)

En **Pedidos > Pedidos al instante > Activar**, y después **Menú > Publicar cambios**.
Desde ahí, cada pedido que hace un cliente en el menú llega también a la app: suena una campana,
aparece arriba con un cronómetro de hace cuánto pidió, y la campana insiste cada 25 segundos hasta que lo aceptan.
El pedido viaja cifrado por ntfy.sh (servicio gratuito de avisos): solo la app del local lo puede leer.

Para que suene con la app cerrada: instalar la app **ntfy** (gratis) y suscribirse al tema que muestra la app
(termina en `-alerta`). Esa notificación no lleva datos del cliente.

## Historial

Cada pedido marcado como **Entregado** suma al historial del mes (ventas, pedidos, ticket promedio,
envíos y retiros, platos más pedidos y ganancia estimada). Se ve en **Pedidos > Historial y crecimiento**
y queda guardado en la nube, mes a mes.

## Instalarla

- **Android (Chrome):** botón "Instalar app" arriba a la derecha, o menú ⋮ > "Instalar app".
- **iPhone (Safari):** botón Compartir > "Agregar a inicio".
- **Compu (Chrome o Edge):** botón "Instalar app", o el ícono de instalar en la barra de direcciones.

## Actualizarla

Cuando cambies algo, subí el archivo nuevo y en `sw.js` subí el número de `quesabores-v13` a `quesabores-v14` (y así cada vez).
Así los dispositivos que ya la tienen instalada toman la versión nueva.

## Importante sobre los datos

Con la nube conectada, todos los dispositivos ven lo mismo. Igual conviene bajar un respaldo cada tanto: **Insumos > Copia de seguridad > Descargar copia**, y en el otro dispositivo **Abrir copia**.

## Créditos

Mapa de © OpenStreetMap. Búsqueda de direcciones con Nominatim. Mapas con Leaflet.
