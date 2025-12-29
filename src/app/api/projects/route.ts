import { prisma } from "@lib/prisma";
import { NextResponse } from "next/server";
import { projectService } from "@services/projectService";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  if (searchParams.has("id")) {
    const id = Number(searchParams.get("id"));
    const project = await projectService.getProjectById(id);
    return NextResponse.json(project);
  }

  if (searchParams.has("userId")) {
    const projects = await projectService.getProjectsByAuthor(Number(searchParams.get("userId")));
    return NextResponse.json(projects);
  }

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // TODO: Ajouter une validation ici
    const project = await projectService.createProject(body);
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 400 });
  }
}

// Delete all projects
export async function DELETE() {
  await prisma.project.deleteMany({});

  return NextResponse.json({ message: "All projects cleared" });
}