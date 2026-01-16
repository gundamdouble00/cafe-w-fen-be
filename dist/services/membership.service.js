"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const membership_entity_1 = require("../entities/membership.entity");
const typeorm_2 = require("typeorm");
let MembershipService = class MembershipService {
    constructor(membershipRepo) {
        this.membershipRepo = membershipRepo;
    }
    async findAll() {
        return this.membershipRepo.find({ order: { id: 'ASC' } });
    }
    async findByRank(rank) {
        const membership = await this.membershipRepo.findOne({ where: { rank } });
        if (!membership) {
            throw new common_1.NotFoundException(`Membership with rank "${rank}" not found`);
        }
        return membership;
    }
    async create(dto) {
        const newMembership = this.membershipRepo.create(dto);
        return this.membershipRepo.save(newMembership);
    }
    async update(id, dto) {
        const membership = await this.membershipRepo.findOne({ where: { id } });
        if (!membership) {
            throw new common_1.NotFoundException(`Membership with ID ${id} not found`);
        }
        Object.assign(membership, dto);
        return this.membershipRepo.save(membership);
    }
    async remove(id) {
        const result = await this.membershipRepo.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Membership with ID ${id} not found`);
        }
    }
};
exports.MembershipService = MembershipService;
exports.MembershipService = MembershipService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(membership_entity_1.Membership)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MembershipService);
//# sourceMappingURL=membership.service.js.map