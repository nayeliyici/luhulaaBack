"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTextileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_textile_dto_1 = require("./create-textile.dto");
class UpdateTextileDto extends (0, mapped_types_1.PartialType)(create_textile_dto_1.CreateTextileDto) {
}
exports.UpdateTextileDto = UpdateTextileDto;
//# sourceMappingURL=update-textile.dto.js.map