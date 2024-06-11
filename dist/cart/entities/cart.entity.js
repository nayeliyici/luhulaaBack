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
exports.CartEntity = void 0;
const textile_entity_1 = require("../../textile/entities/textile.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let CartEntity = class CartEntity {
};
exports.CartEntity = CartEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.cartItems),
    __metadata("design:type", user_entity_1.UserEntity)
], CartEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => textile_entity_1.TextileEntity, textile => textile.cartItems),
    __metadata("design:type", textile_entity_1.TextileEntity)
], CartEntity.prototype, "textile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CartEntity.prototype, "quantity", void 0);
exports.CartEntity = CartEntity = __decorate([
    (0, typeorm_1.Entity)('carts')
], CartEntity);
//# sourceMappingURL=cart.entity.js.map