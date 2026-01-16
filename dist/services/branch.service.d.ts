import { Branch } from '../entities/branches.entity';
import { Repository } from 'typeorm';
import { CreateBranchDto } from '../dtos/branches.dto';
import { ProductBranch } from '../entities/product_branch.entity';
import { Product } from '../entities/product.entity';
import { RawMaterial } from '../entities/rawmaterial.entity';
import { BranchMaterial } from '../entities/branch_material.entity';
export declare class BranchService {
    private readonly branchRepo;
    private readonly productRepo;
    private readonly productBranchRepo;
    private rawMaterialRepo;
    private readonly branchMaterialRepo;
    constructor(branchRepo: Repository<Branch>, productRepo: Repository<Product>, productBranchRepo: Repository<ProductBranch>, rawMaterialRepo: Repository<RawMaterial>, branchMaterialRepo: Repository<BranchMaterial>);
    findAll(): Promise<Branch[]>;
    findOne(id: number): Promise<Branch>;
    create(dto: CreateBranchDto): Promise<Branch>;
    update(id: number, dto: CreateBranchDto): Promise<Branch>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
