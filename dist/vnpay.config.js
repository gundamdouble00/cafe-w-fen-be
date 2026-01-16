"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVNPayInstance = exports.vnpayConfig = void 0;
const vnpay_1 = require("vnpay");
const vnpayConfig = () => ({
    vnpay: {
        tmnCode: process.env.VNP_TMNCODE || '',
        secureSecret: process.env.VNP_SECRET || '',
        vnpayHost: process.env.VNP_URL || 'https://sandbox.vnpayment.vn',
        testMode: process.env.NODE_ENV !== 'production',
        hashAlgorithm: 'SHA512',
        enableLog: true,
    },
});
exports.vnpayConfig = vnpayConfig;
const createVNPayInstance = () => {
    return new vnpay_1.VNPay({
        tmnCode: process.env.VNP_TMNCODE || '',
        secureSecret: process.env.VNP_SECRET || '',
        vnpayHost: process.env.VNP_URL || 'https://sandbox.vnpayment.vn',
        testMode: process.env.NODE_ENV !== 'production',
        hashAlgorithm: vnpay_1.HashAlgorithm.SHA512,
        enableLog: true,
    });
};
exports.createVNPayInstance = createVNPayInstance;
//# sourceMappingURL=vnpay.config.js.map