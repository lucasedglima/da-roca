import { prisma } from "../lib/prisma.js";
import type { Carrinho } from "../../generated/prisma/client.js";

export class CarrinhoRepository {
  public async findAll(): Promise<Carrinho[]> {
    return prisma.carrinho.findMany();
  }

  public async findById(id: number): Promise<Carrinho | null> {
    return prisma.carrinho.findUnique({ where: { idCarrinho: id } });
  }

  public async create(data: Omit<Carrinho, "idCarrinho">): Promise<Carrinho> {
    return prisma.carrinho.create({ data });
  }

  public async update(
    id: number,
    data: Partial<Omit<Carrinho, "idCarrinho">>,
  ): Promise<Carrinho> {
    return prisma.carrinho.update({
      where: { idCarrinho: id },
      data,
    });
  }

  public async delete(id: number): Promise<Carrinho> {
    return prisma.carrinho.delete({ where: { idCarrinho: id } });
  }
}
