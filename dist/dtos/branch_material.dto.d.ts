export declare class CreateBranchMaterialDto {
    rawMaterialId: number;
    branchId: number;
    quantityImported: number;
    quantityStock: number;
    importDate: string;
    expiryDate: string;
}
export declare class UpdateBranchMaterialDto {
    quantityImported?: number;
    quantityStock?: number;
    importDate?: string;
    expiryDate?: string;
}
