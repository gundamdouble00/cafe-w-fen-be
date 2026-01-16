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
exports.BranchOrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_tb_entity_1 = require("../entities/order_tb.entity");
const order_details_entity_1 = require("../entities/order-details.entity");
const product_size_entity_1 = require("../entities/product_size.entity");
const product_branch_entity_1 = require("../entities/product_branch.entity");
let BranchOrderService = class BranchOrderService {
    constructor(orderRepository, detailRepo, sizeRepo, productBranchRepo, orderRepo) {
        this.orderRepository = orderRepository;
        this.detailRepo = detailRepo;
        this.sizeRepo = sizeRepo;
        this.productBranchRepo = productBranchRepo;
        this.orderRepo = orderRepo;
    }
    async findAllByBranch(branchId) {
        return this.orderRepository.find({
            where: { branch: { id: branchId } },
            relations: ['customer', 'staff', 'table', 'details', 'details.product'],
            order: { orderDate: 'DESC' },
        });
    }
    async findLatestInBranch(branchId) {
        const order = await this.orderRepository.findOne({
            where: { branch: { id: branchId } },
            relations: ['details', 'details.product', 'table'],
            order: { id: 'DESC' },
        });
        if (!order) {
            throw new common_1.NotFoundException('No orders found in this branch');
        }
        let deliveryFee = 0;
        if (order.serviceType === 'DELIVERY' && order.totalPrice < 250000) {
            deliveryFee = 15000;
        }
        const detailItems = await Promise.all(order.details.map(async (d) => {
            const productSize = await this.sizeRepo.findOne({
                where: {
                    product: { id: d.product.id },
                    sizeName: d.size,
                },
            });
            const unitPrice = productSize?.price ?? 0;
            const totalItemPrice = unitPrice * d.quantity;
            return {
                productId: d.product.id,
                size: d.size,
                mood: d.mood,
                quantity: d.quantity,
                unitPrice,
                totalItemPrice,
            };
        }));
        const totalProductPrice = detailItems.reduce((sum, item) => sum + item.totalItemPrice, 0);
        const discount = (totalProductPrice + deliveryFee) - order.totalPrice;
        return {
            id: order.id,
            phoneCustomer: order.phoneCustomer,
            serviceType: order.serviceType,
            orderDate: order.orderDate,
            branchId: order.branchId,
            tableID: order.table?.id || null,
            status: order.status,
            totalPrice: order.totalPrice,
            deliveryFee: deliveryFee,
            discount: discount,
            order_details: order.details.map((d) => ({
                productId: d.product.id,
                size: d.size,
                mood: d.mood,
                quantity: d.quantity,
            })),
        };
    }
    async findOneByBranch(id, branchId) {
        const order = await this.orderRepository.findOne({
            where: { id, branch: { id: branchId } },
            relations: ['customer', 'staff', 'table', 'details', 'details.product'],
        });
        if (!order)
            throw new common_1.NotFoundException('Order not found in this branch');
        return order;
    }
    async create(dto, branchId) {
        const order = this.orderRepository.create({
            ...dto,
            branchId: branchId,
        });
        return this.orderRepository.save(order);
    }
    async updateInBranch(id, dto, branchId) {
        const order = await this.orderRepository.findOne({ where: { id, branchId: branchId } });
        if (!order)
            throw new common_1.NotFoundException('Order not found in this branch');
        Object.assign(order, dto);
        return this.orderRepository.save(order);
    }
    async markCompleteInBranch(id, branchId) {
        const result = await this.orderRepository.update({ id, branchId: branchId }, { status: 'Hoàn thành' });
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Order ${id} not found in branch`);
        return { message: 'Order marked as completed' };
    }
    async markCancelInBranch(id, branchId) {
        const result = await this.orderRepository.update({ id, branchId: branchId }, { status: 'Đã hủy' });
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Order ${id} not found in branch`);
        return { message: 'Order marked as cancelled' };
    }
    async updateStatus(orderId, newStatus, branchId) {
        const order = await this.orderRepo.findOne({ where: { id: orderId, branch: { id: branchId } } });
        if (!order)
            throw new common_1.NotFoundException('Order not found in your branch');
        order.status = newStatus;
        return this.orderRepo.save(order);
    }
    async addDetailInBranch(orderID, dto, branchId) {
        const order = await this.orderRepository.findOne({
            where: { id: orderID, branch: { id: branchId } },
        });
        if (!order)
            throw new common_1.NotFoundException('Order not found in this branch');
        const productBranch = await this.productBranchRepo.findOne({
            where: { id: dto.productID },
            relations: ['product'],
        });
        if (!productBranch || !productBranch.product)
            throw new common_1.NotFoundException('Product not found in this branch');
        const detail = this.detailRepo.create({
            order: { id: orderID },
            product: { id: productBranch.product.id },
            quantity: dto.quantity,
            size: dto.size,
            mood: dto.mood || null,
        });
        return this.detailRepo.save(detail);
    }
    async remove(id, branchId) {
        const result = await this.orderRepository.delete({ id, branchId: branchId });
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Order ${id} not found in branch`);
        return { message: 'Order deleted successfully' };
    }
};
exports.BranchOrderService = BranchOrderService;
exports.BranchOrderService = BranchOrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_tb_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(order_details_entity_1.OrderDetails)),
    __param(2, (0, typeorm_1.InjectRepository)(product_size_entity_1.ProductSize)),
    __param(3, (0, typeorm_1.InjectRepository)(product_branch_entity_1.ProductBranch)),
    __param(4, (0, typeorm_1.InjectRepository)(order_tb_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BranchOrderService);
//# sourceMappingURL=branch_order.service.js.map