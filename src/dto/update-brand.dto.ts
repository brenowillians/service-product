import { Brand } from "src/entities/brand";
import { Product } from "src/entities/product";
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';


export class UpdateBrandDto implements Brand {

    @Exclude()
    idBrand: number;
     
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