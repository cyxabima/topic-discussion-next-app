import PostList from "@/components/posts/post-list";
import TopicComponent from "@/components/topic-component";
import { TopicCreateForm } from "@/components/topic/topic-create-form";
import { fetchTopPost } from "@/lib/query/post";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 p-1 sm:p-4">
      <div className="col-span-full sm:col-span-3 p-4">
        <h1 className="text-xl font-semibold"> Top Post</h1>
        <PostList fetchPost={fetchTopPost} />

      </div>
      <div className="col-span-full sm:col-span-1 flex flex-col gap-4 sm:gap-0">
        <div className="flex px-4 justify-end sm:justify-start">
          <TopicCreateForm />
        </div>
        <TopicComponent />
      </div>

    </div>
  );
}
