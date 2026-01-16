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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const staff_entity_1 = require("./staff.entity");
const tables_entity_1 = require("./tables.entity");
const order_details_entity_1 = require("./order-details.entity");
const customer_entity_1 = require("./customer.entity");
const invoice_entity_1 = require("./invoice.entity");
const branches_entity_1 = require("./branches.entity");
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phonecustomer', length: 15 }),
    __metadata("design:type", String)
], Order.prototype, "phoneCustomer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.orders, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'phonecustomer', referencedColumnName: 'phone' }),
    __metadata("design:type", customer_entity_1.Customer)
], Order.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'servicetype', length: 10 }),
    __metadata("design:type", String)
], Order.prototype, "serviceType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'totalprice', type: 'int' }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'staffid', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Order.prototype, "staffID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => staff_entity_1.Staff, (staff) => staff.orders),
    (0, typeorm_1.JoinColumn)({ name: 'staffid' }),
    __metadata("design:type", staff_entity_1.Staff)
], Order.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tableid', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Order.prototype, "tableID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tables_entity_1.Table, (table) => table.orders),
    (0, typeorm_1.JoinColumn)({ name: 'tableid' }),
    __metadata("design:type", tables_entity_1.Table)
], Order.prototype, "table", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'orderdate', type: 'timestamp' }),
    __metadata("design:type", Date)
], Order.prototype, "orderDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', length: 20 }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paymentmethod', length: 100 }),
    __metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paymentstatus', length: 100 }),
    __metadata("design:type", String)
], Order.prototype, "paymentStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_details_entity_1.OrderDetails, (detail) => detail.order),
    __metadata("design:type", Array)
], Order.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => invoice_entity_1.Invoice, (invoice) => invoice.order),
    __metadata("design:type", Array)
], Order.prototype, "invoices", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branches_entity_1.Branch, (branch) => branch.orders, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'branchid' }),
    __metadata("design:type", branches_entity_1.Branch)
], Order.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'branchid', type: 'int' }),
    __metadata("design:type", Number)
], Order.prototype, "branchId", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_tb' })
], Order);
//# sourceMappingURL=order_tb.entity.js.map