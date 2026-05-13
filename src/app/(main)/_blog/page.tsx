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
