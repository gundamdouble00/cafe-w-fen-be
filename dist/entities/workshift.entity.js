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
exports.WorkShift = void 0;
const typeorm_1 = require("typeorm");
const staff_entity_1 = require("./staff.entity");
let WorkShift = class WorkShift {
};
exports.WorkShift = WorkShift;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WorkShift.prototype, "workShiftId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], WorkShift.prototype, "shiftName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], WorkShift.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], WorkShift.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => staff_entity_1.Staff, staff => staff.workShift),
    __metadata("design:type", Array)
], WorkShift.prototype, "staff", void 0);
exports.WorkShift = WorkShift = __decorate([
    (0, typeorm_1.Entity)()
], WorkShift);
//# sourceMappingURL=workshift.entity.js.map