# 📌 API de Gestión de Pacientes

Este proyecto es una API REST para la gestión de datos de pacientes y su mapeo a diferentes sistemas EHR (Electronic Health Records). Implementa **Node.js**, **Express**, **Swagger** para documentación, y **TypeScript**.

---

## 🚀 Requisitos Previos

Antes de empezar, asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js** (versión 18 o superior)
- **npm** (gestor de paquetes de Node.js)
- **Git** (opcional, pero recomendado para la gestión del código)

---

## 📥 Instalación

1. **Clona el repositorio**
```sh
 git clone https://github.com/tu-usuario/tu-repositorio.git
```

2. **Accede al directorio del backend**
```sh
 cd backend
```

3. **Instala las dependencias necesarias**
```sh
 npm install
```

Esto instalará todas las librerías necesarias para ejecutar el backend.

---

## 📦 Librerías Utilizadas

| 📌 Paquete | 🌟 Descripción |
|-----------|--------------|
| express | Framework para construir servidores HTTP |
| cors | Permite solicitudes entre diferentes orígenes (CORS) |
| i18n | Manejo de internacionalización de la API |
| swagger-ui-express | Interfaz de usuario para documentación Swagger |
| swagger-jsdoc | Genera documentación de la API a partir de comentarios en el código |
| class-validator | Validación de datos de entrada utilizando decoradores |
| class-transformer | Convierte objetos JSON en clases de TypeScript |
| ts-node-dev | Recarga automática de la API durante el desarrollo |
| typescript | Permite el uso de TypeScript en Node.js |

También se instalaron sus respectivas definiciones de tipos (`@types/`), como:

```sh
npm install --save-dev @types/express @types/cors @types/swagger-jsdoc @types/swagger-ui-express
```

---

## 📜 Estructura del Proyecto

```
backend/
│── @types/               # Definiciones de tipos personalizadas
│── node_modules/         # Dependencias instaladas
│── src/                  # Código fuente
│   ├── controllers/      # Controladores de la API
│   ├── locales/         # Archivos de traducción (es.json, en.json)
│   ├── models/          # Modelos de datos
│   ├── routes/          # Definición de rutas
│   ├── services/        # Lógica de negocio
│   ├── tests/           # Pruebas unitarias
│   ├── utils/           # Funciones auxiliares (i18n, etc.)
│   ├── index.ts         # Punto de entrada de la aplicación
│── package.json         # Configuración del proyecto y dependencias
│── tsconfig.json        # Configuración de TypeScript
│── jest.config.js       # Configuración para pruebas con Jest
```

---

## 🚀 Ejecución del Proyecto

### **1️⃣ Modo Desarrollo (Recarga Automática)**
```sh
npm run dev
```
Este comando inicia el servidor y recarga automáticamente cuando se detectan cambios en el código.

### **2️⃣ Compilar TypeScript a JavaScript**
```sh
npm run build
```
Esto generará el código transpilado en la carpeta `dist/`.

### **3️⃣ Ejecutar en Modo Producción**
```sh
npm run start
```
Esto ejecuta la API usando los archivos compilados en `dist/`.

---

## 📖 Documentación de la API (Swagger)

Para acceder a la documentación interactiva de la API, inicia el servidor y abre en el navegador:

🔗 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Aquí puedes probar los endpoints directamente desde la interfaz.

---

## 🌎 Internacionalización (i18n)

Los archivos de traducción están en `src/locales/`.

📂 **Ejemplo:**
```json
{
  "FIELD": "Campo",
  "VALUE": "Valor",
  "SUBMIT": "Enviar"
}
```

Puedes agregar más idiomas editando estos archivos y cambiando la configuración en `src/utils/i18n.ts`.

---

## 🔥 Solución de Errores Comunes

1️⃣ **Error CORS en el Frontend**
> Mensaje en consola: `Solicitud desde otro origen bloqueada por CORS`

🔧 Solución: Asegúrate de que el middleware `cors` está configurado en `index.ts`:
```ts
import cors from 'cors';
app.use(cors());
```

2️⃣ **Error en Swagger: "No operations defined in spec!"**
> No se muestran los endpoints en Swagger.

🔧 Solución: Revisa que la ruta de los archivos con documentación Swagger sea correcta:
```ts
const swaggerOptions = {
  apis: ['./src/routes/*.ts']  // Asegúrate de que apunta a los archivos correctos
};
```
Si persiste, intenta reiniciar el servidor con `npm run dev`.

3️⃣ **Error en `dist/locales` en Producción**
> `Error: ENOENT: no such file or directory, watch dist/locales`

🔧 Solución: Copia manualmente los archivos de traducción después de compilar:
```sh
mkdir -p dist/locales
cp -r src/locales/* dist/locales/
```

---

## 🛠 Mantenimiento y Actualizaciones

Para actualizar las dependencias del proyecto, usa:
```sh
npm update
```

Para verificar versiones desactualizadas:
```sh
npm outdated
```

---

## ✅ Contribuciones y Mejoras

Si deseas mejorar este proyecto:
1. **Haz un fork**
2. **Crea una nueva rama (`feature/nueva-funcionalidad`)**
3. **Realiza los cambios y sube el código**
4. **Abre un Pull Request en GitHub**

---

## 📧 Contacto
Si tienes preguntas o necesitas soporte, puedes abrir un issue en el repositorio o enviarme un mensaje.

¡Gracias por usar la API de Gestión de Pacientes! 🚀

