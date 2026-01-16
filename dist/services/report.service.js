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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_tb_entity_1 = require("../entities/order_tb.entity");
const product_entity_1 = require("../entities/product.entity");
const customer_entity_1 = require("../entities/customer.entity");
const staff_entity_1 = require("../entities/staff.entity");
const tables_entity_1 = require("../entities/tables.entity");
const order_details_entity_1 = require("../entities/order-details.entity");
const branches_entity_1 = require("../entities/branches.entity");
let ReportService = class ReportService {
    constructor(dataSource, orderRepo, productRepo, customerRepo, staffRepo, tableRepo, orderDetailRepo, branchRepo) {
        this.dataSource = dataSource;
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
        this.customerRepo = customerRepo;
        this.staffRepo = staffRepo;
        this.tableRepo = tableRepo;
        this.orderDetailRepo = orderDetailRepo;
        this.branchRepo = branchRepo;
    }
    async getSystemReport() {
        const [totalPayment, totalProduct, totalCustomer, totalStaff, totalOrder, totalTable, totalBranch] = await Promise.all([
            this.orderRepo.createQueryBuilder().select('SUM(totalprice)', 'sum').getRawOne(),
            this.productRepo.count(),
            this.customerRepo.count(),
            this.staffRepo.count(),
            this.orderRepo.count(),
            this.tableRepo.count(),
            this.branchRepo.count(),
        ]);
        const last14DaysOrder = await this.dataSource.query(`
      SELECT DATE(orderdate) AS date, COUNT(*) AS amount
      FROM order_tb
      WHERE orderdate >= NOW() - INTERVAL '14 days'
      GROUP BY DATE(orderdate)
      ORDER BY date ASC
    `);
        const last14DaysOrderValue = await this.dataSource.query(`
      SELECT DATE(orderdate) AS date, SUM(totalprice) AS amount
      FROM order_tb
      WHERE orderdate >= NOW() - INTERVAL '14 days'
      GROUP BY DATE(orderdate)
      ORDER BY date ASC
    `);
        const last30DaysOrder = await this.dataSource.query(`
      SELECT DATE(orderdate) AS date, COUNT(*) AS amount
      FROM order_tb
      WHERE orderdate >= NOW() - INTERVAL '30 days'
      GROUP BY DATE(orderdate)
      ORDER BY date ASC
    `);
        const last30DaysOrderValue = await this.dataSource.query(`
      SELECT DATE(orderdate) AS date, SUM(totalprice) AS amount
      FROM order_tb
      WHERE orderdate >= NOW() - INTERVAL '30 days'
      GROUP BY DATE(orderdate)
      ORDER BY date ASC
    `);
        const salesByCategory = await this.dataSource.query(`
      SELECT category, COUNT(*) AS amount
      FROM product
      JOIN order_details ON product.id = order_details.productid
      GROUP BY category
    `);
        const rankMap = await this.customerRepo.query(`
      SELECT rank, COUNT(*) AS count
      FROM customer
      GROUP BY rank
    `);
        const [serviceType] = await this.dataSource.query(`
      SELECT 
        SUM(CASE WHEN servicetype = 'TAKE AWAY' THEN 1 ELSE 0 END) AS takeAway,
        SUM(CASE WHEN servicetype = 'DINE IN' THEN 1 ELSE 0 END) AS dineIn,
        SUM(CASE WHEN servicetype = 'DELIVERY' THEN 1 ELSE 0 END) AS delivery
      FROM order_tb
    `);
        const topProducts = await this.dataSource.query(`
      SELECT product.name, COUNT(order_details.productid) AS amount
      FROM order_details
      JOIN product ON product.id = order_details.productid
      GROUP BY product.name
      ORDER BY amount DESC
      LIMIT 5
    `);
        return {
            totalPayment: parseFloat(totalPayment.sum) || 0,
            totalProduct,
            totalCustomer,
            totalStaff,
            totalOrder,
            totalTable,
            totalBranch,
            last14DaysOrder: last14DaysOrder.map(row => ({
                date: row.date,
                amount: parseInt(row.amount, 10),
            })),
            last14DaysOrderValue: last14DaysOrderValue.map(row => ({
                date: row.date,
                amount: parseFloat(row.amount),
            })),
            last30DaysOrder: last30DaysOrder.map(row => ({
                date: row.date,
                amount: parseInt(row.amount, 10),
            })),
            last30DaysOrderValue: last30DaysOrderValue.map(row => ({
                date: row.date,
                amount: parseFloat(row.amount),
            })),
            salesByCategory: salesByCategory.map(row => ({
                category: row.category,
                amount: parseInt(row.amount, 10),
            })),
            rankMap: rankMap.reduce((acc, row) => {
                acc[row.rank] = parseInt(row.count, 10);
                return acc;
            }, {}),
            serviceType: {
                takeAway: parseInt(serviceType.takeaway, 10),
                dineIn: parseInt(serviceType.dinein, 10),
                delivery: parseInt(serviceType.delivery, 10),
            },
            topProducts: topProducts.map(row => ({
                name: row.name,
                amount: parseInt(row.amount, 10),
            })),
        };
    }
    async getBranchReport(branchId) {
        const [totalPayment, totalProduct, totalCustomer, totalStaff, totalOrder, totalTable] = await Promise.all([
            this.orderRepo.createQueryBuilder('o')
                .select('SUM(o.totalprice)', 'sum')
                .leftJoin('o.staff', 's')
                .where('s.branchId = :branchId', { branchId })
                .getRawOne(),
            this.productRepo
                .createQueryBuilder('p')
                .leftJoin('p.productBranches', 'pb')
                .where('pb.branchId = :branchId', { branchId })
                .getCount(),
            this.customerRepo.count(),
            this.staffRepo.count({ where: { branch: { id: branchId } } }),
            this.orderRepo.createQueryBuilder('o')
                .leftJoin('o.staff', 's')
                .where('s.branchId = :branchId', { branchId })
                .getCount(),
            this.tableRepo.count({ where: { branch: { id: branchId } } }),
        ]);
        const query14DaysOrder = `
    SELECT DATE(o.orderdate) AS date, COUNT(*) AS amount
    FROM order_tb o
    JOIN staff s ON o.staffid = s.id
    WHERE s.branchid = $1 AND o.orderdate >= NOW() - INTERVAL '14 days'
    GROUP BY DATE(o.orderdate)
    ORDER BY date ASC
  `;
        const query14DaysValue = `
    SELECT DATE(o.orderdate) AS date, SUM(o.totalprice) AS amount
    FROM order_tb o
    JOIN staff s ON o.staffid = s.id
    WHERE s.branchid = $1 AND o.orderdate >= NOW() - INTERVAL '14 days'
    GROUP BY DATE(o.orderdate)
    ORDER BY date ASC
  `;
        const query30DaysOrder = `
    SELECT DATE(o.orderdate) AS date, COUNT(*) AS amount
    FROM order_tb o
    JOIN staff s ON o.staffid = s.id
    WHERE s.branchid = $1 AND o.orderdate >= NOW() - INTERVAL '30 days'
    GROUP BY DATE(o.orderdate)
    ORDER BY date ASC
  `;
        const query30DaysValue = `
    SELECT DATE(o.orderdate) AS date, SUM(o.totalprice) AS amount
    FROM order_tb o
    JOIN staff s ON o.staffid = s.id
    WHERE s.branchid = $1 AND o.orderdate >= NOW() - INTERVAL '30 days'
    GROUP BY DATE(o.orderdate)
    ORDER BY date ASC
  `;
        const [last14DaysOrder, last14DaysOrderValue, last30DaysOrder, last30DaysOrderValue] = await Promise.all([
            this.dataSource.query(query14DaysOrder, [branchId]),
            this.dataSource.query(query14DaysValue, [branchId]),
            this.dataSource.query(query30DaysOrder, [branchId]),
            this.dataSource.query(query30DaysValue, [branchId]),
        ]);
        const salesByCategory = await this.dataSource.query(`
    SELECT p.category, COUNT(*) AS amount
    FROM order_details od
    JOIN product p ON od.productid = p.id
    JOIN order_tb o ON od.orderid = o.id
    WHERE o.branchid = $1
    GROUP BY p.category
  `, [branchId]);
        const [serviceType] = await this.dataSource.query(`
    SELECT 
      SUM(CASE WHEN servicetype = 'TAKE AWAY' THEN 1 ELSE 0 END) AS takeAway,
      SUM(CASE WHEN servicetype = 'DINE IN' THEN 1 ELSE 0 END) AS dineIn,
      SUM(CASE WHEN servicetype = 'DELIVERY' THEN 1 ELSE 0 END) AS delivery
    FROM order_tb
    WHERE branchid = $1
  `, [branchId]);
        const topProducts = await this.dataSource.query(`
    SELECT p.name, COUNT(od.productid) AS amount
    FROM order_details od
    JOIN product p ON p.id = od.productid
    JOIN order_tb o ON o.id = od.orderid
    WHERE o.branchid = $1
    GROUP BY p.name
    ORDER BY amount DESC
    LIMIT 5
  `, [branchId]);
        return {
            totalPayment: parseFloat(totalPayment?.sum) || 0,
            totalProduct,
            totalCustomer,
            totalStaff,
            totalOrder,
            totalTable,
            last14DaysOrder: last14DaysOrder.map(row => ({
                date: row.date,
                amount: parseInt(row.amount, 10),
            })),
            last14DaysOrderValue: last14DaysOrderValue.map(row => ({
                date: row.date,
                amount: parseFloat(row.amount),
            })),
            last30DaysOrder: last30DaysOrder.map(row => ({
                date: row.date,
                amount: parseInt(row.amount, 10),
            })),
            last30DaysOrderValue: last30DaysOrderValue.map(row => ({
                date: row.date,
                amount: parseFloat(row.amount),
            })),
            salesByCategory: salesByCategory.map(row => ({
                category: row.category,
                amount: parseInt(row.amount, 10),
            })),
            serviceType: {
                takeAway: parseInt(serviceType.takeaway, 10),
                dineIn: parseInt(serviceType.dinein, 10),
                delivery: parseInt(serviceType.delivery, 10),
            },
            topProducts: topProducts.map(row => ({
                name: row.name,
                amount: parseInt(row.amount, 10),
            })),
        };
    }
    async getBranchMonthlyComparison() {
        const result = await this.dataSource.query(`
      SELECT
      b.id AS branchId,
      b.name AS branchName,
      COALESCE(SUM(o.totalprice), 0) AS totalRevenue,
      COUNT(DISTINCT o.id) AS "totalOrders",
      COALESCE(SUM(od.quantity_product), 0) AS totalSold
    FROM branches b
    LEFT JOIN order_tb o 
      ON o.branchid = b.id
      AND o.orderdate >= DATE_TRUNC('month', CURRENT_DATE)
      AND o.orderdate < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
    LEFT JOIN order_details od 
      ON od.orderid = o.id
    GROUP BY b.id, b.name
    ORDER BY b.id;
    `);
        return result.map(row => ({
            branchId: row.branchid,
            branchName: row.branchname,
            totalRevenue: parseFloat(row.totalrevenue),
            totalOrders: parseInt(row.totalOrders, 10),
            totalSold: parseInt(row.totalsold, 10),
        }));
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(order_tb_entity_1.Order)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(3, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __param(4, (0, typeorm_1.InjectRepository)(staff_entity_1.Staff)),
    __param(5, (0, typeorm_1.InjectRepository)(tables_entity_1.Table)),
    __param(6, (0, typeorm_1.InjectRepository)(order_details_entity_1.OrderDetails)),
    __param(7, (0, typeorm_1.InjectRepository)(branches_entity_1.Branch)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReportService);
//# sourceMappingURL=report.service.js.map