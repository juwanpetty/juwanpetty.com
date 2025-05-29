import { PageSection, SectionHeader } from "@/components/page-section";
import { PostCard } from "@/components/post-card";
import { PostMetadata } from "@/utilities/mdx-utils";

interface RelatedPostsProps {
  posts: PostMetadata[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <PageSection>
      <SectionHeader title="Latest writings" icon="penWriting2" />
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </div>
    </PageSection>
  );
}
