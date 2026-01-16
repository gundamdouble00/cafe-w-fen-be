import { Product } from './product.entity';
import { Order } from './order_tb.entity';
export declare class OrderDetails {
    orderID: number;
    productID: number;
    product: Product;
    order: Order;
    quantity: number;
    size: string;
    mood: string;
}
