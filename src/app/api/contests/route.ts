// app/api/contests/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { searchQuery, filters, sortOption } = await req.json();

  let where: any = {};
  if (searchQuery) {
    where = {
      OR: [
        { title: { contains: searchQuery, mode: "insensitive" } },
        { admin: { contains: searchQuery, mode: "insensitive" } },
      ],
    };
  }

  if (filters.type) where.type = filters.type;
  if (filters.needApproval) where.needApproval = filters.needApproval;
  const now = new Date();
  if (filters.notStarted) {
    where.start = { gte: now };
  }
  if (filters.ongoing) {
    where.start = { lte: now };
    where.end = { gte: now };
  }
  if (filters.finished) {
    where.end = { lte: now };
  }
  let orderBy = {};
  switch (sortOption) {
    case "newest":
      orderBy = { createdAt: "desc" };
      break;
    case "oldest":
      orderBy = { createdAt: "asc" };
      break;
    case "title-asc":
      orderBy = { title: "asc" };
      break;
    case "title-desc":
      orderBy = { title: "desc" };
      break;
    case "start-date-asc":
      orderBy = { start: "asc" };
      break;
    case "start-date-desc":
      orderBy = { start: "desc" };
      break;
    case "end-date-asc":
      orderBy = { end: "asc" };
      break;
    case "end-date-desc":
      orderBy = { end: "desc" };
      break;
    default:
      orderBy = { createdAt: "desc" };
  }

  const contests = await prisma.contest.findMany({
    where,
    orderBy,
  });

  return NextResponse.json({ contests });
}
