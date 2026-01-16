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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(jwtService, dataSource) {
        this.jwtService = jwtService;
        this.dataSource = dataSource;
    }
    async signin(dto) {
        const { phone, password, userType } = dto;
        let userQuery = '';
        let tokenPayload = {};
        let user;
        if (userType === 'staff') {
            const result = await this.dataSource.query('SELECT * FROM staff WHERE phone = $1', [phone]);
            if (result.length === 0) {
                throw new common_1.UnauthorizedException('Staff not found!');
            }
            user = result[0];
            if (user.password !== password) {
                throw new common_1.UnauthorizedException('Invalid password!');
            }
            tokenPayload = {
                id: user.id,
                phone: user.phone,
                role: user.role,
                branchId: user.branchid,
                type: 'staff',
            };
            return {
                message: 'Staff signin successful!',
                token: this.jwtService.sign(tokenPayload),
                user: {
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                    role: user.role,
                    branchId: user.branchid,
                },
            };
        }
        if (userType === 'customer') {
            const result = await this.dataSource.query('SELECT * FROM customer WHERE phone = $1', [phone]);
            if (result.length === 0) {
                throw new common_1.UnauthorizedException('Customer not found!');
            }
            user = result[0];
            if (user.password !== password) {
                throw new common_1.UnauthorizedException('Invalid password!');
            }
            tokenPayload = {
                phone: user.phone,
                name: user.name,
                role: 'CUSTOMER',
                type: 'customer',
            };
            return {
                message: 'Customer signin successful!',
                token: this.jwtService.sign(tokenPayload),
                user: {
                    phone: user.phone,
                    name: user.name,
                    rank: user.rank,
                    role: 'CUSTOMER',
                },
            };
        }
        throw new common_1.UnauthorizedException('Invalid user type');
    }
    async registerCustomer(dto) {
        const { phone, name, gender, address, password } = dto;
        const existing = await this.dataSource.query('SELECT * FROM customer WHERE phone = $1', [phone]);
        if (existing.length > 0) {
            throw new common_1.UnauthorizedException('Số điện thoại đã được đăng ký');
        }
        const registrationDate = new Date();
        await this.dataSource.query(`INSERT INTO customer (phone, name, gender, address, password, registrationdate)
     VALUES ($1, $2, $3, $4, $5, $6)`, [phone, name, gender, address, password, registrationDate]);
        const tokenPayload = {
            phone,
            name,
            role: 'CUSTOMER',
            type: 'customer',
        };
        return {
            message: 'Đăng ký thành công!',
            token: this.jwtService.sign(tokenPayload),
            user: {
                phone,
                name,
                gender,
                address,
                role: 'CUSTOMER',
            },
        };
    }
    async callback(authHeader) {
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new common_1.UnauthorizedException('Unauthorized');
        }
        const token = authHeader.split(' ')[1];
        const decoded = this.jwtService.verify(token);
        if (!decoded || !decoded.type) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
        if (decoded.type === 'staff') {
            const staffID = decoded.id;
            const userResult = await this.dataSource.query(`SELECT id, name, gender, birth, address, phone, workhours as "workHours", minsalary, typestaff as "typeStaff", role, image
       FROM staff WHERE id = $1`, [staffID]);
            if (userResult.length === 0) {
                throw new common_1.UnauthorizedException('Staff not found');
            }
            const user = userResult[0];
            await this.dataSource.query(`INSERT INTO activity_logs (staffid, action, timestamp) VALUES ($1, $2, $3)`, [user.id, 'User accessed callback API', new Date()]);
            return {
                msg: 'ok',
                data: {
                    ...user,
                    type: 'staff',
                },
            };
        }
        if (decoded.type === 'customer') {
            const phone = decoded.phone;
            const userResult = await this.dataSource.query(`SELECT phone, name, address, gender, total, rank, image
       FROM customer WHERE phone = $1`, [phone]);
            if (userResult.length === 0) {
                throw new common_1.UnauthorizedException('Customer not found');
            }
            const user = userResult[0];
            return {
                msg: 'ok',
                data: {
                    ...user,
                    type: 'customer',
                },
            };
        }
        throw new common_1.UnauthorizedException('Unsupported user type');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.DataSource])
], AuthService);
//# sourceMappingURL=auth.service.js.map