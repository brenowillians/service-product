import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductSizeDto } from 'src/dto/create-product_size.dto';
import { ListCriteriaProduct_sizeDto } from 'src/dto/list-criteria-product_size.dto';
import { UpdateProductSizeDto } from 'src/dto/update-product_size.dto';
import { ProductSize } from 'src/entities/product_size';
import { ProductSizeService } from 'src/services/product_size.service';

@ApiTags('ProductSize')
@Controller('product-size')
export class ProductSizeController {
    
    
    constructor(private readonly productSize: ProductSizeService) {}

  @Get('alteracao')
  alteracao() {
    return "ESSA PORRA TÁ ALTERADA"
  }
  
  @ApiCreatedResponse({
    type: ProductSize, // aqui definimos o tipo de resposta
  }) 
  @Post()
  create(@Body() createProductSizeDto: CreateProductSizeDto) {
    return this.productSize.create(createProductSizeDto);
  }

  @ApiCreatedResponse({
    type: ProductSize, // aqui definimos o tipo de resposta
  }) 
  @Get()
  findAll() {
    return this.productSize.findAll();
  }

  @ApiCreatedResponse({
    type: ProductSize, // aqui definimos o tipo de resposta
  }) 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productSize.findOne(+id);
  }

  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductSizeDto: UpdateProductSizeDto) {
    return this.productSize.update(+id, updateProductSizeDto);
  }

  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productSize.remove(+id);
  }

  @ApiCreatedResponse({
    type: ProductSize, // aqui definimos o tipo de resposta
  }) 
  @Post('list')
  list(@Body() listCriteriaproductSizeDto: ListCriteriaProduct_sizeDto) {
    return this.productSize.list(listCriteriaproductSizeDto);
  }

}
