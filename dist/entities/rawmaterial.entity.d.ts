import { ProductMaterial } from './product-material.entity';
import { BranchMaterial } from './branch_material.entity';
export declare class RawMaterial {
    id: number;
    name: string;
    price: number;
    storageType: string;
    branchMaterials: BranchMaterial[];
    productMaterials: ProductMaterial[];
}
