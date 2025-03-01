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
exports.ArtisanController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const update_artisan_dto_1 = require("./dto/update-artisan.dto");
const create_artisan_dto_1 = require("./dto/create-artisan.dto");
const artisan_service_1 = require("./artisan.service");
let ArtisanController = class ArtisanController {
    constructor(artisansService) {
        this.artisansService = artisansService;
    }
    create(createArtisanDto) {
        return this.artisansService.create(createArtisanDto);
    }
    findAll() {
        return this.artisansService.findAll();
    }
    findOne(id) {
        return this.artisansService.findOne(+id);
    }
    update(id, updateArtisanDto) {
        return this.artisansService.update(+id, updateArtisanDto);
    }
    remove(id) {
        return this.artisansService.remove(+id);
    }
};
exports.ArtisanController = ArtisanController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new artisan' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artisan_dto_1.CreateArtisanDto]),
    __metadata("design:returntype", void 0)
], ArtisanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all artisans' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArtisanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an artisan by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtisanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an artisan by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_artisan_dto_1.UpdateArtisanDto]),
    __metadata("design:returntype", void 0)
], ArtisanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an artisan by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtisanController.prototype, "remove", null);
exports.ArtisanController = ArtisanController = __decorate([
    (0, swagger_1.ApiTags)('artisan'),
    (0, common_1.Controller)('artisans'),
    __metadata("design:paramtypes", [artisan_service_1.ArtisanService])
], ArtisanController);
//# sourceMappingURL=artisan.controller.js.map