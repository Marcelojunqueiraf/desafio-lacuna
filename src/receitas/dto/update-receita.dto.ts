import { PickType } from "@nestjs/mapped-types";
import { ReceitaEntity } from "../entities/receita.entity";

export class UpdateReceitaDto extends PickType(ReceitaEntity, ['nome', 'descricao']){}
