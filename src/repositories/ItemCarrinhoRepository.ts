import { prisma } from "../lib/prisma.js";
import type { ItemCarrinho } from "../../generated/prisma/client.js";

export class ItemCarrinhoRepository {
  public async findAll(): Promise<ItemCarrinho[]> {
    return prisma.itemCarrinho.findMany();
  }

  public async findById(id: number): Promise<ItemCarrinho | null> {
    return prisma.itemCarrinho.findUnique({ where: { idItemCarrinho: id } });
  }

  public async create(
    data: Omit<ItemCarrinho, "idItemCarrinho">,
  ): Promise<ItemCarrinho> {
    return prisma.itemCarrinho.create({ data });
  }

  public async update(
    id: number,
    data: Partial<Omit<ItemCarrinho, "idItemCarrinho">>,
  ): Promise<ItemCarrinho> {
    return prisma.itemCarrinho.update({
      where: { idItemCarrinho: id },
      data,
    });
  }

  public async delete(id: number): Promise<ItemCarrinho> {
    return prisma.itemCarrinho.delete({ where: { idItemCarrinho: id } });
  }
}
