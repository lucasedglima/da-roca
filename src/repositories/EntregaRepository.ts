import { prisma } from "../lib/prisma.js";
import type { Entrega } from "../../generated/prisma/client.js";

export class EntregaRepository {
  public async findAll(): Promise<Entrega[]> {
    return prisma.entrega.findMany();
  }

  public async findById(id: number): Promise<Entrega | null> {
    return prisma.entrega.findUnique({ where: { idEntrega: id } });
  }

  public async create(data: Omit<Entrega, "idEntrega">): Promise<Entrega> {
    return prisma.entrega.create({ data });
  }

  public async update(
    id: number,
    data: Partial<Omit<Entrega, "idEntrega">>,
  ): Promise<Entrega> {
    return prisma.entrega.update({
      where: { idEntrega: id },
      data,
    });
  }

  public async delete(id: number): Promise<Entrega> {
    return prisma.entrega.delete({ where: { idEntrega: id } });
  }
}
