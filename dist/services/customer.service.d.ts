import { Customer } from '../entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
export declare class CustomerService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    findAll(): Promise<Customer[]>;
    findOne(phone: string): Promise<Customer>;
    create(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer>;
    remove(id: number): Promise<{
        message: string;
    }>;
    updateTotal(phone: string, total: number): Promise<{
        message: string;
    }>;
    searchByPhone(phone: string): Promise<Customer[]>;
}
