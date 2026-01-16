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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("../services/customer.service");
const customer_dto_1 = require("../dtos/customer.dto");
const swagger_1 = require("@nestjs/swagger");
const customer_entity_1 = require("../entities/customer.entity");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    findAll() {
        return this.customerService.findAll();
    }
    search(phone) {
        return this.customerService.searchByPhone(phone);
    }
    findOne(phone) {
        return this.customerService.findOne(phone);
    }
    create(createCustomerDto) {
        return this.customerService.create(createCustomerDto);
    }
    updateTotal(phone, body) {
        return this.customerService.updateTotal(phone, body.total);
    }
    update(id, updateCustomerDto) {
        return this.customerService.update(id, updateCustomerDto);
    }
    remove(id) {
        return this.customerService.remove(id);
    }
};
exports.CustomerController = CustomerController;
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of customers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of customers', type: [customer_entity_1.Customer] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/search'),
    (0, swagger_1.ApiOperation)({ summary: 'Search customers by phone' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of customers', type: [customer_entity_1.Customer] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No customers found' }),
    __param(0, (0, common_1.Query)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':phone'),
    (0, swagger_1.ApiOperation)({ summary: 'Get customer by phone' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Customer found', type: customer_entity_1.Customer }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Customer not found' }),
    __param(0, (0, common_1.Param)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new customer' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Customer created', type: customer_entity_1.Customer }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/total/:phone'),
    (0, swagger_1.ApiOperation)({ summary: 'Update customer total' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Customer total updated' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Customer not found' }),
    __param(0, (0, common_1.Param)('phone')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "updateTotal", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update customer' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Customer updated', type: customer_entity_1.Customer }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Customer not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, customer_dto_1.UpdateCustomerDto]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete customer' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Customer deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Customer not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "remove", null);
exports.CustomerController = CustomerController = __decorate([
    (0, swagger_1.ApiTags)('Customer'),
    (0, common_1.Controller)('customer'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
//# sourceMappingURL=customer.controller.js.map