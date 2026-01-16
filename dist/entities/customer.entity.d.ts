import { Order } from './order_tb.entity';
import { Rating } from './rating.entity';
import { CartItem } from './cart_item.entity';
export declare class Customer {
    phone: string;
    id: number;
    name: string;
    gender: string;
    total: number;
    registrationDate: Date;
    rank: string;
    image: string;
    address: string;
    password: string;
    orders: Order[];
    ratings: Rating[];
    cartItems: CartItem[];
}
