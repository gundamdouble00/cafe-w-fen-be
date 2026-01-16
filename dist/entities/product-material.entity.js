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
exports.ProductMaterial = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const rawmaterial_entity_1 = require("./rawmaterial.entity");
let ProductMaterial = class ProductMaterial {
};
exports.ProductMaterial = ProductMaterial;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'productid' }),
    __metadata("design:type", Number)
], ProductMaterial.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'materialid' }),
    __metadata("design:type", Number)
], ProductMaterial.prototype, "materialId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.productMaterials, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'productid' }),
    __metadata("design:type", product_entity_1.Product)
], ProductMaterial.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rawmaterial_entity_1.RawMaterial, (rawMaterial) => rawMaterial.productMaterials, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'materialid' }),
    __metadata("design:type", rawmaterial_entity_1.RawMaterial)
], ProductMaterial.prototype, "rawMaterial", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'materialquantity', type: 'numeric' }),
    __metadata("design:type", Number)
], ProductMaterial.prototype, "materialQuantity", void 0);
exports.ProductMaterial = ProductMaterial = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_material' })
], ProductMaterial);
//# sourceMappingURL=product-material.entity.js.map