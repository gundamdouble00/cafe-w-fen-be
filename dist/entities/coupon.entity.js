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
exports.Coupon = void 0;
const typeorm_1 = require("typeorm");
const promote_entity_1 = require("./promote.entity");
let Coupon = class Coupon {
};
exports.Coupon = Coupon;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Coupon.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Coupon.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Coupon.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => promote_entity_1.Promote, (promote) => promote.coupons, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'promoteid' }),
    __metadata("design:type", promote_entity_1.Promote)
], Coupon.prototype, "promote", void 0);
exports.Coupon = Coupon = __decorate([
    (0, typeorm_1.Entity)({ name: 'coupon' })
], Coupon);
//# sourceMappingURL=coupon.entity.js.map