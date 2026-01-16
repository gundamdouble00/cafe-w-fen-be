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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("../services/order.service");
const order_dto_1 = require("../dtos/order.dto");
const order_details_dto_1 = require("../dtos/order-details.dto");
const swagger_1 = require("@nestjs/swagger");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    findAll() {
        return this.orderService.findAll();
    }
    findLatest() {
        return this.orderService.findLatest();
    }
    findOne(id) {
        return this.orderService.findOne(id);
    }
    create(dto) {
        return this.orderService.create(dto);
    }
    addDetail(id, dto) {
        return this.orderService.addDetail(id, dto);
    }
    update(id, dto) {
        return this.orderService.update(id, dto);
    }
    complete(id) {
        return this.orderService.markComplete(id);
    }
    cancel(id) {
        return this.orderService.markCancel(id);
    }
    remove(id) {
        return this.orderService.remove(id);
    }
    getOrdersByCustomer(phone) {
        return this.orderService.findAllByCustomerPhone(phone);
    }
    getOrderByCustomer(phone, id) {
        return this.orderService.findOneByCustomerPhone(id, phone);
    }
    cancelByCustomer(phone, id) {
        return this.orderService.cancelByCustomer(id, phone);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of all orders' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/new'),
    (0, swagger_1.ApiOperation)({ summary: 'Get latest order' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "findLatest", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get order by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create order only (no details)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.CreateOrderCustomerDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/detail/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Add product to existing order' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_details_dto_1.CreateOrderDetailsDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "addDetail", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update order by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_dto_1.UpdateOrderCustomerDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('/complete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mark order as completed' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "complete", null);
__decorate([
    (0, common_1.Put)('/cancel/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mark order as cancelled' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "cancel", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete order by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('customer/:phone'),
    __param(0, (0, common_1.Param)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrdersByCustomer", null);
__decorate([
    (0, common_1.Get)('customer/:phone/:id'),
    __param(0, (0, common_1.Param)('phone')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrderByCustomer", null);
__decorate([
    (0, common_1.Put)('customer/:phone/:id/cancel'),
    __param(0, (0, common_1.Param)('phone')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "cancelByCustomer", null);
exports.OrderController = OrderController = __decorate([
    (0, swagger_1.ApiTags)('Order'),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map