import { TopicLink } from "@/features/topic/topic-link";

type Props = {
  topics: {
    name: string;
    count: number;
  }[];
};

export function TopicList({ topics }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <TopicLink key={topic.name} topic={topic} />
      ))}
    </div>
  );
}
