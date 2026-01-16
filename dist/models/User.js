"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModal = void 0;
class UserModal {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.gender = user.gender;
        this.birth = user.birth;
        this.address = user.address;
        this.phone = user.phone;
        this.workshifId = user.workshifId;
        this.workHours = user.workHours;
        this.salary = user.salary;
        this.minsalary = user.minsalary;
        this.typeStaff = user.typeStaff;
        this.startDate = user.startDate;
        this.activeStatus = user.activeStatus;
        this.password = user.password;
        this.roleId = user.roleId;
        this.role = user.role;
        this.branchId = user.branchId;
    }
}
exports.UserModal = UserModal;
//# sourceMappingURL=User.js.map