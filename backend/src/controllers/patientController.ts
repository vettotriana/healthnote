import { Request, Response } from 'express';
import { mapPatientData } from '../services/ehrService.js';
import { Patient } from '../models/Patient.js';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export const getPatients = (req: Request, res: Response): void => {
  res.json({ message: res.__('PATIENT_LIST') });
};

export const createPatient = async (req: Request, res: Response): Promise<void> => {
  const { ehrSystem, patient } = req.body;

  try {
    const patientInstance = plainToInstance(Patient, patient);
    const errors = await validate(patientInstance);

    if (errors.length > 0) {
      res.status(400).json({
        message: res.__('VALIDATION_ERRORS'),
        errors: errors.map((err) => ({
          property: err.property,
          constraints: err.constraints,
        })),
      });
      return;
    }

    const mappedData = mapPatientData(ehrSystem, patientInstance);
    res.status(201).json({
      message: res.__('PATIENT_CREATED'),
      mappedData,
    });
  } catch (error) {
    res.status(400).json({ error: res.__('INVALID_DATA') });
  }
};
