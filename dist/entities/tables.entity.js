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
exports.Table = void 0;
const typeorm_1 = require("typeorm");
const order_tb_entity_1 = require("./order_tb.entity");
const branches_entity_1 = require("./branches.entity");
let Table = class Table {
};
exports.Table = Table;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Table.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Table.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 15, nullable: true, name: 'phoneorder' }),
    __metadata("design:type", String)
], Table.prototype, "phoneOrder", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true, name: 'bookingtime' }),
    __metadata("design:type", Date)
], Table.prototype, "bookingTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true, name: 'seatingtime' }),
    __metadata("design:type", Date)
], Table.prototype, "seatingTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Table.prototype, "seat", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Table.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'branchid', nullable: true }),
    __metadata("design:type", Number)
], Table.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branches_entity_1.Branch, (branch) => branch.tables, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'branchid' }),
    __metadata("design:type", branches_entity_1.Branch)
], Table.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_tb_entity_1.Order, (order) => order.table),
    __metadata("design:type", Array)
], Table.prototype, "orders", void 0);
exports.Table = Table = __decorate([
    (0, typeorm_1.Entity)('tables')
], Table);
//# sourceMappingURL=tables.entity.js.map