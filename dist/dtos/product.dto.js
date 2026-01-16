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
exports.ProductDto = exports.UpdateProductDto = exports.UpdateStatusDto = exports.FilterProductDto = exports.CreateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const product_size_dto_1 = require("./product_size.dto");
const class_transformer_1 = require("class-transformer");
const product_material_dto_1 = require("./product-material.dto");
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cà phê sữa' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'coffee' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://image.url' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cà phê pha với sữa đặc nguyên chất' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "available", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "hot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "cold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "isPopular", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "isNew", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [product_size_dto_1.ProductSizeResponseDto] }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "sizes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [product_material_dto_1.ProductMaterialInputDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => product_material_dto_1.ProductMaterialInputDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "productMaterials", void 0);
class FilterProductDto {
}
exports.FilterProductDto = FilterProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Filter by branch ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FilterProductDto.prototype, "branchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Filter by category' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FilterProductDto.prototype, "category", void 0);
class UpdateStatusDto {
}
exports.UpdateStatusDto = UpdateStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateStatusDto.prototype, "available", void 0);
class UpdateProductDto extends (0, swagger_1.PartialType)(CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [product_size_dto_1.ProductSizeResponseDto],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => product_size_dto_1.ProductSizeResponseDto),
    __metadata("design:type", Array)
], UpdateProductDto.prototype, "sizes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [product_material_dto_1.ProductMaterialInputDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => product_material_dto_1.ProductMaterialInputDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateProductDto.prototype, "productMaterials", void 0);
class ProductDto {
}
exports.ProductDto = ProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ProductDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cà phê sữa' }),
    __metadata("design:type", String)
], ProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'coffee' }),
    __metadata("design:type", String)
], ProductDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://image.url' }),
    __metadata("design:type", String)
], ProductDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cà phê pha với sữa đặc nguyên chất' }),
    __metadata("design:type", String)
], ProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProductDto.prototype, "available", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProductDto.prototype, "hot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProductDto.prototype, "cold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], ProductDto.prototype, "isPopular", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProductDto.prototype, "isNew", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [product_size_dto_1.ProductSizeResponseDto] }),
    __metadata("design:type", Array)
], ProductDto.prototype, "sizes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [product_material_dto_1.ProductMaterialInputDto], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => product_material_dto_1.ProductMaterialInputDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ProductDto.prototype, "productMaterials", void 0);
//# sourceMappingURL=product.dto.js.map