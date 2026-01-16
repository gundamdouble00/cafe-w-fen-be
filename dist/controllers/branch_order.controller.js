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
exports.BranchOrderController = void 0;
const common_1 = require("@nestjs/common");
const branch_order_service_1 = require("../services/branch_order.service");
const order_dto_1 = require("../dtos/order.dto");
const order_details_dto_1 = require("../dtos/order-details.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const RoleGuard_1 = require("../guards/RoleGuard");
const RoleDecorator_1 = require("../guards/RoleDecorator");
const role_enum_1 = require("../enums/role.enum");
let BranchOrderController = class BranchOrderController {
    constructor(branchOrderService) {
        this.branchOrderService = branchOrderService;
    }
    findAll(req) {
        const branchId = req.user['branchId'];
        return this.branchOrderService.findAllByBranch(branchId);
    }
    findLatest(req) {
        const branchId = req.user['branchId'];
        return this.branchOrderService.findLatestInBranch(branchId);
    }
    findOne(id, req) {
        const branchId = req.user['branchId'];
        return this.branchOrderService.findOneByBranch(id, branchId);
    }
    create(dto, req) {
        const branchId = req.user['branchId'];
        return this.branchOrderService.create(dto, branchId);
    }
    update(id, dto, req) {
        const branchId = req.user['branchId'];
        return this.branchOrderService.updateInBranch(id, dto, branchId);
    }
    complete(id, req) {
        const branchId = req.user['branchId'];
        return this.branchOrderService.markCompleteInBranch(id, branchId);
    }
    cancel(id, req) {
        const branchId = req.user['branchId'];
        return this.branchOrderService.markCancelInBranch(id, branchId);
    }
    addDetail(id, dto, req) {
        const branchId = req.user['branchId'];
        return this.branchOrderService.addDetailInBranch(id, dto, branchId);
    }
    remove(id, req) {
        const branchId = req.user['branchId'];
        return this.branchOrderService.remove(id, branchId);
    }
    async updateStatus(id, dto, req) {
        const branchId = req.user.branchId;
        return this.branchOrderService.updateStatus(id, dto.status, branchId);
    }
};
exports.BranchOrderController = BranchOrderController;
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of orders in branch' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BranchOrderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/new'),
    (0, swagger_1.ApiOperation)({ summary: 'Get latest order in branch' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BranchOrderController.prototype, "findLatest", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get order detail by ID in branch' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BranchOrderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create new order in branch' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.CreateOrderDto, Object]),
    __metadata("design:returntype", void 0)
], BranchOrderController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update order in branch' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_dto_1.UpdateOrderDto, Object]),
    __metadata("design:returntype", void 0)
], BranchOrderController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('/complete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mark order as completed in branch' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BranchOrderController.prototype, "complete", null);
__decorate([
    (0, common_1.Put)('/cancel/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel order in branch' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BranchOrderController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)('/detail/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Add order details (products) in branch' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_details_dto_1.CreateOrderDetailsDto, Object]),
    __metadata("design:returntype", void 0)
], BranchOrderController.prototype, "addDetail", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete order by ID' }),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BranchOrderController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)('status/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_dto_1.UpdateOrderStatusDto, Object]),
    __metadata("design:returntype", Promise)
], BranchOrderController.prototype, "updateStatus", null);
exports.BranchOrderController = BranchOrderController = __decorate([
    (0, swagger_1.ApiTags)('Branch Order'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, common_1.Controller)('branch-order'),
    __metadata("design:paramtypes", [branch_order_service_1.BranchOrderService])
], BranchOrderController);
//# sourceMappingURL=branch_order.controller.js.map