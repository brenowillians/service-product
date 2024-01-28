import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaSizeDto {
    
         
    @IsOptional()
    name: string;

    @IsOptional()
    @IsBoolean()
    active: boolean;

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