"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchOrderModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const branch_order_controller_1 = require("../controllers/branch_order.controller");
const branch_order_service_1 = require("../services/branch_order.service");
const order_tb_entity_1 = require("../entities/order_tb.entity");
const order_details_entity_1 = require("../entities/order-details.entity");
const product_size_entity_1 = require("../entities/product_size.entity");
const product_branch_entity_1 = require("../entities/product_branch.entity");
let BranchOrderModule = class BranchOrderModule {
};
exports.BranchOrderModule = BranchOrderModule;
exports.BranchOrderModule = BranchOrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_tb_entity_1.Order, order_details_entity_1.OrderDetails, product_size_entity_1.ProductSize, product_branch_entity_1.ProductBranch])],
        controllers: [branch_order_controller_1.BranchOrderController],
        providers: [branch_order_service_1.BranchOrderService],
    })
], BranchOrderModule);
//# sourceMappingURL=branch_order.module.js.map