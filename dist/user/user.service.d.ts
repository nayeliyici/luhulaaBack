import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DataSource } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private dataSource;
    constructor(dataSource: DataSource);
    findOne(id: number): Promise<UserEntity | HttpException>;
    findAll(): Promise<HttpException | UserEntity[]>;
    create(createUserDto: CreateUserDto): Promise<{
        statusCode: HttpStatus;
        data: UserEntity[];
        rol: import("../role/entities/role.entity").RoleEntity;
    }>;
    encryptPassword(password: string): Promise<string>;
    loginUser(email: string, password: string): Promise<{
        id: number;
        nombre: string;
        email: string;
        role: import("../role/entities/role.entity").RoleEntity;
    }>;
    remove(id: number): Promise<UserEntity | HttpException>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<HttpException | import("typeorm").UpdateResult>;
}
