"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtisanService = void 0;
const common_1 = require("@nestjs/common");
let ArtisanService = class ArtisanService {
    create(createArtisanDto) {
        return 'This action adds a new artisan';
    }
    findAll() {
        return `This action returns all artisan`;
    }
    findOne(id) {
        return `This action returns a #${id} artisan`;
    }
    update(id, updateArtisanDto) {
        return `This action updates a #${id} artisan`;
    }
    remove(id) {
        return `This action removes a #${id} artisan`;
    }
};
exports.ArtisanService = ArtisanService;
exports.ArtisanService = ArtisanService = __decorate([
    (0, common_1.Injectable)()
], ArtisanService);
//# sourceMappingURL=artisan.service.js.map