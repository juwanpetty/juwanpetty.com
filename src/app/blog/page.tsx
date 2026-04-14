import { Page } from "@/components/page";
import { PostsListByYear } from "@/components/posts-list-by-year";

export default function BlogIndex() {
  return (
    <Page.Root>
      <div className="space-y-24">
        <Page.Header className="space-y-3">
          <Page.Title>Blog</Page.Title>
          <Page.Description className="space-y-4">
            <p>
              I spend a lot of time in my head. This is where some of it lands —
              notes, ideas, and thoughts I cultivate over time.
            </p>
          </Page.Description>
        </Page.Header>

        <Page.Content className="space-y-16">
          <PostsListByYear />
        </Page.Content>
      </div>
    </Page.Root>
  );
}

{
  /* <Page.Content>
  <Section.Root>
    <Section.Content>
      <div className="flex flex-col gap-15 lg:gap-11.25">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="aspect-video min-w-75 rounded-lg border border-black/10 bg-neutral-100 lg:min-w-100 dark:border-white/10" />

          <div className="flex flex-col gap-1 lg:gap-2">
            <h3 className="text-base font-[550]">
              How to choose the right website template
            </h3>

            <p className="text-muted-foreground text-base">
              Make informed decisions when selecting website templates for your
              project
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="aspect-video min-w-75 rounded-lg border border-black/10 bg-neutral-100 lg:min-w-100 dark:border-white/10" />

          <div className="flex flex-col gap-1 lg:gap-2">
            <h3 className="text-base font-[550]">Best UI Kits for Startups</h3>

            <p className="text-muted-foreground text-base">
              Discover UI kits that help startups build professional interfaces
              quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </Section.Content>
  </Section.Root>
</Page.Content>; */
}
