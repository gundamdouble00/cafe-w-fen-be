import { Request } from 'express';
import { TableService } from '../services/table.service';
import { TableDto } from '../dtos/tables.dto';
import { Table } from '../entities/tables.entity';
export declare class TableController {
    private readonly tableService;
    constructor(tableService: TableService);
    findAll(req: Request): Promise<Table[]>;
    findOne(id: number, req: Request): Promise<Table>;
    create(tableDto: TableDto, req: Request): Promise<Table>;
    update(id: number, tableDto: TableDto, req: Request): Promise<Table>;
    complete(id: number, req: Request): Promise<Table>;
    remove(id: number, req: Request): Promise<void>;
}
