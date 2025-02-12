import { ehrMapping } from "../models/EHRMapping.js";
export const mapPatientData = (ehrSystem, patient) => {
    const mapping = ehrMapping[ehrSystem];
    if (!mapping) {
        throw new Error(`EHR system '${ehrSystem}' is not supported.`);
    }
    const mappedData = {};
    for (const [key, value] of Object.entries(mapping)) {
        mappedData[value] = patient[key];
    }
    return mappedData;
};
