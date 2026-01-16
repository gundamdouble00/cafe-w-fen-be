import { Request } from 'express';
import { BranchOrderService } from 'src/services/branch_order.service';
import { CreateOrderDto, UpdateOrderDto, UpdateOrderStatusDto } from 'src/dtos/order.dto';
import { CreateOrderDetailsDto } from 'src/dtos/order-details.dto';
export declare class BranchOrderController {
    private readonly branchOrderService;
    constructor(branchOrderService: BranchOrderService);
    findAll(req: Request): Promise<import("../entities/order_tb.entity").Order[]>;
    findLatest(req: Request): Promise<{
        id: number;
        phoneCustomer: string;
        serviceType: string;
        orderDate: Date;
        branchId: number;
        tableID: number;
        status: string;
        totalPrice: number;
        deliveryFee: number;
        discount: number;
        order_details: {
            productId: number;
            size: string;
            mood: string;
            quantity: number;
        }[];
    }>;
    findOne(id: number, req: Request): Promise<import("../entities/order_tb.entity").Order>;
    create(dto: CreateOrderDto, req: Request): Promise<import("../entities/order_tb.entity").Order>;
    update(id: number, dto: UpdateOrderDto, req: Request): Promise<import("../entities/order_tb.entity").Order>;
    complete(id: number, req: Request): Promise<{
        message: string;
    }>;
    cancel(id: number, req: Request): Promise<{
        message: string;
    }>;
    addDetail(id: number, dto: CreateOrderDetailsDto, req: Request): Promise<import("../entities/order-details.entity").OrderDetails>;
    remove(id: number, req: Request): Promise<{
        message: string;
    }>;
    updateStatus(id: number, dto: UpdateOrderStatusDto, req: any): Promise<import("../entities/order_tb.entity").Order>;
}
