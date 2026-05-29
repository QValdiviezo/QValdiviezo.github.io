# 🏥 Centro de Terapia Física Valdiviezo - Sitio Web

Sitio web profesional, moderno y completamente responsivo para el Centro de Terapia Física Valdiviezo ubicado en Piura.

## 📋 Contenido del Proyecto

```
TerapiaFisica-Valdiviezo/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS3 responsivos
├── script.js           # JavaScript puro (navegación + formulario + WhatsApp)
├── assets/
│   └── images/
│       ├── hero.webp   # Imagen principal (AGREGAR TU IMAGEN)
│       └── README.md   # Instrucciones para imágenes
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. **Descarga y Abre los Archivos**
   - Descarga todos los archivos en una carpeta
   - Abre `index.html` en tu navegador web (haz clic derecho → Abrir con navegador)
   - O usa un servidor local para mejor experiencia (ver opciones abajo)

### 2. **Personalización Importante**

#### A. Configura tu Número de WhatsApp
Abre `script.js` y busca esta línea:
```javascript
const WHATSAPP_NUMBER = '51945123456'; // Cambia este número
```
Formato: código de país (51 para Perú) + número sin el 0 inicial.

#### B. Personaliza la Información de Contacto
Abre `index.html` y busca estos campos (usa Ctrl+F):

1. **Teléfono y WhatsApp** :
   ```html
   <p>+51 XXX XXX XXX</p>
   ```
2. **Email** :
   ```html
   <p>info@valdiviezo.com</p>
   ```
3. **Dirección en "¿Cómo Llegar?"** :
   ```html
   <p><strong>📍 Dirección:</strong> [Tu dirección aquí], Piura, Perú</p>
   ```
4. **Horario de Atención** :
   ```html
   <p><strong>⏰ Horario:</strong> Lunes a Viernes - 9:00 AM a 6:00 PM | Sábados - 9:00 AM a 1:00 PM</p>
   ```

#### C. Personaliza el Mapa de Google Maps
Abre `index.html` . Busca el `<iframe>` del mapa:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3526288562667!2d-80.6274558!3d-5.194541..."></iframe>
```

