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
exports.OrderTextileController = void 0;
const common_1 = require("@nestjs/common");
const order_textile_service_1 = require("./order-textile.service");
const create_order_textile_dto_1 = require("./dto/create-order-textile.dto");
const update_order_textile_dto_1 = require("./dto/update-order-textile.dto");
const swagger_1 = require("@nestjs/swagger");
let OrderTextileController = class OrderTextileController {
    constructor(orderTextileService) {
        this.orderTextileService = orderTextileService;
    }
    create(createOrderTextileDto) {
        return this.orderTextileService.create(createOrderTextileDto);
    }
    findAll() {
        return this.orderTextileService.findAll();
    }
    findOne(id) {
        return this.orderTextileService.findOne(+id);
    }
    update(id, updateOrderTextileDto) {
        return this.orderTextileService.update(+id, updateOrderTextileDto);
    }
    remove(id) {
        return this.orderTextileService.remove(+id);
    }
};
exports.OrderTextileController = OrderTextileController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_textile_dto_1.CreateOrderTextileDto]),
    __metadata("design:returntype", void 0)
], OrderTextileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderTextileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderTextileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_textile_dto_1.UpdateOrderTextileDto]),
    __metadata("design:returntype", void 0)
], OrderTextileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderTextileController.prototype, "remove", null);
exports.OrderTextileController = OrderTextileController = __decorate([
    (0, swagger_1.ApiTags)('order-textile'),
    (0, common_1.Controller)('order-textile'),
    __metadata("design:paramtypes", [order_textile_service_1.OrderTextileService])
], OrderTextileController);
//# sourceMappingURL=order-textile.controller.js.map