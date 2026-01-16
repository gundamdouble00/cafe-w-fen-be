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
exports.Branch = void 0;
const typeorm_1 = require("typeorm");
const staff_entity_1 = require("./staff.entity");
const tables_entity_1 = require("./tables.entity");
const order_tb_entity_1 = require("./order_tb.entity");
const branch_material_entity_1 = require("./branch_material.entity");
let Branch = class Branch {
};
exports.Branch = Branch;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Branch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Branch.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'createdat' }),
    __metadata("design:type", Date)
], Branch.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => staff_entity_1.Staff, staff => staff.branch),
    __metadata("design:type", Array)
], Branch.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tables_entity_1.Table, table => table.branch),
    __metadata("design:type", Array)
], Branch.prototype, "tables", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_tb_entity_1.Order, order => order.branch),
    __metadata("design:type", Array)
], Branch.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'managerid', nullable: true }),
    __metadata("design:type", Number)
], Branch.prototype, "managerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.Staff, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'managerid' }),
    __metadata("design:type", staff_entity_1.Staff)
], Branch.prototype, "manager", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => branch_material_entity_1.BranchMaterial, (branchMaterial) => branchMaterial.branch),
    __metadata("design:type", Array)
], Branch.prototype, "branchMaterials", void 0);
exports.Branch = Branch = __decorate([
    (0, typeorm_1.Entity)('branches')
], Branch);
//# sourceMappingURL=branches.entity.js.map