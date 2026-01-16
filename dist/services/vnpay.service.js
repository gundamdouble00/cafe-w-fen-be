"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VnpayService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VnpayService = void 0;
const common_1 = require("@nestjs/common");
const vnpay_1 = require("vnpay");
const vnpay_config_1 = require("../vnpay.config");
let VnpayService = VnpayService_1 = class VnpayService {
    constructor() {
        this.logger = new common_1.Logger(VnpayService_1.name);
        this.vnpay = (0, vnpay_config_1.createVNPayInstance)();
    }
    async createPaymentUrl(createPaymentDto, ipAddr) {
        try {
            const { orderId, amount, orderInfo, returnUrl, bankCode } = createPaymentDto;
            this.logger.log(`Creating payment URL for order ${orderId}, amount: ${amount}`);
            const paymentUrl = this.vnpay.buildPaymentUrl({
                vnp_Amount: amount,
                vnp_IpAddr: ipAddr,
                vnp_TxnRef: orderId,
                vnp_OrderInfo: orderInfo || `Thanh toan don hang ${orderId}`,
                vnp_OrderType: vnpay_1.ProductCode.Other,
                vnp_ReturnUrl: returnUrl,
                vnp_Locale: vnpay_1.VnpLocale.VN,
                ...(bankCode && { vnp_BankCode: bankCode }),
            });
            this.logger.log(`Payment URL created successfully for order ${orderId}`);
            return { paymentUrl };
        }
        catch (error) {
            this.logger.error('Error creating payment URL:', error);
            throw error;
        }
    }
    async verifyPayment(vnpayParams) {
        try {
            this.logger.log('Verifying payment callback from VNPay');
            const verify = this.vnpay.verifyReturnUrl(vnpayParams);
            if (!verify.isVerified) {
                this.logger.warn('Invalid signature from VNPay');
                return {
                    isSuccess: false,
                    message: 'Chữ ký không hợp lệ',
                };
            }
            if (!verify.isSuccess) {
                this.logger.warn(`Payment failed: ${verify.message}`);
                return {
                    isSuccess: false,
                    message: verify.message || 'Thanh toán thất bại',
                };
            }
            const orderId = verify.vnp_TxnRef;
            const amount = Number(verify.vnp_Amount) / 100;
            this.logger.log(`Payment successful for order ${orderId}, amount: ${amount}`);
            return {
                isSuccess: true,
                message: 'Thanh toán thành công',
                orderId: orderId,
                amount: amount,
                transactionNo: String(verify.vnp_TransactionNo),
                bankCode: verify.vnp_BankCode,
                cardType: verify.vnp_CardType,
                payDate: String(verify.vnp_PayDate),
            };
        }
        catch (error) {
            this.logger.error('Error verifying payment:', error);
            return {
                isSuccess: false,
                message: 'Lỗi xác thực thanh toán',
            };
        }
    }
    async handleIpn(vnpayParams) {
        try {
            this.logger.log('Processing IPN from VNPay');
            const verify = this.vnpay.verifyIpnCall(vnpayParams);
            if (!verify.isVerified) {
                this.logger.warn('Invalid IPN signature');
                return { RspCode: '97', Message: 'Invalid signature' };
            }
            if (!verify.isSuccess) {
                this.logger.warn('IPN payment failed');
                return { RspCode: '01', Message: 'Payment failed' };
            }
            const orderId = verify.vnp_TxnRef;
            this.logger.log(`IPN: Order ${orderId} paid successfully`);
            return { RspCode: '00', Message: 'Success' };
        }
        catch (error) {
            this.logger.error('Error processing IPN:', error);
            return { RspCode: '99', Message: 'Unknown error' };
        }
    }
};
exports.VnpayService = VnpayService;
exports.VnpayService = VnpayService = VnpayService_1 = __decorate([
    (0, common_1.Injectable)()
], VnpayService);
//# sourceMappingURL=vnpay.service.js.map