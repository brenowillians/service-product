import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateBrandDto } from 'src/dto/create-brand.dto';
import { ListCriteriaBrandDto } from 'src/dto/list-criteria-brand.dto';
import { UpdateBrandDto } from 'src/dto/update-brand.dto';
import { Brand } from 'src/entities/brand';
import { BrandService } from 'src/services/brand.service';

@ApiTags('Brand')
@Controller('brand')
export class BrandController {
    constructor(private readonly brand: BrandService) {}

  @Get('alteracao')
  alteracao() {
    return "ESSA PORRA TÁ ALTERADA"
  }
  

  @ApiCreatedResponse({
    type: Brand, // aqui definimos o tipo de resposta
  }) 
  @Post('list')
  list(@Body() listCriteriaBrandDto: ListCriteriaBrandDto) {
    return this.brand.list(listCriteriaBrandDto);
  }

  @ApiCreatedResponse({
    type: Brand, // aqui definimos o tipo de resposta
  }) 
  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brand.create(createBrandDto);
  }


  @ApiCreatedResponse({
    type: Brand, // aqui definimos o tipo de resposta
  }) 
  @Get()
  findAll() {
    return this.brand.findAll();
  }

  @ApiCreatedResponse({
    type: Brand, // aqui definimos o tipo de resposta
  }) 
  
  @Get('active')
  findAllActive() {
    return this.brand.findAllActive();
  }

  @ApiCreatedResponse({
    type: Brand, // aqui definimos o tipo de resposta
  }) 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brand.findOne(+id);
  }

  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brand.update(+id, updateBrandDto);
  }

  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brand.remove(+id);
  }



}
