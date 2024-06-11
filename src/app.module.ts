import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeormconfig';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
import { ArtisanModule } from './artisan/artisan.module';
import { OrderModule } from './order/order.module';
import { FavoriteModule } from './favorite/favorite.module';
import { TextileModule } from './textile/textile.module';
import { RoleModule } from './role/role.module';
import { OrderTextileModule } from './order-textile/order-textile.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CartModule, UserModule, ArtisanModule, OrderModule, FavoriteModule, TextileModule, RoleModule, OrderTextileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
