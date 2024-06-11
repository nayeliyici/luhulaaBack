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
exports.OrderTextileEntity = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("../../order/entities/order.entity");
const textile_entity_1 = require("../../textile/entities/textile.entity");
let OrderTextileEntity = class OrderTextileEntity {
};
exports.OrderTextileEntity = OrderTextileEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderTextileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.OrderEntity, order => order.orderDetails),
    __metadata("design:type", order_entity_1.OrderEntity)
], OrderTextileEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => textile_entity_1.TextileEntity, textile => textile.orderDetails),
    __metadata("design:type", textile_entity_1.TextileEntity)
], OrderTextileEntity.prototype, "textile", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderTextileEntity.prototype, "quantity", void 0);
exports.OrderTextileEntity = OrderTextileEntity = __decorate([
    (0, typeorm_1.Entity)('order_textiles')
], OrderTextileEntity);
//# sourceMappingURL=order-textile.entity.js.map