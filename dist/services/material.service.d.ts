import { Repository } from 'typeorm';
import { RawMaterial } from '../entities/rawmaterial.entity';
import { RawMaterialDto } from '../dtos/rawmaterial.dto';
import { Branch } from 'src/entities/branches.entity';
import { BranchMaterial } from 'src/entities/branch_material.entity';
export declare class RawMaterialService {
    private rawMaterialRepository;
    private readonly branchRepo;
    private readonly branchMaterialRepo;
    constructor(rawMaterialRepository: Repository<RawMaterial>, branchRepo: Repository<Branch>, branchMaterialRepo: Repository<BranchMaterial>);
    findAll(): Promise<RawMaterial[]>;
    findOne(id: number): Promise<RawMaterial>;
    create(dto: RawMaterialDto): Promise<RawMaterial>;
    update(id: number, rawMaterialDto: RawMaterialDto): Promise<RawMaterial>;
    remove(id: number): Promise<void>;
}
