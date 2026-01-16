"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchStaffModule = void 0;
const common_1 = require("@nestjs/common");
const branchstaff_service_1 = require("../services/branchstaff.service");
const branchstaff_controller_1 = require("../controllers/branchstaff.controller");
const typeorm_1 = require("@nestjs/typeorm");
const staff_entity_1 = require("../entities/staff.entity");
let BranchStaffModule = class BranchStaffModule {
};
exports.BranchStaffModule = BranchStaffModule;
exports.BranchStaffModule = BranchStaffModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([staff_entity_1.Staff])],
        providers: [branchstaff_service_1.BranchStaffService],
        controllers: [branchstaff_controller_1.BranchStaffController],
    })
], BranchStaffModule);
//# sourceMappingURL=branchstaff.module.js.map