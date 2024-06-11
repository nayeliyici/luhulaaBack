"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTextileModule = void 0;
const common_1 = require("@nestjs/common");
const order_textile_service_1 = require("./order-textile.service");
const order_textile_controller_1 = require("./order-textile.controller");
let OrderTextileModule = class OrderTextileModule {
};
exports.OrderTextileModule = OrderTextileModule;
exports.OrderTextileModule = OrderTextileModule = __decorate([
    (0, common_1.Module)({
        controllers: [order_textile_controller_1.OrderTextileController],
        providers: [order_textile_service_1.OrderTextileService],
    })
], OrderTextileModule);
//# sourceMappingURL=order-textile.module.js.map