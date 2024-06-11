import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateTextileDto } from './dto/create-textile.dto';
import { UpdateTextileDto } from './dto/update-textile.dto';
import { TextileService } from './textile.service';

@ApiTags('textile')
@Controller('textiles')
export class TextileController {
  constructor(private readonly textilesService: TextileService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new textile' })
  create(@Body() createTextileDto: CreateTextileDto) {
    return this.textilesService.create(createTextileDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all textiles' })
  findAll() {
    return this.textilesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a textile by ID' })
  findOne(@Param('id') id: string) {
    return this.textilesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a textile by ID' })
  update(@Param('id') id: string, @Body() updateTextileDto: UpdateTextileDto) {
    return this.textilesService.update(+id, updateTextileDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a textile by ID' })
  remove(@Param('id') id: string) {
    return this.textilesService.remove(+id);
  }
}
