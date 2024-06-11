"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTextileService = void 0;
const common_1 = require("@nestjs/common");
let OrderTextileService = class OrderTextileService {
    create(createOrderTextileDto) {
        return 'This action adds a new orderTextile';
    }
    findAll() {
        return `This action returns all orderTextile`;
    }
    findOne(id) {
        return `This action returns a #${id} orderTextile`;
    }
    update(id, updateOrderTextileDto) {
        return `This action updates a #${id} orderTextile`;
    }
    remove(id) {
        return `This action removes a #${id} orderTextile`;
    }
};
exports.OrderTextileService = OrderTextileService;
exports.OrderTextileService = OrderTextileService = __decorate([
    (0, common_1.Injectable)()
], OrderTextileService);
//# sourceMappingURL=order-textile.service.js.map