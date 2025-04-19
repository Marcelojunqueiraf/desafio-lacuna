import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @ApiBody({
    type: CreateIngredienteDto,
    examples: {
      exemplo1: {
        summary: 'Exemplo de Ingrediente',
        description: 'Um exemplo de ingrediente com nome e unidade',
        value: {
          nome: 'Farinha de Trigo',
          unidade: 'kg',
        },
      },
    },
  })
  @Post()
  create(@Body() createIngredienteDto: CreateIngredienteDto) {
    return this.ingredientesService.create(createIngredienteDto);
  }

  @Get()
  findAll() {
    return this.ingredientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientesService.findOne(+id);
  }

  @ApiBody({
    type: UpdateIngredienteDto,
    examples: {
      exemplo1: {
        summary: 'Exemplo de Atualização de Ingrediente',
        description:
          'Um exemplo de atualização de ingrediente com nome e unidade',
        value: {
          nome: 'Farinha de Trigo Integral',
          unidade: 'kg',
        },
      },
    },
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredienteDto: UpdateIngredienteDto,
  ) {
    return this.ingredientesService.update(+id, updateIngredienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientesService.remove(+id);
  }
}
