import { Branch } from './branches.entity';
import { RawMaterial } from './rawmaterial.entity';
export declare class BranchMaterial {
    id: number;
    quantityImported: number;
    quantityStock: number;
    importDate: Date;
    expiryDate: Date;
    rawMaterial: RawMaterial;
    branch: Branch;
}
