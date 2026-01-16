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
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const report_service_1 = require("../services/report.service");
const swagger_1 = require("@nestjs/swagger");
let ReportController = class ReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    async getSystemReport() {
        return this.reportService.getSystemReport();
    }
    async getBranchReport(branchId) {
        return this.reportService.getBranchReport(branchId);
    }
    async getBranchMonthlyComparison() {
        return this.reportService.getBranchMonthlyComparison();
    }
};
exports.ReportController = ReportController;
__decorate([
    (0, common_1.Get)('system'),
    (0, swagger_1.ApiOperation)({ summary: 'Thống kê toàn hệ thống' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "getSystemReport", null);
__decorate([
    (0, common_1.Get)('branch/:branchId'),
    (0, swagger_1.ApiOperation)({ summary: 'Thống kê theo chi nhánh' }),
    (0, swagger_1.ApiParam)({ name: 'branchId', type: Number }),
    __param(0, (0, common_1.Param)('branchId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "getBranchReport", null);
__decorate([
    (0, common_1.Get)('/monthly-branch-compare'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "getBranchMonthlyComparison", null);
exports.ReportController = ReportController = __decorate([
    (0, swagger_1.ApiTags)('report'),
    (0, common_1.Controller)('report'),
    __metadata("design:paramtypes", [report_service_1.ReportService])
], ReportController);
//# sourceMappingURL=report.controller.js.map