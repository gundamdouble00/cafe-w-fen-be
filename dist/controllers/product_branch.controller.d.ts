import { Request } from 'express';
import { ProductBranchService } from '../services/product_branch.service';
import { UpdateProductBranchStatusDto } from '../dtos/product_branch.dto';
export declare class ProductBranchController {
    private readonly productBranchService;
    constructor(productBranchService: ProductBranchService);
    findAll(req: Request): Promise<{
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
    findOne(id: number, req: Request): Promise<{
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
    updateAvailability(id: number, dto: UpdateProductBranchStatusDto, req: Request): Promise<import("../entities/product_branch.entity").ProductBranch>;
}
