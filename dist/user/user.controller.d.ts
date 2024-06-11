import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        data: import("./entities/user.entity").UserEntity[];
        rol: import("../role/entities/role.entity").RoleEntity;
    }>;
    loginUser(loginUserDto: LoginUserDto): Promise<{
        id: number;
        nombre: string;
        email: string;
        role: import("../role/entities/role.entity").RoleEntity;
    }>;
    findAll(): Promise<import("@nestjs/common").HttpException | import("./entities/user.entity").UserEntity[]>;
    findOne(id: number): Promise<import("./entities/user.entity").UserEntity | import("@nestjs/common").HttpException>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("@nestjs/common").HttpException | import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("./entities/user.entity").UserEntity | import("@nestjs/common").HttpException>;
}
