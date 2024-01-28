import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaProductDto {

    @IsOptional()
    name: string ;

    @IsOptional()
    image: string ;

    @IsOptional()
    fullPrice: number;

    @IsOptional()
    salePrice: number | null;

    @IsOptional()
    @IsBoolean()
    onSale: boolean ;

    @IsOptional()
    description: string ;
    
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