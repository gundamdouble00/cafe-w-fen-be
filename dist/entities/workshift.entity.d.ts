import { Staff } from './staff.entity';
export declare class WorkShift {
    workShiftId: number;
    shiftName: string;
    startTime: string;
    endTime: string;
    staff: Staff[];
}
