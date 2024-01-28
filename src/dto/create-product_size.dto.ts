import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { ProductSize } from 'src/entities/product_size';
import { Product } from 'src/entities/product';
import { Size } from 'src/entities/size';


export class CreateProductSizeDto implements ProductSize {


@Exclude()
idProductSize: number;

@IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
idProduct: number;
 
@IsNotEmpty({message:"CAMPO IDSIZE OBRIGATÓRIO"})
idSize: number;

@IsOptional()
available: boolean ;

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
idProduct2: Product;

@Exclude()
idSize2: Size;

  
}  