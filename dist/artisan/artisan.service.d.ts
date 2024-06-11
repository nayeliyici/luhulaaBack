import { CreateArtisanDto } from './dto/create-artisan.dto';
import { UpdateArtisanDto } from './dto/update-artisan.dto';
export declare class ArtisanService {
    create(createArtisanDto: CreateArtisanDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateArtisanDto: UpdateArtisanDto): string;
    remove(id: number): string;
}
