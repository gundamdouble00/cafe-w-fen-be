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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetails = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const order_tb_entity_1 = require("./order_tb.entity");
let OrderDetails = class OrderDetails {
};
exports.OrderDetails = OrderDetails;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'orderid', type: 'int' }),
    __metadata("design:type", Number)
], OrderDetails.prototype, "orderID", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'productid', type: 'int' }),
    __metadata("design:type", Number)
], OrderDetails.prototype, "productID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'productid' }),
    __metadata("design:type", product_entity_1.Product)
], OrderDetails.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_tb_entity_1.Order, (order) => order.details, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'orderid' }),
    __metadata("design:type", order_tb_entity_1.Order)
], OrderDetails.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quantity_product', type: 'int' }),
    __metadata("design:type", Number)
], OrderDetails.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 16, nullable: true }),
    __metadata("design:type", String)
], OrderDetails.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 5, nullable: true }),
    __metadata("design:type", String)
], OrderDetails.prototype, "mood", void 0);
exports.OrderDetails = OrderDetails = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_details' })
], OrderDetails);
//# sourceMappingURL=order-details.entity.js.map