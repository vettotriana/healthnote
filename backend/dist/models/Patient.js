var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsEmail, IsDateString, IsArray, IsNotEmpty, IsOptional } from 'class-validator';
export class Patient {
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "name", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "gender", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], Patient.prototype, "dob", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "address", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], Patient.prototype, "phone", void 0);
__decorate([
    IsEmail(),
    __metadata("design:type", String)
], Patient.prototype, "email", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], Patient.prototype, "emergencyContact", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], Patient.prototype, "insuranceProvider", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], Patient.prototype, "insurancePolicyNumber", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], Patient.prototype, "primaryCarePhysician", void 0);
__decorate([
    IsArray(),
    IsOptional(),
    __metadata("design:type", Array)
], Patient.prototype, "allergies", void 0);
__decorate([
    IsArray(),
    IsOptional(),
    __metadata("design:type", Array)
], Patient.prototype, "currentMedications", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], Patient.prototype, "medicalHistory", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], Patient.prototype, "socialHistory", void 0);
__decorate([
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], Patient.prototype, "familyHistory", void 0);
