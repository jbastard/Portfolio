import { prisma } from "@lib/prisma";
import type { User } from "@prisma/client";

// Project Service Functions

/* ============= GET ============ */
const getProjectById = async (id: number) => {
  return prisma.project.findUnique({ where: { id } });
};
const getProjectsByAuthor = async (author: number | User) => {
  const authorId = typeof author === "number" ? author : author.id;
  return prisma.project.findMany({
    where: {
      authorId: authorId,
    },
  });
};

/* ============ PATCH =========== */
const updateProject = async (id: number, data: any) => {
  return prisma.project.update({
    where: { id },
    data,
  });
}

/* ============ POST ============ */
const createProject = async (data: any) => {
  return prisma.project.create({
    data,
  });
}

/* ============ DELETE ========== */
const deleteProjectById = async (id: number) => {
  return prisma.project.delete({
    where: { id },
  });
}

export const projectService = {
  getProjectById,
  getProjectsByAuthor,
  updateProject,
  createProject,
  deleteProjectById,
}