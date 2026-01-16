import { Coupon } from './coupon.entity';
export declare class Promote {
    id: number;
    name: string;
    description: string;
    discount: number;
    promoteType: string;
    startAt: Date;
    endAt: Date;
    coupons: Coupon[];
}
