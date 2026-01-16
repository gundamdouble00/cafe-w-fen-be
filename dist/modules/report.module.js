"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const report_controller_1 = require("../controllers/report.controller");
const report_service_1 = require("../services/report.service");
const order_tb_entity_1 = require("../entities/order_tb.entity");
const product_entity_1 = require("../entities/product.entity");
const customer_entity_1 = require("../entities/customer.entity");
const staff_entity_1 = require("../entities/staff.entity");
const tables_entity_1 = require("../entities/tables.entity");
const order_details_entity_1 = require("../entities/order-details.entity");
const branches_entity_1 = require("../entities/branches.entity");
let ReportModule = class ReportModule {
};
exports.ReportModule = ReportModule;
exports.ReportModule = ReportModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_tb_entity_1.Order, product_entity_1.Product, customer_entity_1.Customer, staff_entity_1.Staff, tables_entity_1.Table, order_details_entity_1.OrderDetails, branches_entity_1.Branch])],
        controllers: [report_controller_1.ReportController],
        providers: [report_service_1.ReportService],
    })
], ReportModule);
//# sourceMappingURL=report.module.js.map