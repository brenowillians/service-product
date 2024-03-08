import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { Category } from 'src/entities/category';
import { Product } from 'src/entities/product';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateCategoryDto implements Category {

     
    @Exclude()
    idCategory: number;
     
     
    @IsOptional()
    name: string ;

     
    @IsOptional()
    @IsBoolean()
    active: boolean ;
    
     
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
    products: Product[];

  }