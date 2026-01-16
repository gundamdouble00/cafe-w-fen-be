import { RawMaterialService } from '../services/material.service';
import { RawMaterialDto } from '../dtos/rawmaterial.dto';
export declare class RawMaterialController {
    private readonly rawMaterialService;
    constructor(rawMaterialService: RawMaterialService);
    findAll(res: any): Promise<any>;
    findOne(id: number): Promise<import("../entities/rawmaterial.entity").RawMaterial>;
    create(rawMaterialDto: RawMaterialDto): Promise<import("../entities/rawmaterial.entity").RawMaterial>;
    update(id: number, rawMaterialDto: RawMaterialDto): Promise<import("../entities/rawmaterial.entity").RawMaterial>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
