import PostList from "@components/PostList";
import CreatePostForm from "@components/CreatePostForm";

export default function Home() {
  return (
    <main>
      <CreatePostForm />
      <PostList />
    </main>
  );
}
