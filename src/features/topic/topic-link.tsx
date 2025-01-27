import { Link } from "next-view-transitions";
import { Topic } from "@/features/topic/types";
import { createTopicSlug } from "@/features/topic/utilities";

type Props = {
  topic: Topic;
};

export function TopicLink({ topic }: Props) {
  const { name, count } = topic;
  const topicSlug = createTopicSlug(name);

  return (
    <Link key={name} href={`/topics/${topicSlug}`} className="group text-base">
      <span className="text-neutral-900">{name}</span>
      <sup className="text-neutral-500 transition-colors group-hover:text-blue-500">
        {count}
      </sup>
    </Link>
  );
}
