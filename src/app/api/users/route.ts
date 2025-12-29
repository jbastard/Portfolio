import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";
import { userService } from "@services/userService";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  if (searchParams.has("id")) {
    const id = Number(searchParams.get("id"));
    const user = await userService.getUserById(id);
    return NextResponse.json(user);
  }

  if (searchParams.has("gitUsername")) {
    const user = await userService.getUserByUsername(searchParams.get("gitUsername")!);
    return NextResponse.json(user);
  }

  if (searchParams.has("projectId")) {
    const users = await userService.getUsersByProject(Number(searchParams.get("projectId")));
    return NextResponse.json(users);
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
  
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // TODO: Ajouter une validation ici
    const user = await userService.createUser(body);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create user" }, { status: 400 });
  }
}

// Delete all users
export async function DELETE() {
  await prisma.user.deleteMany({});

  return NextResponse.json({ message: "All users cleared" });
}
