import { AuthService } from '../services/auth.service';
import { StaffSigninDto, RegisterCustomerDto } from '../dtos/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    callback(authHeader: string): Promise<{
        msg: string;
        data: any;
    }>;
}
