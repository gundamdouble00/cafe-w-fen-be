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
exports.Promote = void 0;
const typeorm_1 = require("typeorm");
const coupon_entity_1 = require("./coupon.entity");
let Promote = class Promote {
};
exports.Promote = Promote;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Promote.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', length: 20, nullable: true }),
    __metadata("design:type", String)
], Promote.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', length: 20, nullable: true }),
    __metadata("design:type", String)
], Promote.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'discount', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Promote.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'promotetype', length: 20, nullable: true }),
    __metadata("design:type", String)
], Promote.prototype, "promoteType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'startat', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Promote.prototype, "startAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'endat', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Promote.prototype, "endAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => coupon_entity_1.Coupon, (coupon) => coupon.promote),
    __metadata("design:type", Array)
], Promote.prototype, "coupons", void 0);
exports.Promote = Promote = __decorate([
    (0, typeorm_1.Entity)({ name: 'promote' })
], Promote);
//# sourceMappingURL=promote.entity.js.map