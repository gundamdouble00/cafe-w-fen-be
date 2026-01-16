"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const upload_module_1 = require("./modules/upload.module");
const auth_module_1 = require("./modules/auth.module");
const staff_module_1 = require("./modules/staff.module");
const table_module_1 = require("./modules/table.module");
const material_module_1 = require("./modules/material.module");
const customer_module_1 = require("./modules/customer.module");
const product_module_1 = require("./modules/product.module");
const order_module_1 = require("./modules/order.module");
const promote_module_1 = require("./modules/promote.module");
const membership_module_1 = require("./modules/membership.module");
const report_module_1 = require("./modules/report.module");
const branch_module_1 = require("./modules/branch.module");
const branchstaff_module_1 = require("./modules/branchstaff.module");
const product_branch_module_1 = require("./modules/product_branch.module");
const branch_order_module_1 = require("./modules/branch_order.module");
const rating_module_1 = require("./modules/rating.module");
const branch_material_module_1 = require("./modules/branch_material.module");
const cart_module_1 = require("./modules/cart.module");
const vnpay_module_1 = require("./modules/vnpay.module");
const TypeORMConfig_1 = require("./commons/TypeORMConfig");
const Constant_1 = require("./commons/Constant");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: Constant_1.envFiles,
                isGlobal: true,
                load: [TypeORMConfig_1.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => (configService.get('typeorm'))
            }),
            upload_module_1.FileModule,
            auth_module_1.AuthModule,
            branch_module_1.BranchModule,
            staff_module_1.StaffModule,
            branchstaff_module_1.BranchStaffModule,
            table_module_1.TableModule,
            material_module_1.RawMaterialModule,
            branch_material_module_1.BranchMaterialModule,
            customer_module_1.CustomerModule,
            product_module_1.ProductModule,
            product_branch_module_1.ProductBranchModule,
            rating_module_1.RatingModule,
            order_module_1.OrderModule,
            branch_order_module_1.BranchOrderModule,
            cart_module_1.CartModule,
            promote_module_1.PromoteModule,
            membership_module_1.MembershipModule,
            report_module_1.ReportModule,
            vnpay_module_1.VnpayModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map