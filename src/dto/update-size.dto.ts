import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { Size } from 'src/entities/size';
import { ProductSize } from 'src/entities/product_size';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateSizeDto implements Size {

     
    @Exclude()
    idSize: number;
     
     
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
    productSizes: ProductSize[];

    
  }  