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
exports.RawMaterial = void 0;
const typeorm_1 = require("typeorm");
const product_material_entity_1 = require("./product-material.entity");
const branch_material_entity_1 = require("./branch_material.entity");
let RawMaterial = class RawMaterial {
};
exports.RawMaterial = RawMaterial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RawMaterial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RawMaterial.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], RawMaterial.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'storagetype',
        type: 'varchar',
        length: 20,
    }),
    __metadata("design:type", String)
], RawMaterial.prototype, "storageType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => branch_material_entity_1.BranchMaterial, (branchMaterial) => branchMaterial.rawMaterial),
    __metadata("design:type", Array)
], RawMaterial.prototype, "branchMaterials", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_material_entity_1.ProductMaterial, (pm) => pm.rawMaterial),
    __metadata("design:type", Array)
], RawMaterial.prototype, "productMaterials", void 0);
exports.RawMaterial = RawMaterial = __decorate([
    (0, typeorm_1.Entity)('rawmaterial')
], RawMaterial);
//# sourceMappingURL=rawmaterial.entity.js.map