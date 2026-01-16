export declare class StaffDto {
    name: string;
    gender: string;
    birth: string;
    address: string;
    phone: string;
    workHours: number;
    salary: number;
    typeStaff: string;
    startDate: string;
    activeStatus: boolean;
    password: string;
    minsalary: number;
    role: string;
    branchId: number;
}
export declare class UpdateStaffDto {
    name?: string;
    gender?: string;
    birth?: string;
    address?: string;
    phone?: string;
    workHours?: number;
    minsalary?: number;
    typeStaff?: string;
    startDate?: string;
    role: string;
    branchId: number;
}
export declare class UpdateStaffBranchIdDto {
    branchId: number;
}
