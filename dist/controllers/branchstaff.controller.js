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
exports.BranchStaffController = void 0;
const common_1 = require("@nestjs/common");
const branchstaff_service_1 = require("../services/branchstaff.service");
const staff_dto_1 = require("../dtos/staff.dto");
const passport_1 = require("@nestjs/passport");
const RoleGuard_1 = require("../guards/RoleGuard");
const RoleDecorator_1 = require("../guards/RoleDecorator");
const role_enum_1 = require("../enums/role.enum");
const swagger_1 = require("@nestjs/swagger");
let BranchStaffController = class BranchStaffController {
    constructor(branchStaffService) {
        this.branchStaffService = branchStaffService;
    }
    async findAll(req, res) {
        const user = req.user;
        return res.status(common_1.HttpStatus.OK).json(await this.branchStaffService.findAll(user.branchId));
    }
    async create(req, res, dto) {
        const user = req.user;
        return res.status(common_1.HttpStatus.CREATED).json(await this.branchStaffService.create(dto, user.branchId));
    }
    async findById(req, res, id) {
        const user = req.user;
        return res.status(common_1.HttpStatus.OK).json(await this.branchStaffService.findOneByBranch(user.branchId, id));
    }
    async update(req, res, id, dto) {
        const user = req.user;
        return res.status(common_1.HttpStatus.OK).json(await this.branchStaffService.update(id, dto, user.branchId));
    }
    async remove(req, res, id) {
        const user = req.user;
        return res.status(common_1.HttpStatus.OK).json(await this.branchStaffService.remove(id, user.branchId));
    }
};
exports.BranchStaffController = BranchStaffController;
__decorate([
    (0, common_1.Get)('/list'),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND]),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BranchStaffController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND]),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, staff_dto_1.StaffDto]),
    __metadata("design:returntype", Promise)
], BranchStaffController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND]),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number]),
    __metadata("design:returntype", Promise)
], BranchStaffController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND]),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)('id')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number, staff_dto_1.UpdateStaffDto]),
    __metadata("design:returntype", Promise)
], BranchStaffController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND]),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number]),
    __metadata("design:returntype", Promise)
], BranchStaffController.prototype, "remove", null);
exports.BranchStaffController = BranchStaffController = __decorate([
    (0, swagger_1.ApiTags)('branch-staff'),
    (0, common_1.Controller)('branch-staff'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [branchstaff_service_1.BranchStaffService])
], BranchStaffController);
//# sourceMappingURL=branchstaff.controller.js.map