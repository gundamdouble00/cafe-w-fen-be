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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const order_details_entity_1 = require("./order-details.entity");
const product_material_entity_1 = require("./product-material.entity");
const product_size_entity_1 = require("./product_size.entity");
const rating_entity_1 = require("./rating.entity");
const product_branch_entity_1 = require("./product_branch.entity");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "available", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "hot", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "cold", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ispopular', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "isPopular", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isnew', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "isNew", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_material_entity_1.ProductMaterial, (pm) => pm.product),
    __metadata("design:type", Array)
], Product.prototype, "productMaterials", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_details_entity_1.OrderDetails, (orderDetails) => orderDetails.product),
    __metadata("design:type", Array)
], Product.prototype, "orderDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_size_entity_1.ProductSize, (size) => size.product, { cascade: true }),
    __metadata("design:type", Array)
], Product.prototype, "sizes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rating_entity_1.Rating, (rating) => rating.product),
    __metadata("design:type", Array)
], Product.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_branch_entity_1.ProductBranch, (pb) => pb.product),
    __metadata("design:type", Array)
], Product.prototype, "productBranches", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)({ name: 'product' })
], Product);
//# sourceMappingURL=product.entity.js.map