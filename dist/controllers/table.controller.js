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
exports.TableController = void 0;
const common_1 = require("@nestjs/common");
const table_service_1 = require("../services/table.service");
const swagger_1 = require("@nestjs/swagger");
const tables_dto_1 = require("../dtos/tables.dto");
const tables_entity_1 = require("../entities/tables.entity");
const passport_1 = require("@nestjs/passport");
const RoleGuard_1 = require("../guards/RoleGuard");
const RoleDecorator_1 = require("../guards/RoleDecorator");
const role_enum_1 = require("../enums/role.enum");
let TableController = class TableController {
    constructor(tableService) {
        this.tableService = tableService;
    }
    findAll(req) {
        const branchId = req.user['branchId'];
        return this.tableService.findAll(branchId);
    }
    findOne(id, req) {
        const branchId = req.user['branchId'];
        return this.tableService.findOne(id, branchId);
    }
    create(tableDto, req) {
        const branchId = req.user['branchId'];
        return this.tableService.create(tableDto, branchId);
    }
    update(id, tableDto, req) {
        const branchId = req.user['branchId'];
        return this.tableService.update(id, tableDto, branchId);
    }
    complete(id, req) {
        const branchId = req.user['branchId'];
        return this.tableService.completeTable(id, branchId);
    }
    remove(id, req) {
        const branchId = req.user['branchId'];
        return this.tableService.remove(id, branchId);
    }
};
exports.TableController = TableController;
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of tables' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [tables_entity_1.Table] }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get table by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new table' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tables_dto_1.TableDto, Object]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update table by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tables_dto_1.TableDto, Object]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('/complete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Reset/Complete table by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "complete", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete table by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], TableController.prototype, "remove", null);
exports.TableController = TableController = __decorate([
    (0, swagger_1.ApiTags)('Table'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), RoleGuard_1.RoleGuard),
    (0, RoleDecorator_1.Role)([role_enum_1.EnumRoles.ADMIN_BRAND, role_enum_1.EnumRoles.STAFF]),
    (0, common_1.Controller)('table'),
    __metadata("design:paramtypes", [table_service_1.TableService])
], TableController);
//# sourceMappingURL=table.controller.js.map