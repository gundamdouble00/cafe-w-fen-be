import { OrderDetails } from './order-details.entity';
import { ProductMaterial } from './product-material.entity';
import { ProductSize } from './product_size.entity';
import { Rating } from './rating.entity';
import { ProductBranch } from './product_branch.entity';
export declare class Product {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    available: boolean;
    hot: boolean;
    cold: boolean;
    isPopular: boolean;
    isNew: boolean;
    productMaterials: ProductMaterial[];
    orderDetails: OrderDetails[];
    sizes: ProductSize[];
    ratings: Rating[];
    productBranches: ProductBranch[];
}
