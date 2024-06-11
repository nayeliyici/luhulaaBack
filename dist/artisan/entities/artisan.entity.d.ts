import { UserEntity } from 'src/user/entities/user.entity';
import { TextileEntity } from 'src/textile/entities/textile.entity';
export declare class ArtisanEntity {
    id: number;
    user: UserEntity;
    photo: string;
    biography: string;
    quote: string;
    textiles: TextileEntity[];
}
