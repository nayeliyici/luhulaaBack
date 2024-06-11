import { ArtisanEntity } from 'src/artisan/entities/artisan.entity';
import { CartEntity } from 'src/cart/entities/cart.entity';
import { FavoriteEntity } from 'src/favorite/entities/favorite.entity';
import { OrderTextileEntity } from 'src/order-textile/entities/order-textile.entity';
export declare class TextileEntity {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    stock: number;
    creator: ArtisanEntity;
    madeIn: string;
    technique: string;
    materials: string;
    orderDetails: OrderTextileEntity[];
    favorites: FavoriteEntity[];
    cartItems: CartEntity[];
}
