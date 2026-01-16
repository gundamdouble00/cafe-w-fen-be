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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchMaterialController = void 0;
const common_1 = require("@nestjs/common");
const branch_material_service_1 = require("../services/branch_material.service");
const branch_material_dto_1 = require("../dtos/branch_material.dto");
const swagger_1 = require("@nestjs/swagger");
const RoleDecorator_1 = require("../guards/RoleDecorator");
const common_2 = require("@nestjs/common");
const RoleGuard_1 = require("../guards/RoleGuard");
const role_enum_1 = require("../enums/role.enum");
const passport_1 = require("@nestjs/passport");
let BranchMaterialController = class BranchMaterialController {
    constructor(branchMaterialService) {
        this.branchMaterialService = branchMaterialService;
    }
    getAll(req) {
        return this.branchMaterialService.findByBranchId(req.user.branchId);
    }
    getOne(req, id) {
        return this.branchMaterialService.findOneByIdForBranch(req.user.branchId, id);
    }
    update(req, id, dto) {
        return this.branchMaterialService.updateForBranch(req.user.branchId, id, dto);
    }
};
exports.BranchMaterialController = BranchMaterialController;
__decorate([
    (0, common_1.Get)('list'),
    __param(0, (0, common_2.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BranchMaterialController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_2.Req)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], BranchMaterialController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_2.Req)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, branch_material_dto_1.UpdateBranchMaterialDto]),
    __metadata("design:returntype", void 0)
], BranchMaterialController.prototype, "update", null);
exports.BranchMaterialController = BranchMaterialController = __decorate([
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    (0, swagger_1.ApiTags)('Branch Material'),
    (0, common_1.Controller)('branch-material'),
    __metadata("design:paramtypes", [branch_material_service_1.BranchMaterialService])
], BranchMaterialController);
//# sourceMappingURL=branch_material.controller.js.map