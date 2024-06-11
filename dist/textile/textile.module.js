"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextileModule = void 0;
const common_1 = require("@nestjs/common");
const textile_service_1 = require("./textile.service");
const textile_controller_1 = require("./textile.controller");
let TextileModule = class TextileModule {
};
exports.TextileModule = TextileModule;
exports.TextileModule = TextileModule = __decorate([
    (0, common_1.Module)({
        controllers: [textile_controller_1.TextileController],
        providers: [textile_service_1.TextileService],
    })
], TextileModule);
//# sourceMappingURL=textile.module.js.map