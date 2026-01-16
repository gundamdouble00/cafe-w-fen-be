import { Coupon } from '../entities/coupon.entity';
import { Repository } from 'typeorm';
import { CouponDto } from '../dtos/coupon.dto';
import { Promote } from '../entities/promote.entity';
export declare class CouponService {
    private readonly couponRepo;
    private readonly promoteRepo;
    constructor(couponRepo: Repository<Coupon>, promoteRepo: Repository<Promote>);
    findAll(): Promise<Coupon[]>;
    findOne(id: number): Promise<Coupon>;
    create(dto: CouponDto): Promise<Coupon>;
    update(id: number, dto: CouponDto): Promise<Coupon>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
