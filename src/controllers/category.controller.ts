import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { ListCriteriaCategoryDto } from 'src/dto/list-criteria-category.dto';
import { UpdateCategoryDto } from 'src/dto/update-category.dto';
import { Category } from 'src/entities/category';
import { CategoryService } from 'src/services/category.service';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
    
    constructor(private readonly category: CategoryService) {}

  @Get('alteracao')
  alteracao() {
    return "ESSA PORRA TÁ ALTERADA"
  }
  
  @ApiCreatedResponse({
    type: Category, // aqui definimos o tipo de resposta
  }) 
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.category.create(createCategoryDto);
  }

  @ApiCreatedResponse({
    type: Category, // aqui definimos o tipo de resposta
  }) 
  @Get()
  findAll() {
    return this.category.findAll();
  }

  @ApiCreatedResponse({
    type: Category, // aqui definimos o tipo de resposta
  }) 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.category.findOne(+id);
  }

  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.category.update(+id, updateCategoryDto);
  }

  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.category.remove(+id);
  }

  @ApiCreatedResponse({
    type: Category, // aqui definimos o tipo de resposta
  }) 
  @Post('list')
  list(@Body() listCriteriacategoryDto: ListCriteriaCategoryDto) {
    return this.category.list(listCriteriacategoryDto);
  }


}
