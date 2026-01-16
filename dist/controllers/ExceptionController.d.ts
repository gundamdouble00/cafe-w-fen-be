import { HttpException, HttpStatus } from '@nestjs/common';
export declare class ApplicationException extends HttpException {
    constructor(httpStatus: HttpStatus, message?: string);
}
