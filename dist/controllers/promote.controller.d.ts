import { PromoteService } from '../services/promote.service';
import { PromoteDto } from '../dtos/promote.dto';
import { CouponService } from '../services/coupon.service';
import { CouponDto } from '../dtos/coupon.dto';
export declare class PromoteController {
    private readonly promoteService;
    private readonly couponService;
    constructor(promoteService: PromoteService, couponService: CouponService);
    findAll(): Promise<import("../entities/promote.entity").Promote[]>;
    findOne(id: number): Promise<import("../entities/promote.entity").Promote>;
    create(dto: PromoteDto): Promise<import("../entities/promote.entity").Promote>;
    update(id: number, dto: PromoteDto): Promise<import("../entities/promote.entity").Promote>;
    remove(id: number): Promise<void>;
    findAllCoupons(): Promise<import("../entities/coupon.entity").Coupon[]>;
    findCoupon(id: number): Promise<import("../entities/coupon.entity").Coupon>;
    createCoupon(dto: CouponDto): Promise<import("../entities/coupon.entity").Coupon>;
    updateCoupon(id: number, dto: CouponDto): Promise<import("../entities/coupon.entity").Coupon>;
    removeCoupon(id: number): Promise<void>;
}
