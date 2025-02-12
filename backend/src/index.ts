import express from 'express';
import cors from 'cors'; // Importa CORS
import path from 'path';
import { fileURLToPath } from 'url';

import patientRoutes from './routes/patientRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import i18n from './utils/i18n.js';

// Solución para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:3001', // Permitir solo solicitudes desde el frontend
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type'
}));

app.use(express.json());

// Middleware de internacionalización
app.use(i18n.init);

// Rutas de la API
app.use('/api', patientRoutes);

// Configuración de Swagger
// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestión de Pacientes',
      version: '1.0.0',
      description: 'API para la gestión de datos de pacientes y mapeo a sistemas EHR',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    console.log(`Documentación de la API disponible en http://localhost:${PORT}/api-docs`);
  });
}

export default app;
