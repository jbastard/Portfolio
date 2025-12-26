"use client";

import { useQuery } from "@tanstack/react-query";
import type { Post } from "@prisma/client";

const PostList = () => {
  const { data, isLoading } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("/api/posts");
      if (!res.ok) throw new Error("Error fetching posts");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
export default PostList;