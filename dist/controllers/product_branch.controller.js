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
exports.ProductBranchController = void 0;
const common_1 = require("@nestjs/common");
const product_branch_service_1 = require("../services/product_branch.service");
const product_branch_dto_1 = require("../dtos/product_branch.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const RoleGuard_1 = require("../guards/RoleGuard");
const RoleDecorator_1 = require("../guards/RoleDecorator");
const role_enum_1 = require("../enums/role.enum");
let ProductBranchController = class ProductBranchController {
    constructor(productBranchService) {
        this.productBranchService = productBranchService;
    }
    findAll(req) {
        const branchId = req.user['branchId'];
        return this.productBranchService.findAll(branchId);
    }
    findOne(id, req) {
        const branchId = req.user['branchId'];
        return this.productBranchService.findOne(id, branchId);
    }
    updateAvailability(id, dto, req) {
        const branchId = req.user['branchId'];
        return this.productBranchService.updateAvailability(id, dto, branchId);
    }
};
exports.ProductBranchController = ProductBranchController;
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get product availability in branches' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_SYSTEM, role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductBranchController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get product branch by ID' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_SYSTEM, role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ProductBranchController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/available/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update availability of product in branch' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_branch_dto_1.UpdateProductBranchStatusDto, Object]),
    __metadata("design:returntype", void 0)
], ProductBranchController.prototype, "updateAvailability", null);
exports.ProductBranchController = ProductBranchController = __decorate([
    (0, swagger_1.ApiTags)('ProductBranch'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, common_1.Controller)('product-branch'),
    __metadata("design:paramtypes", [product_branch_service_1.ProductBranchService])
], ProductBranchController);
//# sourceMappingURL=product_branch.controller.js.map