"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteService = void 0;
const common_1 = require("@nestjs/common");
let FavoriteService = class FavoriteService {
    create(createFavoriteDto) {
        return 'This action adds a new favorite';
    }
    findAll() {
        return `This action returns all favorite`;
    }
    findOne(id) {
        return `This action returns a #${id} favorite`;
    }
    update(id, updateFavoriteDto) {
        return `This action updates a #${id} favorite`;
    }
    remove(id) {
        return `This action removes a #${id} favorite`;
    }
};
exports.FavoriteService = FavoriteService;
exports.FavoriteService = FavoriteService = __decorate([
    (0, common_1.Injectable)()
], FavoriteService);
//# sourceMappingURL=favorite.service.js.map