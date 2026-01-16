import { Repository, DataSource } from 'typeorm';
import { Product } from '../entities/product.entity';
import { ProductSize } from '../entities/product_size.entity';
import { CreateProductDto } from '../dtos/product.dto';
import { UpdateProductDto } from '../dtos/product.dto';
import { UpdateStatusDto } from '../dtos/product.dto';
import { ProductBranch } from 'src/entities/product_branch.entity';
export declare class ProductService {
    private readonly productRepo;
    private readonly sizeRepo;
    private readonly productBranchRepo;
    private readonly dataSource;
    constructor(productRepo: Repository<Product>, sizeRepo: Repository<ProductSize>, productBranchRepo: Repository<ProductBranch>, dataSource: DataSource);
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
    findBranchesByProduct(productId: number): Promise<{
        id: number;
        name: string;
        address: string;
        phone: string;
        createdAt: Date;
    }[]>;
    filterProducts(filterDto: {
        branchId?: number;
        category?: string;
    }): Promise<{
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
    create(createDto: CreateProductDto): Promise<{
        message: string;
        id: number;
    }>;
    update(id: number, updateDto: UpdateProductDto): Promise<{
        message: string;
    }>;
    updateAvailability(id: number, dto: UpdateStatusDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
