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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../entities/product.entity");
const product_size_entity_1 = require("../entities/product_size.entity");
const product_material_entity_1 = require("../entities/product-material.entity");
const product_branch_entity_1 = require("../entities/product_branch.entity");
const branches_entity_1 = require("../entities/branches.entity");
let ProductService = class ProductService {
    constructor(productRepo, sizeRepo, productBranchRepo, dataSource) {
        this.productRepo = productRepo;
        this.sizeRepo = sizeRepo;
        this.productBranchRepo = productBranchRepo;
        this.dataSource = dataSource;
    }
    async findAll() {
        const products = await this.productRepo.find({
            relations: {
                sizes: true,
                productMaterials: {
                    rawMaterial: true,
                },
            },
            order: { id: 'ASC' },
        });
        return products.map((product) => ({
            id: product.id.toString(),
            name: product.name,
            category: product.category,
            description: product.description,
            image: product.image,
            available: product.available,
            hot: product.hot,
            cold: product.cold,
            isPopular: product.isPopular,
            isNew: product.isNew,
            sizes: product.sizes
                .sort((a, b) => {
                const order = { 'S': 1, 'M': 2, 'L': 3 };
                return order[a.sizeName] - order[b.sizeName];
            })
                .map((s) => ({
                sizeName: s.sizeName,
                price: s.price,
            })),
            materials: product.productMaterials.map((pm) => ({
                materialId: pm.materialId,
                materialQuantity: pm.materialQuantity,
                name: pm.rawMaterial.name,
            })),
        }));
    }
    async findOne(id) {
        const product = await this.productRepo.findOne({
            where: { id },
            relations: ['sizes', 'productMaterials', 'productMaterials.rawMaterial'],
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return {
            id: product.id.toString(),
            name: product.name,
            category: product.category,
            description: product.description,
            image: product.image,
            available: product.available,
            hot: product.hot,
            cold: product.cold,
            isPopular: product.isPopular,
            isNew: product.isNew,
            sizes: product.sizes
                .sort((a, b) => {
                const order = { 'S': 1, 'M': 2, 'L': 3 };
                return order[a.sizeName] - order[b.sizeName];
            })
                .map((s) => ({
                sizeName: s.sizeName,
                price: s.price,
            })),
            materials: product.productMaterials.map((pm) => ({
                materialId: pm.materialId,
                materialQuantity: pm.materialQuantity,
                name: pm.rawMaterial.name,
            })),
        };
    }
    async findBranchesByProduct(productId) {
        const records = await this.productBranchRepo.find({
            where: {
                product: { id: productId },
                available: true,
            },
            relations: ['branch'],
            order: { branch: { id: 'ASC' } },
        });
        return records.map((record) => ({
            id: record.branch.id,
            name: record.branch.name,
            address: record.branch.address,
            phone: record.branch.phone,
            createdAt: record.branch.createdAt,
        }));
    }
    async filterProducts(filterDto) {
        const { branchId, category } = filterDto;
        if (branchId) {
            const productBranches = await this.productBranchRepo.find({
                where: {
                    branchId: branchId,
                    available: true,
                },
                relations: {
                    product: {
                        sizes: true,
                        productMaterials: {
                            rawMaterial: true,
                        },
                    },
                },
            });
            let availableProducts = productBranches.filter((pb) => pb.product.available === true);
            if (category) {
                availableProducts = availableProducts.filter((pb) => pb.product.category === category);
            }
            return availableProducts.map((pb) => {
                const product = pb.product;
                return {
                    id: product.id.toString(),
                    name: product.name,
                    category: product.category,
                    description: product.description,
                    image: product.image,
                    available: product.available,
                    hot: product.hot,
                    cold: product.cold,
                    isPopular: product.isPopular,
                    isNew: product.isNew,
                    sizes: product.sizes
                        .sort((a, b) => {
                        const order = { 'S': 1, 'M': 2, 'L': 3 };
                        return order[a.sizeName] - order[b.sizeName];
                    })
                        .map((s) => ({
                        sizeName: s.sizeName,
                        price: s.price,
                    })),
                    materials: product.productMaterials.map((pm) => ({
                        materialId: pm.materialId,
                        materialQuantity: pm.materialQuantity,
                        name: pm.rawMaterial.name,
                    })),
                };
            });
        }
        if (category) {
            const products = await this.productRepo.find({
                where: {
                    category: category,
                    available: true,
                },
                relations: {
                    sizes: true,
                    productMaterials: {
                        rawMaterial: true,
                    },
                },
                order: { id: 'ASC' },
            });
            return products.map((product) => ({
                id: product.id.toString(),
                name: product.name,
                category: product.category,
                description: product.description,
                image: product.image,
                available: product.available,
                hot: product.hot,
                cold: product.cold,
                isPopular: product.isPopular,
                isNew: product.isNew,
                sizes: product.sizes
                    .sort((a, b) => {
                    const order = { 'S': 1, 'M': 2, 'L': 3 };
                    return order[a.sizeName] - order[b.sizeName];
                })
                    .map((s) => ({
                    sizeName: s.sizeName,
                    price: s.price,
                })),
                materials: product.productMaterials.map((pm) => ({
                    materialId: pm.materialId,
                    materialQuantity: pm.materialQuantity,
                    name: pm.rawMaterial.name,
                })),
            }));
        }
        return this.findAll();
    }
    async create(createDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const { sizes, productMaterials, ...productData } = createDto;
            const product = await queryRunner.manager.save(product_entity_1.Product, productData);
            const sizeEntities = sizes.map((s) => {
                const size = new product_size_entity_1.ProductSize();
                size.sizeName = s.sizeName;
                size.price = s.price;
                size.product = product;
                return size;
            });
            await queryRunner.manager.save(product_size_entity_1.ProductSize, sizeEntities);
            if (productMaterials && productMaterials.length > 0) {
                const materialEntities = productMaterials.map((m) => {
                    const pm = new product_material_entity_1.ProductMaterial();
                    pm.productId = product.id;
                    pm.materialId = m.materialId;
                    pm.materialQuantity = m.materialQuantity;
                    return pm;
                });
                await queryRunner.manager.save(product_material_entity_1.ProductMaterial, materialEntities);
            }
            await queryRunner.commitTransaction();
            const branches = await queryRunner.manager.find(branches_entity_1.Branch);
            const productBranches = branches.map((branch) => {
                const pb = new product_branch_entity_1.ProductBranch();
                pb.product = product;
                pb.branch = branch;
                pb.available = true;
                return pb;
            });
            await queryRunner.manager.save(product_branch_entity_1.ProductBranch, productBranches);
            return { message: 'Product created successfully', id: product.id };
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw new common_1.BadRequestException('Create product failed: ' + err.message);
        }
        finally {
            await queryRunner.release();
        }
    }
    async update(id, updateDto) {
        const product = await this.productRepo.findOne({
            where: { id },
            relations: ['sizes', 'productMaterials'],
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        const { sizes, productMaterials, ...productUpdate } = updateDto;
        await this.productRepo.update(id, productUpdate);
        await this.sizeRepo.delete({ productId: id });
        const sizeEntities = sizes.map((s) => {
            const size = new product_size_entity_1.ProductSize();
            size.sizeName = s.sizeName;
            size.price = s.price;
            size.product = product;
            return size;
        });
        await this.sizeRepo.save(sizeEntities);
        await this.dataSource.getRepository(product_material_entity_1.ProductMaterial).delete({ productId: id });
        if (productMaterials && productMaterials.length > 0) {
            const materialEntities = productMaterials.map((m) => {
                const pm = new product_material_entity_1.ProductMaterial();
                pm.productId = id;
                pm.materialId = m.materialId;
                pm.materialQuantity = m.materialQuantity;
                return pm;
            });
            await this.dataSource.getRepository(product_material_entity_1.ProductMaterial).save(materialEntities);
        }
        return { message: 'Product updated successfully' };
    }
    async updateAvailability(id, dto) {
        const product = await this.productRepo.findOne({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        product.available = dto.available;
        await this.productRepo.save(product);
        return { message: 'Product availability updated' };
    }
    async remove(id) {
        const result = await this.productRepo.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Product not found');
        }
        return { message: 'Product deleted successfully' };
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(product_size_entity_1.ProductSize)),
    __param(2, (0, typeorm_1.InjectRepository)(product_branch_entity_1.ProductBranch)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], ProductService);
//# sourceMappingURL=product.service.js.map