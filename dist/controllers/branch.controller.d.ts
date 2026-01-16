import { BranchService } from '../services/branch.service';
import { CreateBranchDto } from '../dtos/branches.dto';
export declare class BranchController {
    private readonly branchService;
    constructor(branchService: BranchService);
    getAll(): Promise<import("../entities/branches.entity").Branch[]>;
    getOne(id: number): Promise<import("../entities/branches.entity").Branch>;
    create(dto: CreateBranchDto): Promise<import("../entities/branches.entity").Branch>;
    update(id: number, dto: CreateBranchDto): Promise<import("../entities/branches.entity").Branch>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
