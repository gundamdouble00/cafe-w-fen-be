import { Product } from './product.entity';
import { RawMaterial } from './rawmaterial.entity';
export declare class ProductMaterial {
    productId: number;
    materialId: number;
    product: Product;
    rawMaterial: RawMaterial;
    materialQuantity: number;
}
