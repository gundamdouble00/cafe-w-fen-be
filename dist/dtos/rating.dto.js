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
exports.ListRatingResponseDto = exports.UpdateRatingDto = exports.RatingResponseDto = exports.ProductInfo = exports.CustomerInfo = exports.CreateRatingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateRatingDto {
}
exports.CreateRatingDto = CreateRatingDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRatingDto.prototype, "phoneCustomer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRatingDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRatingDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ minimum: 1, maximum: 5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateRatingDto.prototype, "star", void 0);
class CustomerInfo {
}
exports.CustomerInfo = CustomerInfo;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomerInfo.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomerInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CustomerInfo.prototype, "rank", void 0);
class ProductInfo {
}
exports.ProductInfo = ProductInfo;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductInfo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductInfo.prototype, "name", void 0);
class RatingResponseDto {
}
exports.RatingResponseDto = RatingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RatingResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RatingResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RatingResponseDto.prototype, "star", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => CustomerInfo }),
    __metadata("design:type", CustomerInfo)
], RatingResponseDto.prototype, "customer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => ProductInfo }),
    __metadata("design:type", ProductInfo)
], RatingResponseDto.prototype, "product", void 0);
class UpdateRatingDto {
}
exports.UpdateRatingDto = UpdateRatingDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRatingDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], UpdateRatingDto.prototype, "star", void 0);
class ListRatingResponseDto {
}
exports.ListRatingResponseDto = ListRatingResponseDto;
//# sourceMappingURL=rating.dto.js.map