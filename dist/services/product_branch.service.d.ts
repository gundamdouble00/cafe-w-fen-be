import { Repository } from 'typeorm';
import { ProductBranch } from '../entities/product_branch.entity';
import { CreateProductBranchDto, UpdateProductBranchStatusDto } from '../dtos/product_branch.dto';
import { Product } from '../entities/product.entity';
import { Branch } from '../entities/branches.entity';
export declare class ProductBranchService {
    private readonly productBranchRepo;
    private readonly productRepo;
    private readonly branchRepo;
    constructor(productBranchRepo: Repository<ProductBranch>, productRepo: Repository<Product>, branchRepo: Repository<Branch>);
    findAll(branchId: number): Promise<{
        id: string;
        productId: number;
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
            name: string;
        }[];
        branch: {
            id: number;
            name: string;
            address: string;
            phone: string;
            createdAt: Date;
        };
    }[]>;
    findOne(id: number, branchId: number): Promise<{
        id: string;
        productId: number;
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
            name: string;
        }[];
        branch: {
            id: number;
            name: string;
            address: string;
            phone: string;
            createdAt: Date;
        };
    }>;
    create(dto: CreateProductBranchDto, branchId: number): Promise<ProductBranch>;
    updateAvailability(id: number, dto: UpdateProductBranchStatusDto, branchId: number): Promise<ProductBranch>;
    remove(id: number, branchId: number): Promise<void>;
}
