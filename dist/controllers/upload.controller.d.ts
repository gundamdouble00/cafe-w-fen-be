import { FileService } from '../services/upload.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    uploadImage(file: Express.Multer.File): Promise<{
        message: string;
        imageUrl: string;
    }>;
}
