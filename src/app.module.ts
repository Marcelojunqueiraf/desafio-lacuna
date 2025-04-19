import { Module } from '@nestjs/common';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ReceitasModule } from './receitas/receitas.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [IngredientesModule, ReceitasModule, PrismaModule],
})
export class AppModule {}
