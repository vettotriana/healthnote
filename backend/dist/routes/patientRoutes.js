import { Router } from 'express';
import { getPatients, createPatient } from '../controllers/patientController.js';
const router = Router();
/**
 * @swagger
 * /api/patients:
 *   get:
 *     summary: Obtener la lista de pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Lista de pacientes obtenida correctamente
 */
router.get('/patients', getPatients);
/**
 * @swagger
 * /api/patients:
 *   post:
 *     summary: Crear un nuevo paciente
 *     tags: [Pacientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ehrSystem:
 *                 type: string
 *                 example: Athena
 *               patient:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   gender:
 *                     type: string
 *                     example: Male
 *                   dob:
 *                     type: string
 *                     format: date
 *                     example: 1990-01-01
 *                   address:
 *                     type: string
 *                     example: 123 Main St
 *                   phone:
 *                     type: string
 *                     example: 555-1234
 *                   email:
 *                     type: string
 *                     example: john@example.com
 *     responses:
 *       201:
 *         description: Paciente creado correctamente
 */
router.post('/patients', createPatient);
export default router;
