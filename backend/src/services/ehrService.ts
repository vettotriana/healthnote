import { Patient } from "../models/Patient.js";
import { ehrMapping } from "../models/EHRMapping.js";

export const mapPatientData = (ehrSystem: string, patient: Patient) => {
  const mapping = ehrMapping[ehrSystem];

  if (!mapping) {
    throw new Error(`EHR system '${ehrSystem}' is not supported.`);
  }

  const mappedData: { [key: string]: any } = {};

  for (const [key, value] of Object.entries(mapping) as [keyof Patient, string][]) {
    mappedData[value] = patient[key];
  }


  return mappedData;
};
