export declare class CreatePaymentUrlDto {
    orderId: string;
    amount: number;
    orderInfo?: string;
    returnUrl: string;
    bankCode?: string;
}
export declare class VNPayCallbackDto {
    vnp_TmnCode: string;
    vnp_Amount: string;
    vnp_BankCode: string;
    vnp_BankTranNo: string;
    vnp_CardType: string;
    vnp_PayDate: string;
    vnp_OrderInfo: string;
    vnp_TransactionNo: string;
    vnp_ResponseCode: string;
    vnp_TransactionStatus: string;
    vnp_TxnRef: string;
    vnp_SecureHashType: string;
    vnp_SecureHash: string;
}
export declare class PaymentResponseDto {
    isSuccess: boolean;
    message: string;
    orderId?: string;
    amount?: number;
    transactionNo?: string;
    bankCode?: string;
    cardType?: string;
    payDate?: string;
}
