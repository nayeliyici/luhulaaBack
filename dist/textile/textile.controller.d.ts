import { CreateTextileDto } from './dto/create-textile.dto';
import { UpdateTextileDto } from './dto/update-textile.dto';
import { TextileService } from './textile.service';
export declare class TextileController {
    private readonly textilesService;
    constructor(textilesService: TextileService);
    create(createTextileDto: CreateTextileDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTextileDto: UpdateTextileDto): string;
    remove(id: string): string;
}
