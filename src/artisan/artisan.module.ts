import { Module } from '@nestjs/common';
import { ArtisanService } from './artisan.service';
import { ArtisanController } from './artisan.controller';

@Module({
  controllers: [ArtisanController],
  providers: [ArtisanService],
})
export class ArtisanModule {}
