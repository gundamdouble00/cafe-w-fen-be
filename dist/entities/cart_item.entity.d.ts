import { Customer } from './customer.entity';
import { Product } from './product.entity';
export declare class CartItem {
    id: number;
    quantity: number;
    size: string;
    mood: string;
    phoneCustomer: string;
    productId: number;
    customer: Customer;
    product: Product;
}
