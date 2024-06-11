"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The email of the user' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The password of the user' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the user' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The phone number of the user', required: false }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The colony of the user\'s address', required: false }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address_colony", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The street of the user\'s address', required: false }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address_street", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The number of the user\'s address', required: false }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The reference of the user\'s address', required: false }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address_reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The role ID of the user', example: 1 }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "roleId", void 0);
//# sourceMappingURL=create-user.dto.js.map