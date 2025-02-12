import request from 'supertest';
import app from '../index.js'; // Asegúrate de que exportas `app` en index.ts

describe('Patient API Tests', () => {
  it('debería crear un paciente correctamente', async () => {
    const res = await request(app)
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
  });

  it('debería devolver errores de validación si falta información', async () => {
    const res = await request(app)
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
  });
});
