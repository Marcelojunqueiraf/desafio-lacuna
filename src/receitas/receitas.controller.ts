import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { AddIngredienteDto } from './dto/add-ingrediente.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @ApiBody({
    type: CreateReceitaDto,
    examples: {
      exemplo1: {
        summary: 'Exemplo de Receita',
        description: 'Uma receita de bolo de chocolate',
        value: {
          nome: 'Bolo de Chocolate',
          modoDePreparo: 'Um delicioso bolo de chocolate.',
        },
      },
    },
  })
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

  @ApiBody({
    type: UpdateReceitaDto,
    examples: {
      exemplo1: {
        summary: 'Exemplo de Atualização de Receita',
        description: 'Atualiza a receita de bolo de chocolate',
        value: {
          nome: 'Bolo de Chocolate com Morango',
          modoDePreparo: 'Um delicioso bolo de chocolate com morangos.',
        },
      },
    },
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    return this.receitasService.update(+id, updateReceitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receitasService.remove(+id);
  }

  @ApiBody({
    type: AddIngredienteDto,
    examples: {
      exemplo1: {
        summary: 'Adicionar Ingrediente',
        value: { ingredienteId: 1, quantidade: 2 },
      },
    },
  })
  @Post(':id/ingredientes')
  addIngredientes(
    @Param('id') id: string,
    @Body() addIngredienteDto: AddIngredienteDto,
  ) {
    return this.receitasService.addIngredientes(+id, addIngredienteDto);
  }

  @Delete(':id/ingredientes/:ingredienteId')
  removeIngrediente(
    @Param('id') id: string,
    @Param('ingredienteId') ingredienteId: string,
  ) {
    return this.receitasService.removeIngrediente(+id, +ingredienteId);
  }
}
