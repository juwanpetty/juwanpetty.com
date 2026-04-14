import { PostItem } from "@/components/post-item";
import { Section } from "@/components/section";
import { getSortedPosts } from "@/lib/content";

export function PostsListByYear() {
  const posts = getSortedPosts();
  const postsByYear = groupPostsByYear(posts);

  const hasPosts = postsByYear.length > 0;

  if (hasPosts) {
    return postsByYear.map(({ year, posts }) => (
      <Section.Root key={year}>
        <Section.Header>
          <Section.Title>{year}</Section.Title>
        </Section.Header>

        <Section.Content>
          <div className="group/list flex flex-col justify-between">
            {posts.map((post) => (
              <PostItem key={post._meta.path} post={post} />
            ))}
          </div>
        </Section.Content>
      </Section.Root>
    ));
  }

  return (
    <div className="grid aspect-video place-items-center rounded-xl">
      <div className="mx-0 flex max-w-80 flex-col items-center gap-4">
        <EmptyStateIllustration />

        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base font-semibold">Posts incoming</h3>
          <p className="text-gray-11 text-center text-base/relaxed text-balance">
            I haven&apos;t written anything yet, check back soon for updates!
          </p>
        </div>
      </div>
    </div>
  );
}

function EmptyStateIllustration() {
  return (
    <div>
      <div className="relative h-24 w-52" aria-hidden="true">
        {/* Back card */}
        <div className="bg-muted/60 dark:bg-muted/30 border-border/50 absolute inset-x-6 top-0 h-6 rounded-t-lg border" />
        {/* Middle card */}
        <div className="bg-muted/80 dark:bg-muted/50 border-border/60 absolute inset-x-3 top-3 h-6 rounded-t-lg border" />
        {/* Front card */}
        <div className="bg-background border-border absolute inset-x-0 top-6 flex h-16 items-center gap-3 rounded-lg border px-4 shadow-sm">
          <div className="bg-muted size-8 shrink-0 rounded" />
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="bg-muted h-2.5 w-3/4 rounded" />
            <div className="bg-muted/60 h-2 w-1/2 rounded" />
          </div>
        </div>
        {/* Fade overlay */}
        <div className="from-background/0 via-background/60 to-background pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-b" />
      </div>
    </div>
  );
}

function groupPostsByYear<T extends { published: Date }>(posts: T[]) {
  const grouped = posts.reduce(
    (acc, post) => {
      const year = new Date(post.published).getFullYear();

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(post);
      return acc;
    },
    {} as Record<number, T[]>
  );

  return Object.entries(grouped)
    .map(([year, posts]) => ({
      year: Number(year),
      posts,
    }))
    .sort((a, b) => b.year - a.year);
}
