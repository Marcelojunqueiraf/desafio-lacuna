import { Receita } from "generated/prisma";

export class ReceitaEntity implements Receita {
  id: number;
  nome: string;
  modoDePreparo: string;
}
