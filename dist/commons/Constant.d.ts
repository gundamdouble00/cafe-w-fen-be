export declare const envFiles: string[];
export declare enum EEnvName {
}
export declare class Constant {
    static getEnv(name: EEnvName): string;
    static readonly JWT_SECRET = "c4bc8de0-c8cd-4648-92fd-0b18fa3b5aec";
    static readonly JWT_EXPIRE = "1000d";
    static readonly BCRYPT_ROUND = 10;
}
