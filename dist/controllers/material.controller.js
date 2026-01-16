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
exports.RawMaterialController = void 0;
const common_1 = require("@nestjs/common");
const material_service_1 = require("../services/material.service");
const rawmaterial_dto_1 = require("../dtos/rawmaterial.dto");
const swagger_1 = require("@nestjs/swagger");
let RawMaterialController = class RawMaterialController {
    constructor(rawMaterialService) {
        this.rawMaterialService = rawMaterialService;
    }
    async findAll(res) {
        const result = await this.rawMaterialService.findAll();
        return res.status(common_1.HttpStatus.OK).json(result);
    }
    async findOne(id) {
        return this.rawMaterialService.findOne(id);
    }
    async create(rawMaterialDto) {
        return this.rawMaterialService.create(rawMaterialDto);
    }
    async update(id, rawMaterialDto) {
        return this.rawMaterialService.update(id, rawMaterialDto);
    }
    async remove(id) {
        await this.rawMaterialService.remove(id);
        return { message: 'Material deleted' };
    }
};
exports.RawMaterialController = RawMaterialController;
__decorate([
    (0, common_1.Get)('/list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all raw materials' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all raw materials' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RawMaterialController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get raw material by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Raw material found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RawMaterialController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new raw material' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Raw material created' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rawmaterial_dto_1.RawMaterialDto]),
    __metadata("design:returntype", Promise)
], RawMaterialController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update raw material by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Raw material updated' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, rawmaterial_dto_1.RawMaterialDto]),
    __metadata("design:returntype", Promise)
], RawMaterialController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a raw material by ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Raw material deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RawMaterialController.prototype, "remove", null);
exports.RawMaterialController = RawMaterialController = __decorate([
    (0, swagger_1.ApiTags)('Raw Materials'),
    (0, common_1.Controller)('material'),
    __metadata("design:paramtypes", [material_service_1.RawMaterialService])
], RawMaterialController);
//# sourceMappingURL=material.controller.js.map