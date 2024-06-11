"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArtisanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_artisan_dto_1 = require("./create-artisan.dto");
class UpdateArtisanDto extends (0, mapped_types_1.PartialType)(create_artisan_dto_1.CreateArtisanDto) {
}
exports.UpdateArtisanDto = UpdateArtisanDto;
//# sourceMappingURL=update-artisan.dto.js.map