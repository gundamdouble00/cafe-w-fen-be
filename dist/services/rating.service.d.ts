import { Rating } from '../entities/rating.entity';
import { Repository } from 'typeorm';
import { CreateRatingDto, ListRatingResponseDto, UpdateRatingDto } from '../dtos/rating.dto';
import { Customer } from '../entities/customer.entity';
import { Product } from '../entities/product.entity';
import { Order } from '../entities/order_tb.entity';
import { OrderDetails } from '../entities/order-details.entity';
export declare class RatingService {
    private readonly ratingRepo;
    private readonly customerRepo;
    private readonly productRepo;
    private readonly orderRepo;
    private readonly detailRepo;
    constructor(ratingRepo: Repository<Rating>, customerRepo: Repository<Customer>, productRepo: Repository<Product>, orderRepo: Repository<Order>, detailRepo: Repository<OrderDetails>);
    create(dto: CreateRatingDto): Promise<Rating>;
    findAll(): Promise<ListRatingResponseDto[]>;
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
    update(id: number, dto: UpdateRatingDto): Promise<Rating>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
