import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { Category } from 'src/entities/category';
import { Product } from 'src/entities/product';
import { ApiProperty } from '@nestjs/swagger';


export class CreateCategoryDto implements Category {

       
    @Exclude()
    idCategory: number;
    
     
    @IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
    name: string ;

     
    @IsOptional()
    active: boolean ;
    
     
    @IsNotEmpty({message:"CAMPO CREATEDID OBRIGATÓRIO"})
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
