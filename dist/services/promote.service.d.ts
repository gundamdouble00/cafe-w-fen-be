import { Promote } from '../entities/promote.entity';
import { Repository } from 'typeorm';
import { PromoteDto } from '../dtos/promote.dto';
export declare class PromoteService {
    private readonly repo;
    constructor(repo: Repository<Promote>);
    findAll(): Promise<Promote[]>;
    findOne(id: number): Promise<Promote>;
    create(dto: PromoteDto): Promise<Promote>;
    update(id: number, dto: PromoteDto): Promise<Promote>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
