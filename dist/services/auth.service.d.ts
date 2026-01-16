import { JwtService } from '@nestjs/jwt';
import { DataSource } from 'typeorm';
import { StaffSigninDto, RegisterCustomerDto } from '../dtos/auth.dto';
export declare class AuthService {
    private readonly jwtService;
    private readonly dataSource;
    constructor(jwtService: JwtService, dataSource: DataSource);
    signin(dto: StaffSigninDto): Promise<{
        message: string;
        token: string;
        user: {
            id: any;
            name: any;
            phone: any;
            role: any;
            branchId: any;
            rank?: undefined;
        };
    } | {
        message: string;
        token: string;
        user: {
            phone: any;
            name: any;
            rank: any;
            role: string;
            id?: undefined;
            branchId?: undefined;
        };
    }>;
    registerCustomer(dto: RegisterCustomerDto): Promise<{
        message: string;
        token: string;
        user: {
            phone: string;
            name: string;
            gender: string;
            address: string;
            role: string;
        };
    }>;
    callback(authHeader: string): Promise<{
        msg: string;
        data: any;
    }>;
}
