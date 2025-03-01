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
exports.CreateCartDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateCartDto {
}
exports.CreateCartDto = CreateCartDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The user ID adding the textile to the cart' }),
    __metadata("design:type", Number)
], CreateCartDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The textile ID added to the cart' }),
    __metadata("design:type", Number)
], CreateCartDto.prototype, "textileId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The quantity of the textile added to the cart' }),
    __metadata("design:type", Number)
], CreateCartDto.prototype, "quantity", void 0);
//# sourceMappingURL=create-cart.dto.js.map