import { BranchStaffService } from 'src/services/branchstaff.service';
import { StaffDto, UpdateStaffDto } from 'src/dtos/staff.dto';
import { Request, Response } from 'express';
export declare class BranchStaffController {
    private readonly branchStaffService;
    constructor(branchStaffService: BranchStaffService);
    findAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    create(req: Request, res: Response, dto: StaffDto): Promise<Response<any, Record<string, any>>>;
    findById(req: Request, res: Response, id: number): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response, id: number, dto: UpdateStaffDto): Promise<Response<any, Record<string, any>>>;
    remove(req: Request, res: Response, id: number): Promise<Response<any, Record<string, any>>>;
}
