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
exports.RawMaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rawmaterial_entity_1 = require("../entities/rawmaterial.entity");
const branches_entity_1 = require("../entities/branches.entity");
const branch_material_entity_1 = require("../entities/branch_material.entity");
let RawMaterialService = class RawMaterialService {
    constructor(rawMaterialRepository, branchRepo, branchMaterialRepo) {
        this.rawMaterialRepository = rawMaterialRepository;
        this.branchRepo = branchRepo;
        this.branchMaterialRepo = branchMaterialRepo;
    }
    async findAll() {
        return await this.rawMaterialRepository.find({ order: { id: 'ASC' } });
    }
    async findOne(id) {
        const rawMaterial = await this.rawMaterialRepository.findOne({ where: { id } });
        if (!rawMaterial) {
            throw new common_1.NotFoundException(`Raw material with ID ${id} not found`);
        }
        return rawMaterial;
    }
    async create(dto) {
        const newMaterial = this.rawMaterialRepository.create(dto);
        const savedMaterial = await this.rawMaterialRepository.save(newMaterial);
        const branches = await this.branchRepo.find();
        const branchMaterials = branches.map((branch) => {
            const entry = new branch_material_entity_1.BranchMaterial();
            entry.rawMaterial = savedMaterial;
            entry.branch = branch;
            entry.quantityImported = 0;
            entry.quantityStock = 0;
            entry.importDate = new Date();
            entry.expiryDate = new Date();
            return entry;
        });
        await this.branchMaterialRepo.save(branchMaterials);
        return savedMaterial;
    }
    async update(id, rawMaterialDto) {
        const material = await this.findOne(id);
        const updated = this.rawMaterialRepository.merge(material, rawMaterialDto);
        return this.rawMaterialRepository.save(updated);
    }
    async remove(id) {
        const rawMaterial = await this.findOne(id);
        await this.rawMaterialRepository.remove(rawMaterial);
    }
};
exports.RawMaterialService = RawMaterialService;
exports.RawMaterialService = RawMaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rawmaterial_entity_1.RawMaterial)),
    __param(1, (0, typeorm_1.InjectRepository)(branches_entity_1.Branch)),
    __param(2, (0, typeorm_1.InjectRepository)(branch_material_entity_1.BranchMaterial)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RawMaterialService);
//# sourceMappingURL=material.service.js.map