"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const FormData = require("form-data");
let FileService = class FileService {
    async uploadImageToCloudinary(file) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        if (!file.mimetype.startsWith('image/')) {
            throw new common_1.BadRequestException('Invalid file type. Only images are allowed.');
        }
        try {
            const formData = new FormData();
            formData.append('file', file.buffer, file.originalname);
            formData.append('upload_preset', 'upload-coffeewfen');
            formData.append('folder', 'doan');
            const response = await axios_1.default.post('https://api.cloudinary.com/v1_1/dkntmdcja/image/upload', formData, {
                headers: formData.getHeaders(),
            });
            const data = response.data;
            return {
                message: 'File uploaded successfully',
                imageUrl: data.secure_url,
            };
        }
        catch (error) {
            console.error('Error uploading file:', error.message);
            throw new common_1.InternalServerErrorException('Failed to upload file');
        }
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=upload.service.js.map