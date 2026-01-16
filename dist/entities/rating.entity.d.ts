import { Product } from './product.entity';
import { Customer } from './customer.entity';
export declare class Rating {
    id: number;
    description: string;
    star: number;
    phoneCustomer: string;
    productId: number;
    customer: Customer;
    product: Product;
    createdAt: Date;
}
