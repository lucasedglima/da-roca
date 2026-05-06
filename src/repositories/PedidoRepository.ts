import { prisma } from "../lib/prisma.js";
import type { Pedido } from "../../generated/prisma/client.js";

export class PedidoRepository {
  public async findAll(): Promise<Pedido[]> {
    return prisma.pedido.findMany();
  }

  public async findById(id: number): Promise<Pedido | null> {
    return prisma.pedido.findUnique({ where: { idPedido: id } });
  }

  public async create(data: Omit<Pedido, "idPedido">): Promise<Pedido> {
    return prisma.pedido.create({ data });
  }

  public async update(
    id: number,
    data: Partial<Omit<Pedido, "idPedido">>,
  ): Promise<Pedido> {
    return prisma.pedido.update({
      where: { idPedido: id },
      data,
    });
  }

  public async delete(id: number): Promise<Pedido> {
    return prisma.pedido.delete({ where: { idPedido: id } });
  }
}
