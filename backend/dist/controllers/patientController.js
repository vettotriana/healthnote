var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mapPatientData } from '../services/ehrService.js';
import { Patient } from '../models/Patient.js';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
export const getPatients = (req, res) => {
    res.json({ message: res.__('PATIENT_LIST') });
};
export const createPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ehrSystem, patient } = req.body;
    try {
        const patientInstance = plainToInstance(Patient, patient);
        const errors = yield validate(patientInstance);
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
    }
    catch (error) {
        res.status(400).json({ error: res.__('INVALID_DATA') });
    }
});
