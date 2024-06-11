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
exports.UserEntity = void 0;
const artisan_entity_1 = require("../../artisan/entities/artisan.entity");
const cart_entity_1 = require("../../cart/entities/cart.entity");
const favorite_entity_1 = require("../../favorite/entities/favorite.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const role_entity_1 = require("../../role/entities/role.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "address_colony", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "address_street", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "address_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "address_reference", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.RoleEntity, role => role.users),
    __metadata("design:type", role_entity_1.RoleEntity)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => artisan_entity_1.ArtisanEntity, artisan => artisan.user),
    __metadata("design:type", artisan_entity_1.ArtisanEntity)
], UserEntity.prototype, "artisan", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.OrderEntity, order => order.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorite_entity_1.FavoriteEntity, favorite => favorite.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "favorites", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_entity_1.CartEntity, cart => cart.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "cartItems", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], UserEntity);
//# sourceMappingURL=user.entity.js.map