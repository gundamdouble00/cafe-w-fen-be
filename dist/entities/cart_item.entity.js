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
exports.CartItem = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const customer_entity_1 = require("./customer.entity");
const product_entity_1 = require("./product.entity");
let CartItem = class CartItem {
};
exports.CartItem = CartItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CartItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CartItem.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CartItem.prototype, "mood", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phonecustomer' }),
    (0, swagger_1.ApiProperty)({ description: 'Phone number of customer' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CartItem.prototype, "phoneCustomer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'productid' }),
    (0, swagger_1.ApiProperty)({ description: 'Product ID' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CartItem.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.cartItems, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'phonecustomer', referencedColumnName: 'phone' }),
    __metadata("design:type", customer_entity_1.Customer)
], CartItem.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'productid' }),
    __metadata("design:type", product_entity_1.Product)
], CartItem.prototype, "product", void 0);
exports.CartItem = CartItem = __decorate([
    (0, typeorm_1.Entity)('cart_item')
], CartItem);
//# sourceMappingURL=cart_item.entity.js.map