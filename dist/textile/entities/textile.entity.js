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
exports.TextileEntity = void 0;
const artisan_entity_1 = require("../../artisan/entities/artisan.entity");
const cart_entity_1 = require("../../cart/entities/cart.entity");
const favorite_entity_1 = require("../../favorite/entities/favorite.entity");
const order_textile_entity_1 = require("../../order-textile/entities/order-textile.entity");
const typeorm_1 = require("typeorm");
let TextileEntity = class TextileEntity {
};
exports.TextileEntity = TextileEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TextileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TextileEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], TextileEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TextileEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TextileEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], TextileEntity.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => artisan_entity_1.ArtisanEntity, artisan => artisan.textiles),
    __metadata("design:type", artisan_entity_1.ArtisanEntity)
], TextileEntity.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TextileEntity.prototype, "madeIn", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TextileEntity.prototype, "technique", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TextileEntity.prototype, "materials", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_textile_entity_1.OrderTextileEntity, ordersTextiles => ordersTextiles.textile),
    __metadata("design:type", Array)
], TextileEntity.prototype, "orderDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorite_entity_1.FavoriteEntity, favorite => favorite.textile),
    __metadata("design:type", Array)
], TextileEntity.prototype, "favorites", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_entity_1.CartEntity, cart => cart.textile),
    __metadata("design:type", Array)
], TextileEntity.prototype, "cartItems", void 0);
exports.TextileEntity = TextileEntity = __decorate([
    (0, typeorm_1.Entity)('textiles')
], TextileEntity);
//# sourceMappingURL=textile.entity.js.map