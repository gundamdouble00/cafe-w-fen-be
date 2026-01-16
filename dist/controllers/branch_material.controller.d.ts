import { BranchMaterialService } from '../services/branch_material.service';
import { UpdateBranchMaterialDto } from '../dtos/branch_material.dto';
export declare class BranchMaterialController {
    private readonly branchMaterialService;
    constructor(branchMaterialService: BranchMaterialService);
    getAll(req: any): Promise<{
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
    getOne(req: any, id: number): Promise<{
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
    update(req: any, id: number, dto: UpdateBranchMaterialDto): Promise<import("../entities/branch_material.entity").BranchMaterial>;
}
