"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constant = exports.EEnvName = exports.envFiles = void 0;
exports.envFiles = ['local.env', 'staging.env', 'production.env'];
var EEnvName;
(function (EEnvName) {
})(EEnvName || (exports.EEnvName = EEnvName = {}));
class Constant {
    static getEnv(name) {
        switch (name) {
            default:
                return '';
        }
    }
}
exports.Constant = Constant;
Constant.JWT_SECRET = 'c4bc8de0-c8cd-4648-92fd-0b18fa3b5aec';
Constant.JWT_EXPIRE = '1000d';
Constant.BCRYPT_ROUND = 10;
//# sourceMappingURL=Constant.js.map