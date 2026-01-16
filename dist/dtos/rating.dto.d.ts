export declare class CreateRatingDto {
    phoneCustomer: string;
    productId: number;
    description?: string;
    star: number;
}
export declare class CustomerInfo {
    phone: string;
    name: string;
    rank: string;
}
export declare class ProductInfo {
    id: number;
    name: string;
}
export declare class RatingResponseDto {
    id: number;
    description: string;
    star: number;
    customer: CustomerInfo;
    product: ProductInfo;
}
export declare class UpdateRatingDto {
    description: string;
    star: number;
}
export declare class ListRatingResponseDto {
    id: number;
    description: string;
    star: number;
    createdAt: Date;
    customer: {
        phone: string;
        name: string;
        rank: string;
    };
    product: {
        id: number;
        name: string;
        image: string;
    };
}
