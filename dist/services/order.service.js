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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_tb_entity_1 = require("../entities/order_tb.entity");
const typeorm_2 = require("typeorm");
const order_details_entity_1 = require("../entities/order-details.entity");
let OrderService = class OrderService {
    constructor(orderRepo, detailRepo, dataSource) {
        this.orderRepo = orderRepo;
        this.detailRepo = detailRepo;
        this.dataSource = dataSource;
    }
    async findAll() {
        return this.orderRepo
            .createQueryBuilder('order')
            .leftJoin('order.staff', 'staff')
            .leftJoin('order.details', 'detail')
            .select([
            'order.id AS id',
            'order.phoneCustomer AS "phoneCustomer"',
            'order.serviceType AS "serviceType"',
            'order.totalPrice AS "totalPrice"',
            'order.tableID AS "tableID"',
            'order.orderDate AS "orderDate"',
            'order.status AS "status"',
            'staff.name AS "staffName"',
            'ARRAY_AGG(detail.productID) AS "productIDs"',
        ])
            .groupBy('order.id, staff.name')
            .getRawMany();
    }
    async findLatest() {
        const raw = await this.orderRepo
            .createQueryBuilder('order')
            .select([
            'order.id AS id',
            'order.phoneCustomer AS "phoneCustomer"',
            'order.serviceType AS "serviceType"',
            'order.orderDate AS "orderDate"',
            'order.tableID AS "tableID"',
        ])
            .orderBy('order.id', 'DESC')
            .limit(1)
            .getRawOne();
        if (!raw) {
            throw new common_1.NotFoundException('No orders found');
        }
        return raw;
    }
    async findOne(id) {
        const order = await this.orderRepo
            .createQueryBuilder('order')
            .leftJoin('order.staff', 'staff')
            .leftJoin('order.details', 'detail')
            .select([
            'order.id AS id',
            'order.phoneCustomer AS "phoneCustomer"',
            'order.serviceType AS "serviceType"',
            'order.totalPrice AS "totalPrice"',
            'order.tableID AS "tableID"',
            'order.orderDate AS "orderDate"',
            'order.status AS "status"',
            'staff.name AS "staffName"',
            'ARRAY_AGG(detail.productID) AS "productIDs"',
        ])
            .where('order.id = :id', { id })
            .groupBy('order.id, staff.name')
            .getRawOne();
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        return order;
    }
    async create(dto) {
        const order = this.orderRepo.create(dto);
        return this.orderRepo.save(order);
    }
    async update(id, dto) {
        const result = await this.orderRepo.update(id, dto);
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Order ${id} not found`);
        return { message: 'Order edited successfully' };
    }
    async markComplete(id) {
        const result = await this.orderRepo.update(id, { status: 'Hoàn thành' });
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Order ${id} not found`);
        return { message: 'Order marked as completed' };
    }
    async markCancel(id) {
        const result = await this.orderRepo.update(id, { status: 'Đã hủy' });
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Order ${id} not found`);
        return { message: 'Order marked as cancelled' };
    }
    async remove(id) {
        const result = await this.orderRepo.delete(id);
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Order ${id} not found`);
        return { message: 'Order deleted successfully' };
    }
    async addDetail(orderID, dto) {
        const detail = this.detailRepo.create({
            ...dto,
            order: { id: orderID },
        });
        return this.detailRepo.save(detail);
    }
    async findAllByCustomerPhone(phone) {
        const orders = await this.orderRepo.find({
            where: { phoneCustomer: phone },
            relations: ['details', 'details.product', 'branch'],
            order: { orderDate: 'DESC' },
        });
        return orders.map(order => ({
            id: order.id,
            serviceType: order.serviceType,
            orderDate: order.orderDate,
            status: order.status,
            branchId: order.branchId,
            branchName: order.branch?.name ?? '',
            totalPrice: order.totalPrice,
            order_details: (order.details || [])
                .filter(d => d && d.product && d.product.id)
                .map(d => ({
                productId: d.product.id,
                size: d.size,
                mood: d.mood,
                quantity: d.quantity,
            })),
        }));
    }
    async findOneByCustomerPhone(id, phone) {
        const order = await this.orderRepo.findOne({
            where: { id, phoneCustomer: phone },
            relations: ['details', 'details.product', 'branch'],
        });
        if (!order)
            throw new common_1.NotFoundException('Order not found or not yours');
        return {
            id: order.id,
            serviceType: order.serviceType,
            orderDate: order.orderDate,
            status: order.status,
            branchId: order.branchId,
            branchName: order.branch?.name ?? '',
            totalPrice: order.totalPrice,
            order_details: order.details.map(d => ({
                productId: d.product.id,
                size: d.size,
                mood: d.mood,
                quantity: d.quantity,
            })),
        };
    }
    async cancelByCustomer(id, phone) {
        const result = await this.orderRepo
            .createQueryBuilder()
            .update(order_tb_entity_1.Order)
            .set({ status: 'Đã hủy' })
            .where('id = :id AND phoneCustomer = :phone', { id, phone })
            .execute();
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Order not found or not yours');
        }
        return { message: 'Order cancelled by customer' };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_tb_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(order_details_entity_1.OrderDetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], OrderService);
//# sourceMappingURL=order.service.js.map