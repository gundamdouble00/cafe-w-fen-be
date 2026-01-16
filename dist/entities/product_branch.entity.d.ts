import { Product } from './product.entity';
import { Branch } from './branches.entity';
export declare class ProductBranch {
    id: number;
    productId: number;
    branchId: number;
    product: Product;
    branch: Branch;
    available: boolean;
}
