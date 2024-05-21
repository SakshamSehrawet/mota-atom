import prisma from "@/lib/prisma";

export async function getContests() {
  return await prisma.contest.findMany({
    where: {},
    orderBy: { createdAt: "desc" },
  });
}
