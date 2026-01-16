import { Membership } from '../entities/membership.entity';
import { Repository } from 'typeorm';
import { CreateMembershipDto } from '../dtos/membership.dto';
export declare class MembershipService {
    private readonly membershipRepo;
    constructor(membershipRepo: Repository<Membership>);
    findAll(): Promise<Membership[]>;
    findByRank(rank: string): Promise<Membership>;
    create(dto: CreateMembershipDto): Promise<Membership>;
    update(id: number, dto: CreateMembershipDto): Promise<Membership>;
    remove(id: number): Promise<void>;
}
