import { VNPay } from 'vnpay';
export declare const vnpayConfig: () => {
    vnpay: {
        tmnCode: string;
        secureSecret: string;
        vnpayHost: string;
        testMode: boolean;
        hashAlgorithm: "SHA512";
        enableLog: boolean;
    };
};
export declare const createVNPayInstance: () => VNPay;
