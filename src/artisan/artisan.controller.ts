import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateArtisanDto } from './dto/update-artisan.dto';
import { CreateArtisanDto } from './dto/create-artisan.dto';
import { ArtisanService } from './artisan.service';

@ApiTags('artisan')
@Controller('artisans')
export class ArtisanController {
  constructor(private readonly artisansService: ArtisanService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new artisan' })
  create(@Body() createArtisanDto: CreateArtisanDto) {
    return this.artisansService.create(createArtisanDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all artisans' })
  findAll() {
    return this.artisansService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an artisan by ID' })
  findOne(@Param('id') id: string) {
    return this.artisansService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an artisan by ID' })
  update(@Param('id') id: string, @Body() updateArtisanDto: UpdateArtisanDto) {
    return this.artisansService.update(+id, updateArtisanDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an artisan by ID' })
  remove(@Param('id') id: string) {
    return this.artisansService.remove(+id);
  }
}
