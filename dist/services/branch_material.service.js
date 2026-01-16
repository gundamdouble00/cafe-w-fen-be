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
exports.BranchMaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const branch_material_entity_1 = require("../entities/branch_material.entity");
const typeorm_2 = require("typeorm");
let BranchMaterialService = class BranchMaterialService {
    constructor(branchMaterialRepo) {
        this.branchMaterialRepo = branchMaterialRepo;
    }
    async findByBranchId(branchId) {
        const materials = await this.branchMaterialRepo.find({
            where: { branch: { id: branchId } },
            relations: ['branch', 'rawMaterial'],
            order: { id: 'ASC' },
        });
        return materials.map((material) => ({
            id: material.id,
            quantityImported: material.quantityImported,
            quantityStock: material.quantityStock,
            importDate: material.importDate,
            expiryDate: material.expiryDate,
            branch: {
                id: material.branch.id,
                name: material.branch.name,
            },
            rawMaterial: {
                id: material.rawMaterial.id,
                name: material.rawMaterial.name,
                price: material.rawMaterial.price,
                storageType: material.rawMaterial.storageType,
            },
        }));
    }
    async findOneByIdForBranch(branchId, id) {
        const material = await this.branchMaterialRepo.findOne({
            where: { id, branch: { id: branchId } },
            relations: ['branch', 'rawMaterial'],
        });
        if (!material)
            throw new common_1.NotFoundException('BranchMaterial not found or not yours');
        return {
            id: material.id,
            quantityImported: material.quantityImported,
            quantityStock: material.quantityStock,
            importDate: material.importDate,
            expiryDate: material.expiryDate,
            branch: {
                id: material.branch.id,
                name: material.branch.name,
            },
            rawMaterial: {
                id: material.rawMaterial.id,
                name: material.rawMaterial.name,
                price: material.rawMaterial.price,
                storageType: material.rawMaterial.storageType,
            },
        };
    }
    async createForBranch(branchId, dto) {
        const entity = this.branchMaterialRepo.create({
            ...dto,
            branch: { id: branchId },
            importDate: new Date(dto.importDate),
            expiryDate: new Date(dto.expiryDate),
        });
        return this.branchMaterialRepo.save(entity);
    }
    async updateForBranch(branchId, id, dto) {
        const entity = await this.branchMaterialRepo.findOne({
            where: { id, branch: { id: branchId } },
        });
        if (!entity)
            throw new common_1.NotFoundException('BranchMaterial not found or not yours');
        return this.branchMaterialRepo.save({ ...entity, ...dto });
    }
    async removeForBranch(branchId, id) {
        const entity = await this.branchMaterialRepo.findOne({
            where: { id, branch: { id: branchId } },
        });
        if (!entity)
            throw new common_1.NotFoundException('BranchMaterial not found or not yours');
        await this.branchMaterialRepo.remove(entity);
        return { message: 'BranchMaterial deleted successfully' };
    }
};
exports.BranchMaterialService = BranchMaterialService;
exports.BranchMaterialService = BranchMaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(branch_material_entity_1.BranchMaterial)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BranchMaterialService);
//# sourceMappingURL=branch_material.service.js.map