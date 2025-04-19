import { PickType } from "@nestjs/mapped-types";
import { IngredienteEntity } from "../entities/ingrediente.entity";

export class UpdateIngredienteDto extends PickType(IngredienteEntity, ['nome', 'unidade']) {}
