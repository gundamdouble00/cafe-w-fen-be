import { ReportService } from '../services/report.service';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    getSystemReport(): Promise<{
        totalPayment: number;
        totalProduct: number;
        totalCustomer: number;
        totalStaff: number;
        totalOrder: number;
        totalTable: number;
        totalBranch: number;
        last14DaysOrder: any;
        last14DaysOrderValue: any;
        last30DaysOrder: any;
        last30DaysOrderValue: any;
        salesByCategory: any;
        rankMap: any;
        serviceType: {
            takeAway: number;
            dineIn: number;
            delivery: number;
        };
        topProducts: any;
    }>;
    getBranchReport(branchId: number): Promise<{
        totalPayment: number;
        totalProduct: number;
        totalCustomer: number;
        totalStaff: number;
        totalOrder: number;
        totalTable: number;
        last14DaysOrder: any;
        last14DaysOrderValue: any;
        last30DaysOrder: any;
        last30DaysOrderValue: any;
        salesByCategory: any;
        serviceType: {
            takeAway: number;
            dineIn: number;
            delivery: number;
        };
        topProducts: any;
    }>;
    getBranchMonthlyComparison(): Promise<any>;
}
