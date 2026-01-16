import { CustomerService } from '../services/customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../entities/customer.entity';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    findAll(): Promise<Customer[]>;
    search(phone: string): Promise<Customer[]>;
    findOne(phone: string): Promise<Customer>;
    create(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    updateTotal(phone: string, body: {
        total: number;
    }): Promise<{
        message: string;
    }>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
