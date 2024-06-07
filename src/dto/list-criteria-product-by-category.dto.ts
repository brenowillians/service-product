import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaProductByCategoryDto {

     
    @IsNotEmpty()
    idCategory: number ;

     
    @IsOptional()
    idBrand: number ;

     
    @IsOptional()
    idSize: number;

     
    @IsOptional()
    fullPrice: number;

    // Controla se o preço vai ser maior ou menor(true/false) que o valor informado no parametro fullPrice 
    @IsOptional()
    @IsBoolean()
    isOverPrice: boolean ;

     
    @IsNotEmpty()
    @IsInt()
    items: number;

     
    @IsNotEmpty()
    @IsInt()
    page: number;

     
    @IsNotEmpty()
    //ordenar por propriedades indiscriminadas da entidade
    order: { [key: string]: string }

    
}