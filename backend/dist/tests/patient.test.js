var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from 'supertest';
import app from '../index.js'; // Asegúrate de que exportas `app` en index.ts
describe('Patient API Tests', () => {
    it('debería crear un paciente correctamente', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app)
            .post('/api/patients')
            .send({
            ehrSystem: 'Athena',
            patient: {
                name: 'Jane Doe',
                gender: 'Female',
                dob: '1992-05-15',
                address: '456 Elm St',
                phone: '555-5678',
                email: 'jane@example.com'
            }
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('mappedData');
    }));
    it('debería devolver errores de validación si falta información', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app)
            .post('/api/patients')
            .send({
            ehrSystem: 'Athena',
            patient: {
                name: '',
                gender: '',
                dob: 'invalid_date',
                address: '',
                phone: '',
                email: 'correo_invalido'
            }
        });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('errors');
        expect(res.body.errors.length).toBeGreaterThan(0);
    }));
});
