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
exports.PromoteController = void 0;
const common_1 = require("@nestjs/common");
const promote_service_1 = require("../services/promote.service");
const promote_dto_1 = require("../dtos/promote.dto");
const swagger_1 = require("@nestjs/swagger");
const coupon_service_1 = require("../services/coupon.service");
const coupon_dto_1 = require("../dtos/coupon.dto");
const passport_1 = require("@nestjs/passport");
const RoleGuard_1 = require("../guards/RoleGuard");
const RoleDecorator_1 = require("../guards/RoleDecorator");
const role_enum_1 = require("../enums/role.enum");
let PromoteController = class PromoteController {
    constructor(promoteService, couponService) {
        this.promoteService = promoteService;
        this.couponService = couponService;
    }
    findAll() {
        return this.promoteService.findAll();
    }
    async findOne(id) {
        const promote = await this.promoteService.findOne(id);
        if (!promote) {
            throw new common_1.NotFoundException(`Promotion with ID ${id} not found`);
        }
        return promote;
    }
    create(dto) {
        return this.promoteService.create(dto);
    }
    async update(id, dto) {
        const updatedPromote = await this.promoteService.update(id, dto);
        if (!updatedPromote) {
            throw new common_1.NotFoundException(`Promotion with ID ${id} not found`);
        }
        return updatedPromote;
    }
    async remove(id) {
        const result = await this.promoteService.remove(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Promotion with ID ${id} not found`);
        }
        return;
    }
    findAllCoupons() {
        return this.couponService.findAll();
    }
    async findCoupon(id) {
        const coupon = await this.couponService.findOne(id);
        if (!coupon) {
            throw new common_1.NotFoundException(`Coupon with ID ${id} not found`);
        }
        return coupon;
    }
    createCoupon(dto) {
        return this.couponService.create(dto);
    }
    async updateCoupon(id, dto) {
        const updatedCoupon = await this.couponService.update(id, dto);
        if (!updatedCoupon) {
            throw new common_1.NotFoundException(`Coupon with ID ${id} not found`);
        }
        return updatedCoupon;
    }
    async removeCoupon(id) {
        const result = await this.couponService.remove(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Coupon with ID ${id} not found`);
        }
        return;
    }
};
exports.PromoteController = PromoteController;
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of all promotions' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of promotions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PromoteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a promotion by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Promotion found by ID' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Promotion not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PromoteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_SYSTEM]),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new promotion' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Promotion created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [promote_dto_1.PromoteDto]),
    __metadata("design:returntype", void 0)
], PromoteController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_SYSTEM]),
    (0, swagger_1.ApiOperation)({ summary: 'Update a promotion by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Promotion updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Promotion not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, promote_dto_1.PromoteDto]),
    __metadata("design:returntype", Promise)
], PromoteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_SYSTEM]),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a promotion by ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Promotion deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Promotion not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PromoteController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/coupon/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of all coupons' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of coupons' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PromoteController.prototype, "findAllCoupons", null);
__decorate([
    (0, common_1.Get)('/coupon/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a coupon by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Coupon found by ID' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Coupon not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PromoteController.prototype, "findCoupon", null);
__decorate([
    (0, common_1.Post)('/coupon'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_SYSTEM]),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new coupon' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Coupon created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coupon_dto_1.CouponDto]),
    __metadata("design:returntype", void 0)
], PromoteController.prototype, "createCoupon", null);
__decorate([
    (0, common_1.Put)('/coupon/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_SYSTEM]),
    (0, swagger_1.ApiOperation)({ summary: 'Update a coupon by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Coupon updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Coupon not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, coupon_dto_1.CouponDto]),
    __metadata("design:returntype", Promise)
], PromoteController.prototype, "updateCoupon", null);
__decorate([
    (0, common_1.Delete)('/coupon/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_SYSTEM]),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a coupon by ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Coupon deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Coupon not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PromoteController.prototype, "removeCoupon", null);
exports.PromoteController = PromoteController = __decorate([
    (0, swagger_1.ApiTags)('Promote'),
    (0, common_1.Controller)('promote'),
    __metadata("design:paramtypes", [promote_service_1.PromoteService,
        coupon_service_1.CouponService])
], PromoteController);
//# sourceMappingURL=promote.controller.js.map