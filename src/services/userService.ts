import { prisma } from "@lib/prisma";

// User Service Functions

/* ============= GET ============ */
const getUserById = async (id: number) => {
  return prisma.user.findUnique({ where: { id } });
};
const getUserByUsername = async (gitUsername: string) => {
  return prisma.user.findUnique({ where: { gitUsername } });
};
const getUsersByProject = async (projectId: number) => {
  return prisma.user.findMany({
    where: {
      projects: { some: { id: projectId } },
    },
  });
};

/* ============ PATCH =========== */
const updateUser = async (id: number, data: any) => {
  return prisma.user.update({
    where: { id },
    data,
  });
}

/* ============ POST ============ */
const createUser = async (data: any) => {
  return prisma.user.create({
    data,
  });
}

/* ============ DELETE ========== */
const deleteUserById = async (id: number) => {
  return prisma.user.delete({
    where: { id },
  });
}

export const userService = {
  getUserById,
  getUserByUsername,
  getUsersByProject,
  updateUser,
  createUser,
  deleteUserById,
}