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
exports.CouponService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const coupon_entity_1 = require("../entities/coupon.entity");
const typeorm_2 = require("typeorm");
const promote_entity_1 = require("../entities/promote.entity");
let CouponService = class CouponService {
    constructor(couponRepo, promoteRepo) {
        this.couponRepo = couponRepo;
        this.promoteRepo = promoteRepo;
    }
    async findAll() {
        return this.couponRepo.find({ relations: ['promote'] });
    }
    async findOne(id) {
        const coupon = await this.couponRepo.findOne({
            where: { id },
            relations: ['promote'],
        });
        if (!coupon) {
            throw new common_1.NotFoundException(`Coupon with ID ${id} not found`);
        }
        return coupon;
    }
    async create(dto) {
        const promote = await this.promoteRepo.findOne({ where: { id: dto.promoteId } });
        if (!promote) {
            throw new common_1.NotFoundException(`Promote with ID ${dto.promoteId} not found`);
        }
        const coupon = this.couponRepo.create({
            code: dto.code,
            status: dto.status,
            promote,
        });
        return this.couponRepo.save(coupon);
    }
    async update(id, dto) {
        const coupon = await this.couponRepo.findOne({ where: { id } });
        if (!coupon) {
            throw new common_1.NotFoundException(`Coupon with ID ${id} not found`);
        }
        const promote = await this.promoteRepo.findOne({ where: { id: dto.promoteId } });
        if (!promote) {
            throw new common_1.NotFoundException(`Promote with ID ${dto.promoteId} not found`);
        }
        coupon.code = dto.code;
        coupon.status = dto.status;
        coupon.promote = promote;
        return this.couponRepo.save(coupon);
    }
    async remove(id) {
        const result = await this.couponRepo.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Coupon with ID ${id} not found`);
        }
        return result;
    }
};
exports.CouponService = CouponService;
exports.CouponService = CouponService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(coupon_entity_1.Coupon)),
    __param(1, (0, typeorm_1.InjectRepository)(promote_entity_1.Promote)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CouponService);
//# sourceMappingURL=coupon.service.js.map