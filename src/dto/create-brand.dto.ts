import { Brand } from "src/entities/brand";
import { Product } from "src/entities/product";
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";


export class CreateBrandDto implements Brand {

     
    @Exclude()
    idBrand: number;

      
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
