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
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const order_tb_entity_1 = require("./order_tb.entity");
const rating_entity_1 = require("./rating.entity");
const cart_item_entity_1 = require("./cart_item.entity");
let Customer = class Customer {
};
exports.Customer = Customer;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'phone', length: 15 }),
    __metadata("design:type", String)
], Customer.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', length: 100 }),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gender', length: 10, nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Customer.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'registrationdate', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Customer.prototype, "registrationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rank', length: 10, nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "rank", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Customer.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Customer.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_tb_entity_1.Order, (order) => order.customer),
    __metadata("design:type", Array)
], Customer.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rating_entity_1.Rating, (rating) => rating.customer),
    __metadata("design:type", Array)
], Customer.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_item_entity_1.CartItem, (cartItem) => cartItem.customer),
    __metadata("design:type", Array)
], Customer.prototype, "cartItems", void 0);
exports.Customer = Customer = __decorate([
    (0, typeorm_1.Entity)({ name: 'customer' })
], Customer);
//# sourceMappingURL=customer.entity.js.map