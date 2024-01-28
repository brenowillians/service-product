import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaProduct_sizeDto {

    @IsOptional()
    @IsInt()
    idProduct: number;

    @IsOptional()
    @IsInt()
    idSize: number;

         
    @IsOptional()
    @IsBoolean()
    available: boolean ;

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