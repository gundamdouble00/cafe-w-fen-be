"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VnpayController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const vnpay_service_1 = require("../services/vnpay.service");
const vnpay_dto_1 = require("../dtos/vnpay.dto");
let VnpayController = class VnpayController {
    constructor(vnpayService) {
        this.vnpayService = vnpayService;
    }
    async createPaymentUrl(createPaymentDto, req) {
        try {
            const ipAddr = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.ip ||
                '127.0.0.1');
            const result = await this.vnpayService.createPaymentUrl(createPaymentDto, ipAddr.replace('::ffff:', ''));
            return {
                success: true,
                ...result,
            };
        }
        catch (error) {
            return {
                success: false,
                message: 'Không thể tạo URL thanh toán',
                error: error.message,
            };
        }
    }
    async verifyPayment(query) {
        return await this.vnpayService.verifyPayment(query);
    }
    async handleIpn(body) {
        return await this.vnpayService.handleIpn(body);
    }
};
exports.VnpayController = VnpayController;
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Tạo URL thanh toán VNPay' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Tạo URL thanh toán thành công',
        schema: {
            example: {
                success: true,
                paymentUrl: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?...',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Lỗi server' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vnpay_dto_1.CreatePaymentUrlDto, Object]),
    __metadata("design:returntype", Promise)
], VnpayController.prototype, "createPaymentUrl", null);
__decorate([
    (0, common_1.Get)('callback'),
    (0, swagger_1.ApiOperation)({ summary: 'Callback từ VNPay sau khi thanh toán' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Xác thực thanh toán',
        type: vnpay_dto_1.PaymentResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VnpayController.prototype, "verifyPayment", null);
__decorate([
    (0, common_1.Post)('ipn'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Nhận IPN từ VNPay' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Phản hồi IPN',
        schema: {
            example: {
                RspCode: '00',
                Message: 'Success',
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VnpayController.prototype, "handleIpn", null);
exports.VnpayController = VnpayController = __decorate([
    (0, swagger_1.ApiTags)('VNPay Payment'),
    (0, common_1.Controller)('payment/vnpay'),
    __metadata("design:paramtypes", [vnpay_service_1.VnpayService])
], VnpayController);
//# sourceMappingURL=vnpay.controller.js.map