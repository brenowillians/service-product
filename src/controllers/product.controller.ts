import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { ListCriteriaProductDto } from 'src/dto/list-criteria-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';
import { Product } from 'src/entities/product';
import { ProductService } from 'src/services/product.service';

@ApiTags('Product')
@Controller('product')
export class ProductController {
    
    
    constructor(private readonly product: ProductService) {}

  @Get('alteracao')
  alteracao() {
    return "ESSA PORRA TÁ ALTERADA"
  }
  
  @ApiCreatedResponse({
    type: Product, // aqui definimos o tipo de resposta
  }) 
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.product.create(createProductDto);
  }

  @ApiCreatedResponse({
    type: Product, // aqui definimos o tipo de resposta
  }) 
  @Get()
  findAll() {
    return this.product.findAll();
  }

  @ApiCreatedResponse({
    type: Product, // aqui definimos o tipo de resposta
  }) 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.product.findOne(+id);
  }

  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.product.update(+id, updateProductDto);
  }

  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.product.remove(+id);
  }

  @ApiCreatedResponse({
    type: Product, // aqui definimos o tipo de resposta
  }) 
  @Post('list')
  list(@Body() listCriteriaproductDto: ListCriteriaProductDto) {
    return this.product.list(listCriteriaproductDto);
  }

}
