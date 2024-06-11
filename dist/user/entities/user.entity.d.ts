import { ArtisanEntity } from 'src/artisan/entities/artisan.entity';
import { CartEntity } from 'src/cart/entities/cart.entity';
import { FavoriteEntity } from 'src/favorite/entities/favorite.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { RoleEntity } from 'src/role/entities/role.entity';
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    name: string;
    phone: string;
    address_colony: string;
    address_street: string;
    address_number: string;
    address_reference: string;
    role: RoleEntity;
    artisan: ArtisanEntity;
    orders: OrderEntity[];
    favorites: FavoriteEntity[];
    cartItems: CartEntity[];
}
