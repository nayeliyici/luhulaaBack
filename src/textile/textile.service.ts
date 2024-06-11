import { Injectable } from '@nestjs/common';
import { CreateTextileDto } from './dto/create-textile.dto';
import { UpdateTextileDto } from './dto/update-textile.dto';

@Injectable()
export class TextileService {
  create(createTextileDto: CreateTextileDto) {
    return 'This action adds a new textile';
  }

  findAll() {
    return `This action returns all textile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textile`;
  }

  update(id: number, updateTextileDto: UpdateTextileDto) {
    return `This action updates a #${id} textile`;
  }

  remove(id: number) {
    return `This action removes a #${id} textile`;
  }
}
