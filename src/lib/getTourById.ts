import { prisma } from "./prisma";

export async function getTourById(id: string) {
  return prisma.tour.findUnique({ where: { id } });
}
