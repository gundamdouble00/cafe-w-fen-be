import { Repository } from 'typeorm';
import { CartItem } from '../entities/cart_item.entity';
import { Customer } from '../entities/customer.entity';
import { Product } from '../entities/product.entity';
import { ProductSize } from '../entities/product_size.entity';
import { UpdateCartItemDto, CreateCartItemDto } from '../dtos/cart.dto';
export declare class CartService {
    private cartRepo;
    private customerRepo;
    private productRepo;
    private productSizeRepo;
    constructor(cartRepo: Repository<CartItem>, customerRepo: Repository<Customer>, productRepo: Repository<Product>, productSizeRepo: Repository<ProductSize>);
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
    create(dto: CreateCartItemDto): Promise<CartItem>;
    update(id: number, dto: UpdateCartItemDto): Promise<CartItem>;
    remove(id: number): Promise<{
        message: string;
    }>;
    clearCartByCustomer(phoneCustomer: string): Promise<{
        message: string;
    }>;
}
