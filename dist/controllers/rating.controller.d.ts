import { RatingService } from '../services/rating.service';
import { CreateRatingDto, UpdateRatingDto } from '../dtos/rating.dto';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    create(dto: CreateRatingDto): Promise<import("../entities/rating.entity").Rating>;
    findAll(): Promise<any>;
    findByProduct(productId: number): Promise<{
        averageStar: number;
        totalRatings: number;
        starCounts: {
            1: number;
            2: number;
            3: number;
            4: number;
            5: number;
        };
        ratings: {
            id: number;
            description: string;
            star: number;
            createdAt: Date;
            customer: {
                phone: string;
                name: string;
                rank: string;
            };
        }[];
    }>;
    update(id: number, dto: UpdateRatingDto): Promise<import("../entities/rating.entity").Rating>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
