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
exports.TextileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_textile_dto_1 = require("./dto/create-textile.dto");
const update_textile_dto_1 = require("./dto/update-textile.dto");
const textile_service_1 = require("./textile.service");
let TextileController = class TextileController {
    constructor(textilesService) {
        this.textilesService = textilesService;
    }
    create(createTextileDto) {
        return this.textilesService.create(createTextileDto);
    }
    findAll() {
        return this.textilesService.findAll();
    }
    findOne(id) {
        return this.textilesService.findOne(+id);
    }
    update(id, updateTextileDto) {
        return this.textilesService.update(+id, updateTextileDto);
    }
    remove(id) {
        return this.textilesService.remove(+id);
    }
};
exports.TextileController = TextileController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new textile' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_textile_dto_1.CreateTextileDto]),
    __metadata("design:returntype", void 0)
], TextileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all textiles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TextileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a textile by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TextileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a textile by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_textile_dto_1.UpdateTextileDto]),
    __metadata("design:returntype", void 0)
], TextileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a textile by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TextileController.prototype, "remove", null);
exports.TextileController = TextileController = __decorate([
    (0, swagger_1.ApiTags)('textile'),
    (0, common_1.Controller)('textiles'),
    __metadata("design:paramtypes", [textile_service_1.TextileService])
], TextileController);
//# sourceMappingURL=textile.controller.js.map