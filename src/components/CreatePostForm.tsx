"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Post } from "@prisma/client";
import { useState } from "react";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const { mutate: createPost } = useMutation({
    mutationFn: async (title: string): Promise<Post> => {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      if (!res.ok) throw new Error("Error creating post");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setTitle("");
    },
  });

  const { mutate: clearPosts } = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/posts", {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error clearing posts");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        createPost(title);
      }}>
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
      <button onClick={() => {clearPosts()}}>
        Clear Posts
      </button>
    </>
  );
};
export default CreatePostForm;
