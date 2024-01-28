import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { Size } from 'src/entities/size';
import { ProductSize } from 'src/entities/product_size';


export class CreateSizeDto implements Size {

    @Exclude()
    idSize: number;
     
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
    productSizes: ProductSize[];

  }  