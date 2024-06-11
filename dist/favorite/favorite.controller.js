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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_favorite_dto_1 = require("./dto/create-favorite.dto");
const update_favorite_dto_1 = require("./dto/update-favorite.dto");
const favorite_service_1 = require("./favorite.service");
let FavoriteController = class FavoriteController {
    constructor(favoritesService) {
        this.favoritesService = favoritesService;
    }
    create(createFavoriteDto) {
        return this.favoritesService.create(createFavoriteDto);
    }
    findAll() {
        return this.favoritesService.findAll();
    }
    findOne(id) {
        return this.favoritesService.findOne(+id);
    }
    update(id, updateFavoriteDto) {
        return this.favoritesService.update(+id, updateFavoriteDto);
    }
    remove(id) {
        return this.favoritesService.remove(+id);
    }
};
exports.FavoriteController = FavoriteController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Add a textile to favorites' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_favorite_dto_1.CreateFavoriteDto]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all favorites' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a favorite by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a favorite by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_favorite_dto_1.UpdateFavoriteDto]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a favorite by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "remove", null);
exports.FavoriteController = FavoriteController = __decorate([
    (0, swagger_1.ApiTags)('favorite'),
    (0, common_1.Controller)('favorites'),
    __metadata("design:paramtypes", [favorite_service_1.FavoriteService])
], FavoriteController);
//# sourceMappingURL=favorite.controller.js.map