"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawMaterialModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const material_controller_1 = require("../controllers/material.controller");
const material_service_1 = require("../services/material.service");
const rawmaterial_entity_1 = require("../entities/rawmaterial.entity");
const branches_entity_1 = require("../entities/branches.entity");
const branch_material_entity_1 = require("../entities/branch_material.entity");
let RawMaterialModule = class RawMaterialModule {
};
exports.RawMaterialModule = RawMaterialModule;
exports.RawMaterialModule = RawMaterialModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rawmaterial_entity_1.RawMaterial, branches_entity_1.Branch, branch_material_entity_1.BranchMaterial])],
        controllers: [material_controller_1.RawMaterialController],
        providers: [material_service_1.RawMaterialService],
    })
], RawMaterialModule);
//# sourceMappingURL=material.module.js.map