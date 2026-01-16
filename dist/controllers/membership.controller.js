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
exports.MembershipController = void 0;
const common_1 = require("@nestjs/common");
const membership_service_1 = require("../services/membership.service");
const membership_dto_1 = require("../dtos/membership.dto");
const swagger_1 = require("@nestjs/swagger");
let MembershipController = class MembershipController {
    constructor(membershipService) {
        this.membershipService = membershipService;
    }
    findAll() {
        return this.membershipService.findAll();
    }
    findByRank(rank) {
        return this.membershipService.findByRank(rank);
    }
    create(dto) {
        return this.membershipService.create(dto);
    }
    update(id, dto) {
        return this.membershipService.update(id, dto);
    }
    remove(id) {
        return this.membershipService.remove(id);
    }
};
exports.MembershipController = MembershipController;
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of all memberships' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MembershipController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':rank'),
    (0, swagger_1.ApiOperation)({ summary: 'Get membership by rank' }),
    __param(0, (0, common_1.Param)('rank')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MembershipController.prototype, "findByRank", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new membership' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [membership_dto_1.CreateMembershipDto]),
    __metadata("design:returntype", void 0)
], MembershipController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update membership by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, membership_dto_1.CreateMembershipDto]),
    __metadata("design:returntype", void 0)
], MembershipController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete membership by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MembershipController.prototype, "remove", null);
exports.MembershipController = MembershipController = __decorate([
    (0, swagger_1.ApiTags)('Membership'),
    (0, common_1.Controller)('membership'),
    __metadata("design:paramtypes", [membership_service_1.MembershipService])
], MembershipController);
//# sourceMappingURL=membership.controller.js.map