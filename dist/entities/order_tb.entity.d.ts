import { Staff } from './staff.entity';
import { Table } from './tables.entity';
import { OrderDetails } from './order-details.entity';
import { Customer } from './customer.entity';
import { Invoice } from './invoice.entity';
import { Branch } from './branches.entity';
export declare class Order {
    id: number;
    phoneCustomer: string;
    customer: Customer;
    serviceType: string;
    totalPrice: number;
    staffID: number;
    staff: Staff;
    tableID: number;
    table: Table;
    orderDate: Date;
    status: string;
    paymentMethod: string;
    paymentStatus: string;
    details: OrderDetails[];
    invoices: Invoice[];
    branch: Branch;
    branchId: number;
}
