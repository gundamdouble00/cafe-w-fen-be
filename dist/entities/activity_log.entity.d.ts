import { Staff } from './staff.entity';
export declare class ActivityLog {
    id: number;
    staff: Staff;
    action: string;
    timestamp: Date;
}
