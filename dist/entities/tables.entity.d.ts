import { Order } from './order_tb.entity';
import { Branch } from './branches.entity';
export declare class Table {
    id: number;
    status: string;
    phoneOrder?: string;
    bookingTime?: Date;
    seatingTime?: Date;
    seat: number;
    name: string;
    branchId: number;
    branch: Branch;
    orders: Order[];
}
