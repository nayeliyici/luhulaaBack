import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { FavoriteService } from './favorite.service';

@ApiTags('favorite')
@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoritesService: FavoriteService) {}

  @Post()
  @ApiOperation({ summary: 'Add a textile to favorites' })
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoritesService.create(createFavoriteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all favorites' })
  findAll() {
    return this.favoritesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a favorite by ID' })
  findOne(@Param('id') id: string) {
    return this.favoritesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a favorite by ID' })
  update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    return this.favoritesService.update(+id, updateFavoriteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a favorite by ID' })
  remove(@Param('id') id: string) {
    return this.favoritesService.remove(+id);
  }
}
