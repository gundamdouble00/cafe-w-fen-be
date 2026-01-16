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
exports.ProductBranch = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const branches_entity_1 = require("./branches.entity");
let ProductBranch = class ProductBranch {
};
exports.ProductBranch = ProductBranch;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductBranch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'productid', type: 'int' }),
    __metadata("design:type", Number)
], ProductBranch.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'branchid', type: 'int' }),
    __metadata("design:type", Number)
], ProductBranch.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.id, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'productid' }),
    __metadata("design:type", product_entity_1.Product)
], ProductBranch.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branches_entity_1.Branch, (branch) => branch.id, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'branchid' }),
    __metadata("design:type", branches_entity_1.Branch)
], ProductBranch.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ProductBranch.prototype, "available", void 0);
exports.ProductBranch = ProductBranch = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_branch' }),
    (0, typeorm_1.Unique)(['product', 'branch'])
], ProductBranch);
//# sourceMappingURL=product_branch.entity.js.map