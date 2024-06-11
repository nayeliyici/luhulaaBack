import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleService } from './role.service';
export declare class RoleController {
    private readonly rolesService;
    constructor(rolesService: RoleService);
    create(createRoleDto: CreateRoleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRoleDto: UpdateRoleDto): string;
    remove(id: string): string;
}
