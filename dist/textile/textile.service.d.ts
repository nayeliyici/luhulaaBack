import { CreateTextileDto } from './dto/create-textile.dto';
import { UpdateTextileDto } from './dto/update-textile.dto';
export declare class TextileService {
    create(createTextileDto: CreateTextileDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTextileDto: UpdateTextileDto): string;
    remove(id: number): string;
}
