import { PartialType } from '@nestjs/mapped-types';
import { CreateTextileDto } from './create-textile.dto';

export class UpdateTextileDto extends PartialType(CreateTextileDto) {}
