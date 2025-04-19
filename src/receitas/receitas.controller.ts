import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { AddIngredienteDto } from './dto/add-ingrediente.dto';

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @Post()
  create(@Body() createReceitaDto: CreateReceitaDto) {
    return this.receitasService.create(createReceitaDto);
  }

  @Get()
  findAll() {
    return this.receitasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receitasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    return this.receitasService.update(+id, updateReceitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receitasService.remove(+id);
  }

  @Post(':id/ingredientes')
  addIngredientes(@Param('id') id: string,
  @Body() addIngredienteDto: AddIngredienteDto) {
    return this.receitasService.addIngredientes(+id, addIngredienteDto);
  }
  @Delete(':id/ingredientes/:ingredienteId')
  removeIngrediente(@Param('id') id: string, @Param('ingredienteId') ingredienteId: string) {
    return this.receitasService.removeIngrediente(+id, +ingredienteId);
  }
}
