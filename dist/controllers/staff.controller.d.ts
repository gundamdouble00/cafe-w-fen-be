import { StaffService } from '../services/staff.service';
import { StaffDto, UpdateStaffDto, UpdateStaffBranchIdDto } from 'src/dtos/staff.dto';
export declare class StaffController {
    private readonly staffService;
    constructor(staffService: StaffService);
    findAll(): Promise<import("../entities/staff.entity").Staff[]>;
    findOne(id: number): Promise<import("../entities/staff.entity").Staff>;
    create(staffDto: StaffDto): Promise<import("../entities/staff.entity").Staff>;
    update(id: number, updatestaffDto: UpdateStaffDto): Promise<import("../entities/staff.entity").Staff>;
    updateBranchId(id: number, updatestaffBranchIdDto: UpdateStaffBranchIdDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<void>;
}
