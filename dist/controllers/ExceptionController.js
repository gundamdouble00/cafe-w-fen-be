"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationException = void 0;
const common_1 = require("@nestjs/common");
class ApplicationException extends common_1.HttpException {
    constructor(httpStatus, message) {
        super(message || 'No message available', httpStatus);
    }
}
exports.ApplicationException = ApplicationException;
//# sourceMappingURL=ExceptionController.js.map