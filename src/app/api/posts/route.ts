import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
    },
  });

  return NextResponse.json(post);
}

export async function PATCH(req: Request) {
  const body = await req.json();

  const post = await prisma.post.update({
    where: { id: body.id },
    data: {
      title: body.title,
    },
  });
  return NextResponse.json(post);
}

export async function DELETE() {
  await prisma.post.deleteMany({});

  return NextResponse.json({ message: "All posts cleared" });
}