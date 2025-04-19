import { Ingrediente } from "generated/prisma";

export class IngredienteEntity implements Ingrediente {
    id: number;
    nome: string;
    unidade: string;
}
