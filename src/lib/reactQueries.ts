import type { Prisma } from "@prisma/client";

/* ============= USERS ============= */

/* GET */
export const fetchUsers = async () => {
  const res = await fetch("/api/users");
  if (!res.ok) throw new Error("Erreur lors du chargement");
  return res.json();
};

/* POST */
export const createUser = async (userData: Prisma.UserCreateInput) => {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!res.ok) throw new Error("Erreur lors de la création de l'utilisateur");
  return res.json();
}

/* DELETE */
export const deleteAllUsers = async () => {
  const res = await fetch("/api/users", {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression des utilisateurs");
  return res.json();
}

/* ============= PROJECTS ============= */

/* GET */
export const fetchProjects = async () => {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error("Erreur lors du chargement");
  return res.json();
};

/* POST */
export const createProject = async (projectData: Prisma.ProjectCreateInput) => {
  const res = await fetch("/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });
  if (!res.ok) throw new Error("Erreur lors de la création du projet");
  return res.json();
};

/* DELETE */
export const deleteAllProjects = async () => {
  const res = await fetch("/api/projects", {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression des projets");
  return res.json();
}