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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async findOne(id) {
        try {
            const userFind = await this.dataSource
                .getRepository(user_entity_1.UserEntity)
                .findOne({
                where: { id: id },
                relations: ['role'],
                select: ['id', 'email', 'name', 'role'],
            });
            if (!userFind) {
                return new common_1.HttpException('No se encontro el usuario', common_1.HttpStatus.NOT_FOUND);
            }
            return userFind;
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener el usuario', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const userss = await this.dataSource
                .getRepository(user_entity_1.UserEntity)
                .find({
                relations: ['role'],
                select: ['id', 'email', 'name'],
            });
            if (!userss) {
                return new common_1.HttpException('No se encontraron usuarios', common_1.HttpStatus.NOT_FOUND);
            }
            return userss;
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener los usuarios', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async create(createUserDto) {
        try {
            const newUser = this.dataSource
                .getRepository(user_entity_1.UserEntity).create(createUserDto);
            const encryptedPassword = await this.encryptPassword(createUserDto.password);
            newUser.password = encryptedPassword;
            await this.dataSource
                .getRepository(user_entity_1.UserEntity).save(newUser);
            const response = {
                statusCode: common_1.HttpStatus.OK,
                data: [newUser],
                rol: newUser.role
            };
            return response;
        }
        catch (error) {
            throw new Error('Error al crear el usuario: ' + error.message);
        }
    }
    async encryptPassword(password) {
        const bcrypt = require('bcrypt');
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }
    async loginUser(email, password) {
        try {
            const userFind = await this.dataSource
                .getRepository(user_entity_1.UserEntity).findOne({
                where: { email: email },
                relations: ['role'],
                select: ['id', 'email', 'name', 'password'],
            });
            if (!userFind) {
                throw new common_1.HttpException('Usuario no encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            const bcrypt = require('bcrypt');
            const isPasswordValid = await bcrypt.compare(password, userFind.password);
            if (!isPasswordValid) {
                throw new common_1.HttpException('Contraseña incorrecta', common_1.HttpStatus.UNAUTHORIZED);
            }
            return {
                id: userFind.id,
                nombre: userFind.name,
                email: userFind.email,
                role: userFind.role
            };
        }
        catch (error) {
            throw new common_1.HttpException('Error al iniciar sesión', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            const userFind = await this.dataSource
                .getRepository(user_entity_1.UserEntity)
                .findOne({ where: { id: id } });
            if (!userFind) {
                return new common_1.HttpException('No se encontro el usuario', common_1.HttpStatus.NOT_FOUND);
            }
            return await this.dataSource
                .getRepository(user_entity_1.UserEntity)
                .remove(userFind);
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar el usuario', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateUserDto) {
        try {
            const userFind = await this.dataSource
                .getRepository(user_entity_1.UserEntity)
                .findOne({ where: { id: id } });
            if (!userFind) {
                return new common_1.HttpException('No se encontro el usuario', common_1.HttpStatus.NOT_FOUND);
            }
            return await this.dataSource
                .getRepository(user_entity_1.UserEntity)
                .update({ id: userFind.id }, updateUserDto);
        }
        catch (error) {
            throw new common_1.HttpException('Error al actualizar el usuario', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UserService);
//# sourceMappingURL=user.service.js.map