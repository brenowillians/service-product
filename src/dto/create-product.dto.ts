import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { Product } from 'src/entities/product';
import { ProductSize } from 'src/entities/product_size';
import { Brand } from 'src/entities/brand';
import { Category } from 'src/entities/category';
import { ApiProperty } from '@nestjs/swagger';


export class CreateProductDto implements Product {

     
    @Exclude()
    idProduct: number;
     
     
    @IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
    name: string ;

     
    @IsOptional()
    active: boolean ;
    
     
    @IsNotEmpty({message:"CAMPO CREATEDID OBRIGATÓRIO"})
    createdId: number;

     
    @IsOptional()
    updatedId: number | null;

     
    @IsNotEmpty({message:"CAMPO IMAGE OBRIGATÓRIO"})
    image: string ;

     
    @IsNotEmpty({message:"CAMPO FULLPRICE OBRIGATÓRIO"})
    fullPrice: number;

     
    @IsOptional()
    salePrice: number | null;

     
    @IsOptional()
    onSale: boolean ;

     
    @IsNotEmpty({message:"CAMPO DESCRIPTION OBRIGATÓRIO"})
    description: string ;

     
    @IsNotEmpty({message:"CAMPO IDBRAND OBRIGATÓRIO"})
    idBrand: number;

     
    @IsNotEmpty({message:"CAMPO IDCATEGORY OBRIGATÓRIO"})
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