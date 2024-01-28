import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand';
import { Category } from './entities/category';
import { ProductSize } from './entities/product_size';
import { Size } from './entities/size';
import { BrandService } from './services/brand.service';
import { CategoryService } from './services/category.service';
import { ProductSizeService } from './services/product_size.service';
import { ProductService } from './services/product.service';
import { SizeService } from './services/size.service';
import { BrandController } from './controllers/brand.controller';
import { CategoryController } from './controllers/category.controller';
import { ProductSizeController } from './controllers/product_size.controller';
import { ProductController } from './controllers/product.controller';
import { SizeController } from './controllers/size.controller';
import { Product } from './entities/product';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'loja-products',
      username: 'postgres',
      password: '123456',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      logging: true,
      synchronize: true, // never true in production!
    }),

    TypeOrmModule.forFeature([Brand, Category, Product,ProductSize, Size]),
  
  ],
  
  controllers: [AppController, BrandController, CategoryController, ProductSizeController, ProductController, SizeController],
  providers: [AppService, BrandService, CategoryService, ProductSizeService, ProductService, SizeService],
})
export class AppModule {}
