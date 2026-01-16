export declare class FileService {
    uploadImageToCloudinary(file: Express.Multer.File): Promise<{
        message: string;
        imageUrl: string;
    }>;
}
