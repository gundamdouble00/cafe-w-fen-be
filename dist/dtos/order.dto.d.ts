export declare class CreateOrderDto {
    phoneCustomer: string;
    serviceType: string;
    totalPrice: number;
    staffID: number;
    tableID?: number;
    orderDate: string;
    status: string;
    productIDs: number[];
    branchId: number;
}
export declare class UpdateOrderDto {
    phoneCustomer: string;
    serviceType: string;
    totalPrice: number;
    tableID?: number;
    orderDate: string;
    status: string;
    paymentMethod: string;
    paymentStatus: string;
}
export declare class CreateOrderCustomerDto {
    phoneCustomer: string;
    serviceType: string;
    orderDate: string;
    status: string;
    productIDs: number[];
    branchId: number;
}
export declare class UpdateOrderCustomerDto {
    phoneCustomer: string;
    serviceType: string;
    totalPrice: number;
    orderDate: string;
    status: string;
    paymentMethod: string;
    paymentStatus: string;
}
export declare enum OrderStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    PREPARING = "PREPARING",
    READY = "READY",
    DELIVERING = "DELIVERING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare class UpdateOrderStatusDto {
    status: OrderStatus;
}
