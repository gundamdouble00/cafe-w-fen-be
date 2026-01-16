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
exports.PromoteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const promote_entity_1 = require("../entities/promote.entity");
const typeorm_2 = require("typeorm");
let PromoteService = class PromoteService {
    constructor(repo) {
        this.repo = repo;
    }
    findAll() {
        return this.repo.find();
    }
    async findOne(id) {
        const promote = await this.repo.findOne({ where: { id } });
        if (!promote) {
            throw new common_1.NotFoundException(`Promotion with ID ${id} not found`);
        }
        return promote;
    }
    create(dto) {
        const promote = this.repo.create(dto);
        return this.repo.save(promote);
    }
    async update(id, dto) {
        const promote = await this.repo.findOne({ where: { id } });
        if (!promote) {
            throw new common_1.NotFoundException(`Promotion with ID ${id} not found`);
        }
        Object.assign(promote, dto);
        return this.repo.save(promote);
    }
    async remove(id) {
        const result = await this.repo.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Promotion with ID ${id} not found`);
        }
        return result;
    }
};
exports.PromoteService = PromoteService;
exports.PromoteService = PromoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(promote_entity_1.Promote)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PromoteService);
//# sourceMappingURL=promote.service.js.map