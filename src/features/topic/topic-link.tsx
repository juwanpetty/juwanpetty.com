import Link from "next/link";
import { Topic } from "@/features/topic/types";

type Props = {
  topic: Topic;
};

export function TopicLink({ topic }: Props) {
  const { name, count } = topic;

  return (
    // TODO: Implement the TopicLink href
    <Link key={name} href="/" className="group text-base">
      <span className="text-neutral-900">{name}</span>
      <sup className="text-neutral-500 transition-colors group-hover:text-blue-500">
        {count}
      </sup>
    </Link>
  );
}
