import { Order } from '../entities/order_tb.entity';
import { Repository, DataSource } from 'typeorm';
import { UpdateOrderCustomerDto, CreateOrderCustomerDto } from '../dtos/order.dto';
import { OrderDetails } from '../entities/order-details.entity';
import { CreateOrderDetailsDto } from 'src/dtos/order-details.dto';
export declare class OrderService {
    private readonly orderRepo;
    private readonly detailRepo;
    private readonly dataSource;
    constructor(orderRepo: Repository<Order>, detailRepo: Repository<OrderDetails>, dataSource: DataSource);
    findAll(): Promise<any[]>;
    findLatest(): Promise<any>;
    findOne(id: number): Promise<any>;
    create(dto: CreateOrderCustomerDto): Promise<Order>;
    update(id: number, dto: UpdateOrderCustomerDto): Promise<{
        message: string;
    }>;
    markComplete(id: number): Promise<{
        message: string;
    }>;
    markCancel(id: number): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    addDetail(orderID: number, dto: CreateOrderDetailsDto): Promise<OrderDetails>;
    findAllByCustomerPhone(phone: string): Promise<{
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
    findOneByCustomerPhone(id: number, phone: string): Promise<{
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
    cancelByCustomer(id: number, phone: string): Promise<{
        message: string;
    }>;
}
