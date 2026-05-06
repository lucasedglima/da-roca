import { prisma } from "../lib/prisma.js";
import type { ItemPedido } from "../../generated/prisma/client.js";

export class ItemPedidoRepository {
  public async findAll(): Promise<ItemPedido[]> {
    return prisma.itemPedido.findMany();
  }

  public async findById(id: number): Promise<ItemPedido | null> {
    return prisma.itemPedido.findUnique({ where: { idItemPedido: id } });
  }

  public async create(
    data: Omit<ItemPedido, "idItemPedido">,
  ): Promise<ItemPedido> {
    return prisma.itemPedido.create({ data });
  }

  public async update(
    id: number,
    data: Partial<Omit<ItemPedido, "idItemPedido">>,
  ): Promise<ItemPedido> {
    return prisma.itemPedido.update({
      where: { idItemPedido: id },
      data,
    });
  }

  public async delete(id: number): Promise<ItemPedido> {
    return prisma.itemPedido.delete({ where: { idItemPedido: id } });
  }
}
