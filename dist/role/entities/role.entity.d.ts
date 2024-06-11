import { UserEntity } from 'src/user/entities/user.entity';
export declare class RoleEntity {
    id: number;
    name: string;
    description: string;
    users: UserEntity[];
}
