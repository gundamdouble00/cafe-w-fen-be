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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_entity_1 = require("../entities/customer.entity");
const typeorm_2 = require("typeorm");
let CustomerService = class CustomerService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    findAll() {
        return this.customerRepository.find();
    }
    async findOne(phone) {
        const customer = await this.customerRepository.findOne({
            where: { phone },
        });
        if (!customer) {
            throw new common_1.NotFoundException(`Customer with Phone ${phone} not found`);
        }
        return customer;
    }
    create(createCustomerDto) {
        const customer = this.customerRepository.create(createCustomerDto);
        return this.customerRepository.save(customer);
    }
    async update(id, updateCustomerDto) {
        const customer = await this.customerRepository.findOne({
            where: { id },
        });
        if (!customer) {
            throw new common_1.NotFoundException(`Customer with ID ${id} not found`);
        }
        Object.assign(customer, updateCustomerDto);
        return this.customerRepository.save(customer);
    }
    async remove(id) {
        const customer = await this.customerRepository.findOne({ where: { id } });
        if (!customer) {
            throw new common_1.NotFoundException(`Customer with ID ${id} not found`);
        }
        await this.customerRepository.delete({ phone: customer.phone });
        return { message: 'Customer removed successfully' };
    }
    async updateTotal(phone, total) {
        const customer = await this.customerRepository.findOne({ where: { phone } });
        if (!customer) {
            throw new common_1.NotFoundException(`Customer with phone ${phone} not found`);
        }
        customer.total = total;
        await this.customerRepository.save(customer);
        return { message: 'Customer total updated successfully' };
    }
    async searchByPhone(phone) {
        return await this.customerRepository
            .createQueryBuilder('customer')
            .where('customer.phone LIKE :phone', { phone: `%${phone}%` })
            .limit(10)
            .getMany();
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerService);
//# sourceMappingURL=customer.service.js.map