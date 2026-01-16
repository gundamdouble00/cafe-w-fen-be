import { MembershipService } from '../services/membership.service';
import { CreateMembershipDto } from '../dtos/membership.dto';
export declare class MembershipController {
    private readonly membershipService;
    constructor(membershipService: MembershipService);
    findAll(): Promise<import("../entities/membership.entity").Membership[]>;
    findByRank(rank: string): Promise<import("../entities/membership.entity").Membership>;
    create(dto: CreateMembershipDto): Promise<import("../entities/membership.entity").Membership>;
    update(id: number, dto: CreateMembershipDto): Promise<import("../entities/membership.entity").Membership>;
    remove(id: number): Promise<void>;
}
