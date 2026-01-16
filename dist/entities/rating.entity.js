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
exports.Rating = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const customer_entity_1 = require("./customer.entity");
let Rating = class Rating {
};
exports.Rating = Rating;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rating.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Rating.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Rating.prototype, "star", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phonecustomer' }),
    __metadata("design:type", String)
], Rating.prototype, "phoneCustomer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'productid' }),
    __metadata("design:type", Number)
], Rating.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.ratings, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'phonecustomer', referencedColumnName: 'phone' }),
    __metadata("design:type", customer_entity_1.Customer)
], Rating.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.ratings, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'productid' }),
    __metadata("design:type", product_entity_1.Product)
], Rating.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdat' }),
    __metadata("design:type", Date)
], Rating.prototype, "createdAt", void 0);
exports.Rating = Rating = __decorate([
    (0, typeorm_1.Entity)()
], Rating);
//# sourceMappingURL=rating.entity.js.map