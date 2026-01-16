import { Repository, DataSource } from 'typeorm';
import { Order } from '../entities/order_tb.entity';
import { Product } from '../entities/product.entity';
import { Customer } from '../entities/customer.entity';
import { Staff } from '../entities/staff.entity';
import { Table } from '../entities/tables.entity';
import { OrderDetails } from '../entities/order-details.entity';
import { Branch } from 'src/entities/branches.entity';
export declare class ReportService {
    private dataSource;
    private orderRepo;
    private productRepo;
    private customerRepo;
    private staffRepo;
    private tableRepo;
    private orderDetailRepo;
    private branchRepo;
    constructor(dataSource: DataSource, orderRepo: Repository<Order>, productRepo: Repository<Product>, customerRepo: Repository<Customer>, staffRepo: Repository<Staff>, tableRepo: Repository<Table>, orderDetailRepo: Repository<OrderDetails>, branchRepo: Repository<Branch>);
    getSystemReport(): Promise<{
        totalPayment: number;
        totalProduct: number;
        totalCustomer: number;
        totalStaff: number;
        totalOrder: number;
        totalTable: number;
        totalBranch: number;
        last14DaysOrder: any;
        last14DaysOrderValue: any;
        last30DaysOrder: any;
        last30DaysOrderValue: any;
        salesByCategory: any;
        rankMap: any;
        serviceType: {
            takeAway: number;
            dineIn: number;
            delivery: number;
        };
        topProducts: any;
    }>;
    getBranchReport(branchId: number): Promise<{
        totalPayment: number;
        totalProduct: number;
        totalCustomer: number;
        totalStaff: number;
        totalOrder: number;
        totalTable: number;
        last14DaysOrder: any;
        last14DaysOrderValue: any;
        last30DaysOrder: any;
        last30DaysOrderValue: any;
        salesByCategory: any;
        serviceType: {
            takeAway: number;
            dineIn: number;
            delivery: number;
        };
        topProducts: any;
    }>;
    getBranchMonthlyComparison(): Promise<any>;
}
