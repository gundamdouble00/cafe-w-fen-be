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
exports.TableService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tables_entity_1 = require("../entities/tables.entity");
let TableService = class TableService {
    constructor(tableRepository) {
        this.tableRepository = tableRepository;
    }
    async findAll(branchId) {
        return this.tableRepository.find({
            where: { branchId: branchId },
            order: { id: 'ASC' },
        });
    }
    async findOne(id, branchId) {
        const table = await this.tableRepository.findOne({
            where: { id, branchId: branchId },
        });
        if (!table) {
            throw new common_1.NotFoundException(`Table with ID ${id} not found in your branch`);
        }
        return table;
    }
    async create(tableDto, branchId) {
        const table = this.tableRepository.create({
            ...tableDto,
            branchId: branchId,
        });
        return this.tableRepository.save(table);
    }
    async update(id, tableDto, branchId) {
        const table = await this.findOne(id, branchId);
        Object.assign(table, {
            ...tableDto,
            bookingTime: tableDto.bookingTime || null,
            seatingTime: tableDto.seatingTime || null,
        });
        return this.tableRepository.save(table);
    }
    async completeTable(id, branchId) {
        const table = await this.findOne(id, branchId);
        table.status = 'Available';
        table.phoneOrder = null;
        table.name = null;
        table.bookingTime = null;
        table.seatingTime = null;
        return this.tableRepository.save(table);
    }
    async remove(id, branchId) {
        const table = await this.findOne(id, branchId);
        await this.tableRepository.remove(table);
    }
};
exports.TableService = TableService;
exports.TableService = TableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tables_entity_1.Table)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TableService);
//# sourceMappingURL=table.service.js.map