Para cambiar la ubicación:
1. Ve a [Google Maps](https://maps.google.com)
2. Busca "Centro de Terapia Física Valdiviezo" o tu dirección exacta
3. Haz clic en el botón "Compartir" (icono de compartir)
4. Selecciona "Insertar un mapa"
5. Copia el código HTML del iframe
6. Reemplaza el código en `index.html`

#### D. Agrega tu Imagen Principal
1. Convierte tu imagen a formato **WebP**
2. Nombra la imagen como **`.webp`**
3. Coloca el archivo en la carpeta `assets/images/`
r
### 3. **Servidor Local (Recomendado)**

#### Opción A: Python (Windows)
```bash
# Python 3
python -m http.server 8000

# Luego abre en tu navegador:
# http://localhost:8000
```

#### Opción B: Node.js
```bash
# Instala globalmente (primera vez)
npm install -g http-server

# Luego ejecuta en la carpeta del proyecto:
http-server -p 8000

# Abre: http://localhost:8000
```

#### Opción C: Live Server (VSCode)
1. Instala la extensión "Live Server" en VSCode
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 📱 Características del Sitio

✅ **Responsive Design** - Funciona perfectamente en móvil, tablet y desktop
✅ **Navegación SPA** - Cambio de secciones sin recargar la página
✅ **Formulario Integrado** - Captura datos y envía automáticamente a WhatsApp
✅ **Diseño Profesional** - Colores que inspiran confianza (azules y grises)
✅ **Animaciones Suave** - Transiciones elegantes entre secciones
✅ **Mapa Integrado** - Ubicación del consultorio
✅ **Accesible** - Sigue estándares de accesibilidad web

## 🎨 Personalización del Diseño

### Cambiar Colores
Abre `styles.css` y busca la sección `:root` . Aquí están las variables de color:

```css
:root {
    --primary-blue: #0066cc;      /* Azul principal */
    --primary-blue-dark: #0052a3; /* Azul oscuro */
    --secondary-blue: #e8f1ff;    /* Azul claro */
    --light-gray: #f5f5f5;        /* Gris claro */
    --dark-gray: #333333;         /* Gris oscuro */
    --white: #ffffff;             /* Blanco */
}
```

Reemplaza los códigos hexadecimales con los colores que desees.

### Cambiar Tipografía
En la misma sección, modifica:
```css
--font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

## 📧 Funcionalidad del Formulario

Cuando un usuario llena el formulario y hace clic en "Enviar y Contactar por WhatsApp":

1. El formulario recolecta: Nombres, Email, Teléfono, DNI, Provincia y Mensaje
2. Construye un mensaje formateado profesional
3. Abre WhatsApp con el mensaje prellenado
4. El usuario solo debe confirmar y enviar

**Ejemplo de mensaje:**
```
*SOLICITUD DE CITA MÉDICA*

📋 *Datos Personales:*
Nombre: Juan Pérez García
Email: juan@example.com
Teléfono: 951234567
DNI: 12345678
Provincia: Piura

📝 *Mensaje Adicional:*
Tengo dolor de espalda desde hace dos semanas

¡Gracias por contactarnos! Nos comunicaremos pronto.
```

## 🔧 Estructura de las Secciones

### 1. **Inicio (Home)**
- Hero image banner
- Presentación del negocio
- Botón principal de cita
- Grid de contacto rápido

### 2. **Primera Visita**
- 6 tarjetas con pasos del proceso
- CTA para agendar cita

### 3. **¿Cómo Llegar?**
- Mapa Google Maps incrustado
- Información de ubicación y horarios

## 🌐 Despliegue en Internet

### Opción A: GitHub Pages (Gratuito)
1. Crea una cuenta en [github.com](https://github.com)
2. Crea un nuevo repositorio público llamado `username.github.io`
3. Carga los archivos del proyecto
4. Tu sitio estará en: `https://username.github.io`

### Opción B: Netlify (Gratuito)
1. Ve a [netlify.com](https://netlify.com)
2. Haz clic en "Deploy manually"
3. Arrastra la carpeta del proyecto
4. Tu sitio estará en vivo en segundos

### Opción C: Hosting Tradicional
Sube los archivos via FTP a cualquier hosting web:
- Hostinger
- GoDaddy
- Bluehost
- HostGator

## 📱 Compatibilidad

- ✅ Chrome/Edge (versión 90+)
- ✅ Firefox (versión 88+)
- ✅ Safari (versión 14+)
- ✅ Android 6+
- ✅ iOS 12+

## 📞 Solución de Problemas

### El formulario no abre WhatsApp
- Verifica que `WHATSAPP_NUMBER` en `script.js` esté correcto
- Asegúrate de que el número tenga el formato correcto: `51945123456`
- Ten instalada la app de WhatsApp o acceso a WhatsApp Web

### Las imágenes no se cargan
- Verifica que `hero.webp` esté en `assets/images/`
- Asegúrate de que el nombre del archivo sea exactamente `hero.webp`
- Si usas un servidor local, recarga la página

### El sitio no se ve responsive
- Limpia la caché del navegador (Ctrl+Shift+Delete)
- Abre Developer Tools (F12) y marca "Toggle device toolbar"
- Verifica el viewport meta tag en `index.html`


## 💡 Tips y Recomendaciones

1. **Optimización de Imágenes**: Usa WebP para mejor compresión
2. **SEO**: Añade meta tags adicionales en `<head>` si lo necesitas
3. **Analytics**: Considera agregar Google Analytics
4. **Certificado SSL**: Si despliegas en web, usa HTTPS (HTTPS requerido para WhatsApp)
5. **Prueba en Móvil**: Siempre prueba el sitio en un dispositivo móvil real

## 📝 Licencia

Este código es de uso libre. Úsalo y modifícalo como necesites.

## 🆘 Soporte

Si tienes problemas o preguntas:
1. Revisa el archivo `script.js` - tiene comentarios explicativos
2. Abre `index.html` en un editor de texto y busca comentarios `<!-- -->`
3. Usa Chrome DevTools (F12) para debuggear JavaScript
4. Consulta tutoriales de HTML5, CSS3 y JavaScript puro

---