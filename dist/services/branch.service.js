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
exports.BranchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const branches_entity_1 = require("../entities/branches.entity");
const typeorm_2 = require("typeorm");
const product_branch_entity_1 = require("../entities/product_branch.entity");
const product_entity_1 = require("../entities/product.entity");
const rawmaterial_entity_1 = require("../entities/rawmaterial.entity");
const branch_material_entity_1 = require("../entities/branch_material.entity");
let BranchService = class BranchService {
    constructor(branchRepo, productRepo, productBranchRepo, rawMaterialRepo, branchMaterialRepo) {
        this.branchRepo = branchRepo;
        this.productRepo = productRepo;
        this.productBranchRepo = productBranchRepo;
        this.rawMaterialRepo = rawMaterialRepo;
        this.branchMaterialRepo = branchMaterialRepo;
    }
    async findAll() {
        return this.branchRepo.find({
            relations: ['manager'],
            select: {
                id: true,
                name: true,
                address: true,
                phone: true,
                createdAt: true,
                manager: {
                    id: true,
                    name: true,
                    phone: true,
                },
            },
        });
    }
    async findOne(id) {
        const branch = await this.branchRepo.findOne({
            where: { id },
            relations: ['manager'],
            select: {
                id: true,
                name: true,
                address: true,
                phone: true,
                createdAt: true,
                manager: {
                    id: true,
                    name: true,
                    phone: true,
                },
            },
        });
        if (!branch)
            throw new common_1.NotFoundException(`Branch with id ${id} not found`);
        return branch;
    }
    async create(dto) {
        const newBranch = this.branchRepo.create(dto);
        const branch = await this.branchRepo.save(newBranch);
        const products = await this.productRepo.find();
        const productBranches = products.map((product) => {
            const pb = new product_branch_entity_1.ProductBranch();
            pb.branch = branch;
            pb.product = product;
            pb.available = true;
            return pb;
        });
        await this.productBranchRepo.save(productBranches);
        const rawmaterials = await this.rawMaterialRepo.find();
        const branchMaterials = rawmaterials.map((rawMaterial) => {
            const entry = new branch_material_entity_1.BranchMaterial();
            entry.rawMaterial = rawMaterial;
            entry.branch = branch;
            entry.quantityImported = 0;
            entry.quantityStock = 0;
            entry.importDate = new Date();
            entry.expiryDate = new Date();
            return entry;
        });
        await this.branchMaterialRepo.save(branchMaterials);
        return branch;
    }
    async update(id, dto) {
        const branch = await this.findOne(id);
        const updated = this.branchRepo.merge(branch, dto);
        return this.branchRepo.save(updated);
    }
    async remove(id) {
        const branch = await this.findOne(id);
        await this.branchRepo.remove(branch);
        return { message: 'Branch deleted successfully' };
    }
};
exports.BranchService = BranchService;
exports.BranchService = BranchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(branches_entity_1.Branch)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(2, (0, typeorm_1.InjectRepository)(product_branch_entity_1.ProductBranch)),
    __param(3, (0, typeorm_1.InjectRepository)(rawmaterial_entity_1.RawMaterial)),
    __param(4, (0, typeorm_1.InjectRepository)(branch_material_entity_1.BranchMaterial)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BranchService);
//# sourceMappingURL=branch.service.js.map