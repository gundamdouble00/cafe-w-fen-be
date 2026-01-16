import { Repository } from 'typeorm';
import { Staff } from 'src/entities/staff.entity';
import { StaffDto, UpdateStaffDto } from 'src/dtos/staff.dto';
export declare class BranchStaffService {
    private staffRepository;
    constructor(staffRepository: Repository<Staff>);
    findAllByBranch(branchId: number): Promise<Staff[]>;
    findAll(branchId: number): Promise<Staff[]>;
    findOneByBranch(id: number, branchId: number): Promise<Staff>;
    create(staffDto: StaffDto, branchId: number): Promise<Staff>;
    update(id: number, updateDto: UpdateStaffDto, branchId: number): Promise<Staff>;
    remove(id: number, branchId: number): Promise<void>;
}
