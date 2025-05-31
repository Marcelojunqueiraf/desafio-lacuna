import { Module } from '@nestjs/common';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ReceitasModule } from './receitas/receitas.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';

@Module({
  imports: [IngredientesModule, ReceitasModule, PrismaModule],
  controllers: [AppController],
})
export class AppModule {}
