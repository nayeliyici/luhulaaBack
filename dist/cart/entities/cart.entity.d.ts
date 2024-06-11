import { TextileEntity } from 'src/textile/entities/textile.entity';
import { UserEntity } from 'src/user/entities/user.entity';
export declare class CartEntity {
    id: number;
    user: UserEntity;
    textile: TextileEntity;
    quantity: number;
}
