"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const branches_entity_1 = require("../entities/branches.entity");
const branch_service_1 = require("../services/branch.service");
const branch_controller_1 = require("../controllers/branch.controller");
const product_module_1 = require("../modules/product.module");
const product_branch_entity_1 = require("../entities/product_branch.entity");
const branch_material_entity_1 = require("../entities/branch_material.entity");
const branch_material_module_1 = require("./branch_material.module");
const rawmaterial_entity_1 = require("../entities/rawmaterial.entity");
let BranchModule = class BranchModule {
};
exports.BranchModule = BranchModule;
exports.BranchModule = BranchModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([branches_entity_1.Branch, product_branch_entity_1.ProductBranch, branch_material_entity_1.BranchMaterial, rawmaterial_entity_1.RawMaterial,]), product_module_1.ProductModule, branch_material_module_1.BranchMaterialModule,],
        providers: [branch_service_1.BranchService],
        controllers: [branch_controller_1.BranchController],
    })
], BranchModule);
//# sourceMappingURL=branch.module.js.map