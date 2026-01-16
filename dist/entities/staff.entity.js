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
exports.Staff = void 0;
const typeorm_1 = require("typeorm");
const workshift_entity_1 = require("./workshift.entity");
const role_entity_1 = require("./role.entity");
const order_tb_entity_1 = require("./order_tb.entity");
const activity_log_entity_1 = require("./activity_log.entity");
const branches_entity_1 = require("./branches.entity");
let Staff = class Staff {
};
exports.Staff = Staff;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Staff.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Staff.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Staff.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Staff.prototype, "birth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Staff.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15 }),
    __metadata("design:type", String)
], Staff.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'workshiftid', nullable: true }),
    __metadata("design:type", Number)
], Staff.prototype, "workshifId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workshift_entity_1.WorkShift, (workShift) => workShift.staff),
    (0, typeorm_1.JoinColumn)({ name: 'workshiftid' }),
    __metadata("design:type", workshift_entity_1.WorkShift)
], Staff.prototype, "workShift", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'workhours', default: 0 }),
    __metadata("design:type", Number)
], Staff.prototype, "workHours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 3000000 }),
    __metadata("design:type", Number)
], Staff.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'minsalary', default: 30000 }),
    __metadata("design:type", Number)
], Staff.prototype, "minsalary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'typestaff', length: 50, nullable: true }),
    __metadata("design:type", String)
], Staff.prototype, "typeStaff", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'startdate', nullable: true }),
    __metadata("design:type", Date)
], Staff.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'activestatus', default: true }),
    __metadata("design:type", Boolean)
], Staff.prototype, "activeStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Staff.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'roleid', nullable: true }),
    __metadata("design:type", Number)
], Staff.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.staff),
    (0, typeorm_1.JoinColumn)({ name: 'roleid' }),
    __metadata("design:type", role_entity_1.Role)
], Staff.prototype, "roleEntity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15 }),
    __metadata("design:type", String)
], Staff.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'branchid', nullable: true }),
    __metadata("design:type", Number)
], Staff.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Staff.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branches_entity_1.Branch, (branch) => branch.staff, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'branchid' }),
    __metadata("design:type", branches_entity_1.Branch)
], Staff.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_tb_entity_1.Order, (order) => order.staff),
    __metadata("design:type", Array)
], Staff.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => activity_log_entity_1.ActivityLog, (activityLog) => activityLog.staff),
    __metadata("design:type", Array)
], Staff.prototype, "activityLogs", void 0);
exports.Staff = Staff = __decorate([
    (0, typeorm_1.Entity)('staff')
], Staff);
//# sourceMappingURL=staff.entity.js.map