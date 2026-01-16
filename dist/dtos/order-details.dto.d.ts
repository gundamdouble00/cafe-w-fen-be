export declare class CreateOrderDetailsDto {
    orderID: number;
    productID: number;
    quantity: number;
    size: string;
    mood: string;
}
export declare class CreateOrderBranchDetailsDto {
    productBranchID: number;
    quantity: number;
    size: string;
    mood?: string;
}
