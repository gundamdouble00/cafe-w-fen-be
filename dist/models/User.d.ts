import { Staff } from "src/entities/staff.entity";
export declare class UserModal {
    id: number;
    name: string;
    gender: string;
    birth: Date;
    address: string;
    phone: string;
    workshifId: number;
    workHours: number;
    salary: number;
    minsalary: number;
    typeStaff: string;
    startDate: Date;
    activeStatus: boolean;
    password: string;
    roleId: number;
    role: string;
    branchId: number;
    constructor(user: Staff);
}
