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
exports.ProductSize = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const swagger_1 = require("@nestjs/swagger");
let ProductSize = class ProductSize {
};
exports.ProductSize = ProductSize;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID của size sản phẩm' }),
    __metadata("design:type", Number)
], ProductSize.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sizename', type: 'varchar', length: 10 }),
    (0, swagger_1.ApiProperty)({ example: 'M', description: 'Tên size (S, M, L)' }),
    __metadata("design:type", String)
], ProductSize.prototype, "sizeName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    (0, swagger_1.ApiProperty)({ example: 25000, description: 'Giá của size sản phẩm' }),
    __metadata("design:type", Number)
], ProductSize.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'productid', type: 'int' }),
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ProductSize.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.sizes, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'productid' }),
    __metadata("design:type", product_entity_1.Product)
], ProductSize.prototype, "product", void 0);
exports.ProductSize = ProductSize = __decorate([
    (0, typeorm_1.Entity)('product_size')
], ProductSize);
//# sourceMappingURL=product_size.entity.js.map