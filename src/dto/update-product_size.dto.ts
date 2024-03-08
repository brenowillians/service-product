import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { ProductSize } from 'src/entities/product_size';
import { Product } from 'src/entities/product';
import { Size } from 'src/entities/size';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateProductSizeDto implements ProductSize {

 
@Exclude()
idProductSize: number;

 
@IsOptional()
idProduct: number;
 
 
@IsOptional()
idSize: number;

 
@IsOptional()
@IsBoolean()
available: boolean ;

 
@IsOptional()
createdId: number;

 
@IsOptional()
updatedId: number | null;

 
@Exclude()
createdDate: string;
 
 
@Exclude()
updatedDate: string;

 
@Exclude()
deletedDate: string;  

 
@Exclude()
idProduct2: Product;

 
@Exclude()
idSize2: Size;


  
} 