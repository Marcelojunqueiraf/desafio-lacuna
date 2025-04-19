import { PickType } from "@nestjs/mapped-types";
import { ReceitaEntity } from "../entities/receita.entity";

export class CreateReceitaDto extends PickType(ReceitaEntity, [
  'nome',
  'modoDePreparo',
]) {}
