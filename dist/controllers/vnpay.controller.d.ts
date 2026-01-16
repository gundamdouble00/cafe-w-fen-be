import { Request } from 'express';
import { VnpayService } from '../services/vnpay.service';
import { CreatePaymentUrlDto, PaymentResponseDto } from '../dtos/vnpay.dto';
export declare class VnpayController {
    private readonly vnpayService;
    constructor(vnpayService: VnpayService);
    createPaymentUrl(createPaymentDto: CreatePaymentUrlDto, req: Request): Promise<{
        paymentUrl: string;
        success: boolean;
        message?: undefined;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
    }>;
    verifyPayment(query: any): Promise<PaymentResponseDto>;
    handleIpn(body: any): Promise<{
        RspCode: string;
        Message: string;
    }>;
}
