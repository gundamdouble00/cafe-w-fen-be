import { Repository } from 'typeorm';
import { Order } from 'src/entities/order_tb.entity';
import { OrderDetails } from 'src/entities/order-details.entity';
import { CreateOrderDto, UpdateOrderDto } from 'src/dtos/order.dto';
import { CreateOrderDetailsDto } from 'src/dtos/order-details.dto';
import { ProductSize } from 'src/entities/product_size.entity';
import { ProductBranch } from '../entities/product_branch.entity';
import { OrderStatus } from 'src/dtos/order.dto';
export declare class BranchOrderService {
    private readonly orderRepository;
    private readonly detailRepo;
    private readonly sizeRepo;
    private readonly productBranchRepo;
    private readonly orderRepo;
    constructor(orderRepository: Repository<Order>, detailRepo: Repository<OrderDetails>, sizeRepo: Repository<ProductSize>, productBranchRepo: Repository<ProductBranch>, orderRepo: Repository<Order>);
    findAllByBranch(branchId: number): Promise<Order[]>;
    findLatestInBranch(branchId: number): Promise<{
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
    findOneByBranch(id: number, branchId: number): Promise<Order>;
    create(dto: CreateOrderDto, branchId: number): Promise<Order>;
    updateInBranch(id: number, dto: UpdateOrderDto, branchId: number): Promise<Order>;
    markCompleteInBranch(id: number, branchId: number): Promise<{
        message: string;
    }>;
    markCancelInBranch(id: number, branchId: number): Promise<{
        message: string;
    }>;
    updateStatus(orderId: number, newStatus: OrderStatus, branchId: number): Promise<Order>;
    addDetailInBranch(orderID: number, dto: CreateOrderDetailsDto, branchId: number): Promise<OrderDetails>;
    remove(id: number, branchId: number): Promise<{
        message: string;
    }>;
}
