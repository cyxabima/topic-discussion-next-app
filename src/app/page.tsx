import { TopicCreateForm } from "@/components/topic/topic-create-form";

export default function Home() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <h1 className="text-xl font-semibold"> Home Page</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>

    </div>
  );
}
