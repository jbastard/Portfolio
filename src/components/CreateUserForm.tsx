'use client'

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "@lib/reactQueries";
import { queryClient } from "@/lib/queryClient";
import { Prisma } from '@prisma/client'

const CreateUserForm = () => {
  const [form, setForm] = useState<Prisma.UserCreateInput>({ firstName: "", lastName: "", gitUsername: "" , email: "" });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setForm({ firstName: "", lastName: "", email: "", gitUsername: "" });
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        placeholder="Prénom"
        value={form.firstName}
        onChange={handleChange}
        required
      />
      <input
        name="lastName"
        placeholder="Nom"
        value={form.lastName}
        onChange={handleChange}
        required
      />
      <input
        name="gitUsername"
        placeholder="username"
        value={form.gitUsername}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={isPending}>
        {isPending ? "Création..." : "Créer l'utilisateur"}
      </button>
      {isError && <div>Erreur lors de la création.</div>}
      {isSuccess && <div>Utilisateur créé !</div>}
    </form>
  );
};

export default CreateUserForm;