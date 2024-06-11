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
exports.ArtisanEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entities/user.entity");
const textile_entity_1 = require("../../textile/entities/textile.entity");
let ArtisanEntity = class ArtisanEntity {
};
exports.ArtisanEntity = ArtisanEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ArtisanEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity, user => user.artisan),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.UserEntity)
], ArtisanEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ArtisanEntity.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ArtisanEntity.prototype, "biography", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ArtisanEntity.prototype, "quote", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => textile_entity_1.TextileEntity, textile => textile.creator),
    __metadata("design:type", Array)
], ArtisanEntity.prototype, "textiles", void 0);
exports.ArtisanEntity = ArtisanEntity = __decorate([
    (0, typeorm_1.Entity)('artisans')
], ArtisanEntity);
//# sourceMappingURL=artisan.entity.js.map