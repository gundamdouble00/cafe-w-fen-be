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
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rating_entity_1 = require("../entities/rating.entity");
const typeorm_2 = require("typeorm");
const customer_entity_1 = require("../entities/customer.entity");
const product_entity_1 = require("../entities/product.entity");
const order_tb_entity_1 = require("../entities/order_tb.entity");
const order_details_entity_1 = require("../entities/order-details.entity");
let RatingService = class RatingService {
    constructor(ratingRepo, customerRepo, productRepo, orderRepo, detailRepo) {
        this.ratingRepo = ratingRepo;
        this.customerRepo = customerRepo;
        this.productRepo = productRepo;
        this.orderRepo = orderRepo;
        this.detailRepo = detailRepo;
    }
    async create(dto) {
        const customer = await this.customerRepo.findOne({ where: { phone: dto.phoneCustomer } });
        const product = await this.productRepo.findOne({ where: { id: dto.productId } });
        if (!customer || !product) {
            throw new common_1.NotFoundException('Customer or Product not found');
        }
        const hasPurchased = await this.detailRepo
            .createQueryBuilder('detail')
            .innerJoin('detail.order', 'order')
            .where('order.phoneCustomer = :phone', { phone: dto.phoneCustomer })
            .andWhere('detail.productID = :productId', { productId: dto.productId })
            .getExists();
        if (!hasPurchased) {
            throw new common_1.NotFoundException('Customer must purchase the product before rating');
        }
        const rating = this.ratingRepo.create({
            description: dto.description,
            star: dto.star,
            customer,
            product,
        });
        return this.ratingRepo.save(rating);
    }
    async findAll() {
        const ratings = await this.ratingRepo.find({
            relations: ['customer', 'product'],
            order: { createdAt: 'DESC' },
        });
        return ratings.map((r) => ({
            id: r.id,
            description: r.description,
            star: r.star,
            createdAt: r.createdAt,
            customer: {
                phone: r.customer.phone,
                name: r.customer.name,
                rank: r.customer.rank,
            },
            product: {
                id: r.product.id,
                name: r.product.name,
                image: r.product.image,
            },
        }));
    }
    async findByProduct(productId) {
        const ratings = await this.ratingRepo.find({
            where: { product: { id: productId } },
            relations: ['customer'],
            order: { createdAt: 'DESC' },
        });
        const totalRatings = ratings.length;
        const starCounts = [0, 0, 0, 0, 0];
        let sumStars = 0;
        for (const r of ratings) {
            const starIndex = r.star - 1;
            if (starIndex >= 0 && starIndex < 5) {
                starCounts[starIndex]++;
            }
            sumStars += r.star;
        }
        const averageStar = totalRatings ? +(sumStars / totalRatings).toFixed(1) : 0;
        return {
            averageStar,
            totalRatings,
            starCounts: {
                1: starCounts[0],
                2: starCounts[1],
                3: starCounts[2],
                4: starCounts[3],
                5: starCounts[4],
            },
            ratings: ratings.map((r) => ({
                id: r.id,
                description: r.description,
                star: r.star,
                createdAt: r.createdAt,
                customer: {
                    phone: r.customer.phone,
                    name: r.customer.name,
                    rank: r.customer.rank,
                },
            })),
        };
    }
    async update(id, dto) {
        const rating = await this.ratingRepo.findOne({ where: { id } });
        if (!rating)
            throw new common_1.NotFoundException(`Rating with ID ${id} not found`);
        rating.description = dto.description;
        rating.star = dto.star;
        return this.ratingRepo.save(rating);
    }
    async remove(id) {
        const result = await this.ratingRepo.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Rating with ID ${id} not found`);
        }
        return { message: 'Rating deleted successfully' };
    }
};
exports.RatingService = RatingService;
exports.RatingService = RatingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rating_entity_1.Rating)),
    __param(1, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(3, (0, typeorm_1.InjectRepository)(order_tb_entity_1.Order)),
    __param(4, (0, typeorm_1.InjectRepository)(order_details_entity_1.OrderDetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RatingService);
//# sourceMappingURL=rating.service.js.map