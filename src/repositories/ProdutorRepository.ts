import { prisma } from "../lib/prisma.js";
import type { Produtor } from "../../generated/prisma/client.js";

export class ProdutorRepository {
  public async findAll(): Promise<Produtor[]> {
    return prisma.produtor.findMany();
  }

  public async findById(id: number): Promise<Produtor | null> {
    return prisma.produtor.findUnique({ where: { idProdutor: id } });
  }

  public async create(data: Omit<Produtor, "idProdutor">): Promise<Produtor> {
    return prisma.produtor.create({ data });
  }

  public async update(
    id: number,
    data: Partial<Omit<Produtor, "idProdutor">>,
  ): Promise<Produtor> {
    return prisma.produtor.update({
      where: { idProdutor: id },
      data,
    });
  }

  public async delete(id: number): Promise<Produtor> {
    return prisma.produtor.delete({ where: { idProdutor: id } });
  }
}
