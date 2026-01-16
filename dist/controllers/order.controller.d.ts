import { OrderService } from '../services/order.service';
import { CreateOrderCustomerDto, UpdateOrderCustomerDto } from '../dtos/order.dto';
import { CreateOrderDetailsDto } from 'src/dtos/order-details.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    findAll(): Promise<any[]>;
    findLatest(): Promise<any>;
    findOne(id: number): Promise<any>;
    create(dto: CreateOrderCustomerDto): Promise<import("../entities/order_tb.entity").Order>;
    addDetail(id: number, dto: CreateOrderDetailsDto): Promise<import("../entities/order-details.entity").OrderDetails>;
    update(id: number, dto: UpdateOrderCustomerDto): Promise<{
        message: string;
    }>;
    complete(id: number): Promise<{
        message: string;
    }>;
    cancel(id: number): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    getOrdersByCustomer(phone: string): Promise<{
        id: number;
        serviceType: string;
        orderDate: Date;
        status: string;
        branchId: number;
        branchName: string;
        totalPrice: number;
        order_details: {
            productId: number;
            size: string;
            mood: string;
            quantity: number;
        }[];
    }[]>;
    getOrderByCustomer(phone: string, id: number): Promise<{
        id: number;
        serviceType: string;
        orderDate: Date;
        status: string;
        branchId: number;
        branchName: string;
        totalPrice: number;
        order_details: {
            productId: number;
            size: string;
            mood: string;
            quantity: number;
        }[];
    }>;
    cancelByCustomer(phone: string, id: number): Promise<{
        message: string;
    }>;
}
