import { UpdateArtisanDto } from './dto/update-artisan.dto';
import { CreateArtisanDto } from './dto/create-artisan.dto';
import { ArtisanService } from './artisan.service';
export declare class ArtisanController {
    private readonly artisansService;
    constructor(artisansService: ArtisanService);
    create(createArtisanDto: CreateArtisanDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateArtisanDto: UpdateArtisanDto): string;
    remove(id: string): string;
}
