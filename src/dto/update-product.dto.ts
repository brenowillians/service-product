import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { Product } from 'src/entities/product';
import { ProductSize } from 'src/entities/product_size';
import { Brand } from 'src/entities/brand';
import { Category } from 'src/entities/category';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateProductDto implements Product {

      
    @Exclude()
    idProduct: number;
     
     
    @IsOptional()
    name: string ;

     
    @IsOptional()
    @IsBoolean()
    active: boolean ;
    
     
    @IsOptional()
    createdId: number;

     
    @IsOptional()
    updatedId: number | null;

     
    @IsOptional()
    image: string ;

     
    @IsOptional()
    fullPrice: number;

     
    @IsOptional()
    salePrice: number | null;

     
    @IsOptional()
    @IsBoolean()
    onSale: boolean ;

     
    @IsOptional()
    description: string ;

     
    @IsOptional()
    idBrand: number;

     
    @IsOptional()
    idCategory: number;
    
     
    @Exclude()
    createdDate: string;
     
     
    @Exclude()
    updatedDate: string;
    
     
    @Exclude()
    deletedDate: string;  
      
     
    @Exclude()  
    productSizes: ProductSize[];

     
    @Exclude()
    idBrand2: Brand;

     
    @Exclude()
    idCategory2: Category;
 
   

  }  