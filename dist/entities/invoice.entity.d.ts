import { Order } from './order_tb.entity';
export declare class Invoice {
    id: number;
    order: Order;
    paymentMethod: string;
    discount: number;
    finalAmount: number;
}
