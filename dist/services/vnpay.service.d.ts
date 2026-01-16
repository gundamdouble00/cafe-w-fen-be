import { CreatePaymentUrlDto, PaymentResponseDto } from '../dtos/vnpay.dto';
export declare class VnpayService {
    private readonly logger;
    private readonly vnpay;
    createPaymentUrl(createPaymentDto: CreatePaymentUrlDto, ipAddr: string): Promise<{
        paymentUrl: string;
    }>;
    verifyPayment(vnpayParams: any): Promise<PaymentResponseDto>;
    handleIpn(vnpayParams: any): Promise<{
        RspCode: string;
        Message: string;
    }>;
}
