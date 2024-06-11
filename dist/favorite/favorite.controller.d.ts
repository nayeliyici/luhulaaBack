import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { FavoriteService } from './favorite.service';
export declare class FavoriteController {
    private readonly favoritesService;
    constructor(favoritesService: FavoriteService);
    create(createFavoriteDto: CreateFavoriteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFavoriteDto: UpdateFavoriteDto): string;
    remove(id: string): string;
}
