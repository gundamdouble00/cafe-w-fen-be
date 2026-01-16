import { BranchMaterial } from '../entities/branch_material.entity';
import { Repository } from 'typeorm';
import { CreateBranchMaterialDto, UpdateBranchMaterialDto } from '../dtos/branch_material.dto';
export declare class BranchMaterialService {
    private readonly branchMaterialRepo;
    constructor(branchMaterialRepo: Repository<BranchMaterial>);
    findByBranchId(branchId: number): Promise<{
        id: number;
        quantityImported: number;
        quantityStock: number;
        importDate: Date;
        expiryDate: Date;
        branch: {
            id: number;
            name: string;
        };
        rawMaterial: {
            id: number;
            name: string;
            price: number;
            storageType: string;
        };
    }[]>;
    findOneByIdForBranch(branchId: number, id: number): Promise<{
        id: number;
        quantityImported: number;
        quantityStock: number;
        importDate: Date;
        expiryDate: Date;
        branch: {
            id: number;
            name: string;
        };
        rawMaterial: {
            id: number;
            name: string;
            price: number;
            storageType: string;
        };
    }>;
    createForBranch(branchId: number, dto: CreateBranchMaterialDto): Promise<BranchMaterial>;
    updateForBranch(branchId: number, id: number, dto: UpdateBranchMaterialDto): Promise<BranchMaterial>;
    removeForBranch(branchId: number, id: number): Promise<{
        message: string;
    }>;
}
