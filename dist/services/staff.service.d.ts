import { Repository } from 'typeorm';
import { Staff } from '../entities/staff.entity';
import { StaffDto, UpdateStaffDto, UpdateStaffBranchIdDto } from 'src/dtos/staff.dto';
export declare class StaffService {
    private staffRepository;
    constructor(staffRepository: Repository<Staff>);
    findAll(): Promise<Staff[]>;
    findOne(id: number): Promise<Staff>;
    create(staffDto: StaffDto): Promise<Staff>;
    update(id: number, staffDto: UpdateStaffDto): Promise<Staff>;
    updateBranchId(id: number, dto: UpdateStaffBranchIdDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<void>;
    findByBranch(branchId: number): Promise<Staff[]>;
}
