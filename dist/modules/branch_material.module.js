"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchMaterialModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const branch_material_entity_1 = require("../entities/branch_material.entity");
const branch_material_service_1 = require("../services/branch_material.service");
const branch_material_controller_1 = require("../controllers/branch_material.controller");
let BranchMaterialModule = class BranchMaterialModule {
};
exports.BranchMaterialModule = BranchMaterialModule;
exports.BranchMaterialModule = BranchMaterialModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([branch_material_entity_1.BranchMaterial])],
        controllers: [branch_material_controller_1.BranchMaterialController],
        providers: [branch_material_service_1.BranchMaterialService],
        exports: [branch_material_service_1.BranchMaterialService],
    })
], BranchMaterialModule);
//# sourceMappingURL=branch_material.module.js.map