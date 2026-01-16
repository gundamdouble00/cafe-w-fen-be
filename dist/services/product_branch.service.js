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
exports.ProductBranchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_branch_entity_1 = require("../entities/product_branch.entity");
const product_entity_1 = require("../entities/product.entity");
const branches_entity_1 = require("../entities/branches.entity");
let ProductBranchService = class ProductBranchService {
    constructor(productBranchRepo, productRepo, branchRepo) {
        this.productBranchRepo = productBranchRepo;
        this.productRepo = productRepo;
        this.branchRepo = branchRepo;
    }
    async findAll(branchId) {
        const records = await this.productBranchRepo.find({
            where: {
                branch: { id: branchId },
                product: { available: true },
            },
            relations: [
                'product',
                'product.sizes',
                'product.productMaterials',
                'product.productMaterials.rawMaterial',
                'branch',
            ],
        });
        return records.map((record) => ({
            id: record.id.toString(),
            productId: record.product.id,
            name: record.product.name,
            category: record.product.category,
            description: record.product.description,
            image: record.product.image,
            available: record.available,
            hot: record.product.hot,
            cold: record.product.cold,
            isPopular: record.product.isPopular,
            isNew: record.product.isNew,
            sizes: record.product.sizes.map((s) => ({
                sizeName: s.sizeName,
                price: s.price,
            })),
            materials: record.product.productMaterials.map((pm) => ({
                name: pm.rawMaterial.name,
            })),
            branch: {
                id: record.branch.id,
                name: record.branch.name,
                address: record.branch.address,
                phone: record.branch.phone,
                createdAt: record.branch.createdAt,
            },
        }));
    }
    async findOne(id, branchId) {
        const record = await this.productBranchRepo.findOne({
            where: { id, branch: { id: branchId } },
            relations: [
                'product',
                'product.sizes',
                'product.productMaterials',
                'product.productMaterials.rawMaterial',
                'branch',
            ],
        });
        if (!record) {
            throw new common_1.NotFoundException(`ProductBranch with ID ${id} not found in your branch`);
        }
        return {
            id: record.id.toString(),
            productId: record.product.id,
            name: record.product.name,
            category: record.product.category,
            description: record.product.description,
            image: record.product.image,
            available: record.available,
            hot: record.product.hot,
            cold: record.product.cold,
            isPopular: record.product.isPopular,
            isNew: record.product.isNew,
            sizes: record.product.sizes.map((s) => ({
                sizeName: s.sizeName,
                price: s.price,
            })),
            materials: record.product.productMaterials.map((pm) => ({
                name: pm.rawMaterial.name,
            })),
            branch: {
                id: record.branch.id,
                name: record.branch.name,
                address: record.branch.address,
                phone: record.branch.phone,
                createdAt: record.branch.createdAt,
            },
        };
    }
    async create(dto, branchId) {
        const product = await this.productRepo.findOne({ where: { id: dto.productId } });
        const branch = await this.branchRepo.findOne({ where: { id: branchId } });
        if (!product || !branch)
            throw new common_1.NotFoundException('Product or Branch not found');
        const newRecord = this.productBranchRepo.create({
            product,
            branch,
            available: dto.available,
        });
        return this.productBranchRepo.save(newRecord);
    }
    async updateAvailability(id, dto, branchId) {
        const record = await this.productBranchRepo.findOne({
            where: { id, branch: { id: branchId } },
        });
        if (!record)
            throw new common_1.NotFoundException('ProductBranch not found in your branch');
        record.available = dto.available;
        return this.productBranchRepo.save(record);
    }
    async remove(id, branchId) {
        const result = await this.productBranchRepo.delete({ id, branch: { id: branchId } });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`ProductBranch with ID ${id} not found in your branch`);
        }
    }
};
exports.ProductBranchService = ProductBranchService;
exports.ProductBranchService = ProductBranchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_branch_entity_1.ProductBranch)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(2, (0, typeorm_1.InjectRepository)(branches_entity_1.Branch)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductBranchService);
//# sourceMappingURL=product_branch.service.js.map