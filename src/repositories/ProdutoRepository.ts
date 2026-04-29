import { prisma } from "../lib/prisma.js";
import type { Produto } from "../../generated/prisma/client.js";

export class ProdutoRepository {
  public async findAll(): Promise<Produto[]> {
    return prisma.produto.findMany();
  }

  public async findById(id: number): Promise<Produto | null> {
    return prisma.produto.findUnique({ where: { idProduto: id } });
  }

  public async create(data: Omit<Produto, "idProduto">): Promise<Produto> {
    return prisma.produto.create({ data });
  }

  public async update(
    id: number,
    data: Partial<Omit<Produto, "idProduto">>,
  ): Promise<Produto> {
    return prisma.produto.update({
      where: { idProduto: id },
      data,
    });
  }

  public async delete(id: number): Promise<Produto> {
    return prisma.produto.delete({ where: { idProduto: id } });
  }
}
