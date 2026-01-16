import { CartService } from '../services/cart.service';
import { CreateCartItemDto, UpdateCartItemDto } from '../dtos/cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    findAll(phoneCustomer: string): Promise<{
        id: number;
        quantity: number;
        size: string;
        mood: string;
        productId: number;
        name: string;
        image: string;
        price: number;
    }[]>;
    create(dto: CreateCartItemDto): Promise<import("../entities/cart_item.entity").CartItem>;
    update(id: number, dto: UpdateCartItemDto): Promise<import("../entities/cart_item.entity").CartItem>;
    remove(id: number): Promise<{
        message: string;
    }>;
    clearCart(phoneCustomer: string): Promise<{
        message: string;
    }>;
}
