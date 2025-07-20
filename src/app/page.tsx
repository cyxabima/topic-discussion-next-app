import PostList from "@/components/posts/post-list";
import { TopicCreateForm } from "@/components/topic/topic-create-form";
import { fetchTopPost } from "@/lib/query/post";

export default function Home() {
  return (
    <div className="grid grid-cols-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-semibold"> Top Post</h1>
        <PostList fetchPost={fetchTopPost} />

      </div>
      <div>
        <TopicCreateForm />
      </div>

    </div>
  );
}
