import { ProductSizeResponseDto } from './product_size.dto';
import { ProductMaterialInputDto } from './product-material.dto';
export declare class CreateProductDto {
    name: string;
    category: string;
    image: string;
    description: string;
    available: boolean;
    hot: boolean;
    cold: boolean;
    isPopular: boolean;
    isNew: boolean;
    sizes: ProductSizeResponseDto[];
    productMaterials?: ProductMaterialInputDto[];
}
export declare class FilterProductDto {
    branchId?: number;
    category?: string;
}
export declare class UpdateStatusDto {
    available: boolean;
}
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    sizes: ProductSizeResponseDto[];
    productMaterials?: ProductMaterialInputDto[];
}
export declare class ProductDto {
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
    sizes: ProductSizeResponseDto[];
    productMaterials?: ProductMaterialInputDto[];
}
export {};
