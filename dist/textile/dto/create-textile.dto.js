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
exports.CreateTextileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateTextileDto {
}
exports.CreateTextileDto = CreateTextileDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The name of the textile' }),
    __metadata("design:type", String)
], CreateTextileDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The price of the textile' }),
    __metadata("design:type", Number)
], CreateTextileDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The image URL of the textile' }),
    __metadata("design:type", String)
], CreateTextileDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The category of the textile' }),
    __metadata("design:type", String)
], CreateTextileDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The stock quantity of the textile' }),
    __metadata("design:type", Number)
], CreateTextileDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The ID of the creator artisan' }),
    __metadata("design:type", Number)
], CreateTextileDto.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The location where the textile was made' }),
    __metadata("design:type", String)
], CreateTextileDto.prototype, "madeIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The technique used to make the textile' }),
    __metadata("design:type", String)
], CreateTextileDto.prototype, "technique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The materials used in the textile' }),
    __metadata("design:type", String)
], CreateTextileDto.prototype, "materials", void 0);
//# sourceMappingURL=create-textile.dto.js.map