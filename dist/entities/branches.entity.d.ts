import { Staff } from './staff.entity';
import { Table } from './tables.entity';
import { Order } from './order_tb.entity';
import { BranchMaterial } from './branch_material.entity';
export declare class Branch {
    id: number;
    name: string;
    address: string;
    phone: string;
    createdAt: Date;
    staff: Staff[];
    tables: Table[];
    orders: Order[];
    managerId: number;
    manager: Staff;
    branchMaterials: BranchMaterial[];
}
