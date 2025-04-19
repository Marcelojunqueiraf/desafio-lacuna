import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class IngredientesService {
  constructor(private prisma: PrismaService) {}

  create(createIngredienteDto: CreateIngredienteDto) {
    return this.prisma.ingrediente.create({
      data: createIngredienteDto
    });
  }

  findAll() {
    return this.prisma.ingrediente.findMany({
      select: {
        id: true,
        nome: true,
        unidade: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.ingrediente.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        unidade: true,
      }
    });
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    return this.prisma.ingrediente.update({
      where: { id },
      data: updateIngredienteDto
    });
  }

  remove(id: number) {
    return this.prisma.ingrediente.delete({
      where: { id }
    });
  }
}
