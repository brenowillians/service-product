import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateSizeDto } from 'src/dto/create-size.dto';
import { ListCriteriaSizeDto } from 'src/dto/list-criteria-size.dto';
import { UpdateSizeDto } from 'src/dto/update-size.dto';
import { Size } from 'src/entities/size';
import { SizeService } from 'src/services/size.service';


@ApiTags('Size')
@Controller('size')
export class SizeController {  
       
    constructor(private readonly size: SizeService) {}

  @Get('alteracao')
  alteracao() {
    return "ESSA PORRA TÁ ALTERADA"
  }
  
  @ApiCreatedResponse({
    type: Size, // aqui definimos o tipo de resposta
  }) 
  @Post()
  create(@Body() createSizeDto: CreateSizeDto) {
    return this.size.create(createSizeDto);
  }

  @ApiCreatedResponse({
    type: Size, // aqui definimos o tipo de resposta
  }) 
  @Get()
  findAll() {
    return this.size.findAll();
  }

  @ApiCreatedResponse({
    type: Size, // aqui definimos o tipo de resposta
  }) 
  
  @Get('active')
  findAllActive() {
    return this.size.findAllActive();
  }

  @ApiCreatedResponse({
    type: Size, // aqui definimos o tipo de resposta
  }) 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.size.findOne(+id);
  }

  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    return this.size.update(+id, updateSizeDto);
  }

  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.size.remove(+id);
  }

  @ApiCreatedResponse({
    type: Size, // aqui definimos o tipo de resposta
  }) 
  @Post('list')
  list(@Body() listCriteriasizeDto: ListCriteriaSizeDto) {
    return this.size.list(listCriteriasizeDto);
  }




}
