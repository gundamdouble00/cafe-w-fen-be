import { Repository } from 'typeorm';
import { Table } from '../entities/tables.entity';
import { TableDto } from '../dtos/tables.dto';
export declare class TableService {
    private readonly tableRepository;
    constructor(tableRepository: Repository<Table>);
    findAll(branchId: number): Promise<Table[]>;
    findOne(id: number, branchId: number): Promise<Table>;
    create(tableDto: TableDto, branchId: number): Promise<Table>;
    update(id: number, tableDto: Partial<TableDto>, branchId: number): Promise<Table>;
    completeTable(id: number, branchId: number): Promise<Table>;
    remove(id: number, branchId: number): Promise<void>;
}
