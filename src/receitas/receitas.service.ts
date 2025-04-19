import { Injectable } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { AddIngredienteDto } from './dto/add-ingrediente.dto';

@Injectable()
export class ReceitasService {
  constructor(private prisma: PrismaService) {}

  create(createReceitaDto: CreateReceitaDto) {
    return this.prisma.receita.create({
      data: {
        nome: createReceitaDto.nome,
        descricao: createReceitaDto.descricao,
      },
    });
  }

  findAll() {
    return this.prisma.receita.findMany({
      select: {
        id: true,
        nome: true,
        descricao: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.receita.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        descricao: true,
        ingredientes: {
          select: {
            ingrediente: {
              select: {
                id: true,
                nome: true,
                unidade: true,
              }
            },
            quantidade: true,
          }
        }
      }
    });
  }

  update(id: number, updateReceitaDto: UpdateReceitaDto) {
    return this.prisma.receita.update({
      where: { id },
      data: {
        nome: updateReceitaDto.nome,
        descricao: updateReceitaDto.descricao,
      }
    });
  }

  remove(id: number) {
    return this.prisma.receita.delete({
      where: { id },
    });
  }

  addIngredientes(id: number, addIngredienteDto: AddIngredienteDto) {
    return this.prisma.receitaIngrediente.create({
      data: {
        receita: {
          connect: { id }
        },
        ingrediente: {
          connect: { id: addIngredienteDto.ingredienteId }
        },
        quantidade: addIngredienteDto.quantidade, 
      }
  })
}

  removeIngrediente(id: number, ingredienteId: number) {
    return this.prisma.receitaIngrediente.delete({
      where: {
        receitaId_ingredienteId: {
          receitaId: id,
          ingredienteId: ingredienteId,
        }
      }
    });
  }
}
