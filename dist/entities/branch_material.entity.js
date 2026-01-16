"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchMaterial = void 0;
const typeorm_1 = require("typeorm");
const branches_entity_1 = require("./branches.entity");
const rawmaterial_entity_1 = require("./rawmaterial.entity");
let BranchMaterial = class BranchMaterial {
};
exports.BranchMaterial = BranchMaterial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BranchMaterial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quantityimported', type: 'int' }),
    __metadata("design:type", Number)
], BranchMaterial.prototype, "quantityImported", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quantitystock', type: 'int' }),
    __metadata("design:type", Number)
], BranchMaterial.prototype, "quantityStock", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'importdate', type: 'date' }),
    __metadata("design:type", Date)
], BranchMaterial.prototype, "importDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expirydate', type: 'date' }),
    __metadata("design:type", Date)
], BranchMaterial.prototype, "expiryDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rawmaterial_entity_1.RawMaterial, (material) => material.branchMaterials, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rawmaterialid' }),
    __metadata("design:type", rawmaterial_entity_1.RawMaterial)
], BranchMaterial.prototype, "rawMaterial", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branches_entity_1.Branch, (branch) => branch.branchMaterials, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'branchid' }),
    __metadata("design:type", branches_entity_1.Branch)
], BranchMaterial.prototype, "branch", void 0);
exports.BranchMaterial = BranchMaterial = __decorate([
    (0, typeorm_1.Entity)('branch_material')
], BranchMaterial);
//# sourceMappingURL=branch_material.entity.js.map