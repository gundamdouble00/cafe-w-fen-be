import { ProductService } from '../services/product.service';
import { CreateProductDto, UpdateStatusDto, FilterProductDto } from '../dtos/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<{
        id: string;
        name: string;
        category: string;
        description: string;
        image: string;
        available: boolean;
        hot: boolean;
        cold: boolean;
        isPopular: boolean;
        isNew: boolean;
        sizes: {
            sizeName: string;
            price: number;
        }[];
        materials: {
            materialId: number;
            materialQuantity: number;
            name: string;
        }[];
    }[]>;
    filterProducts(filterDto: FilterProductDto): Promise<{
        id: string;
        name: string;
        category: string;
        description: string;
        image: string;
        available: boolean;
        hot: boolean;
        cold: boolean;
        isPopular: boolean;
        isNew: boolean;
        sizes: {
            sizeName: string;
            price: number;
        }[];
        materials: {
            materialId: number;
            materialQuantity: number;
            name: string;
        }[];
    }[]>;
    findBranches(productId: number): Promise<{
        id: number;
        name: string;
        address: string;
        phone: string;
        createdAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: string;
        name: string;
        category: string;
        description: string;
        image: string;
        available: boolean;
        hot: boolean;
        cold: boolean;
        isPopular: boolean;
        isNew: boolean;
        sizes: {
            sizeName: string;
            price: number;
        }[];
        materials: {
            materialId: number;
            materialQuantity: number;
            name: string;
        }[];
    }>;
    create(dto: CreateProductDto): Promise<{
        message: string;
        id: number;
    }>;
    update(id: number, dto: CreateProductDto): Promise<{
        message: string;
    }>;
    updateAvailability(id: number, dto: UpdateStatusDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
