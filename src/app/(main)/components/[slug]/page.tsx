import { Page } from "@/components/page";

export default function ComponentsDetail() {
  return (
    <Page.Root>
      <div className="space-y-24">
        <Page.Header className="space-y-3">
          <Page.Title>Component Name</Page.Title>
          <Page.Description>
            <p>Short description of the component.</p>
          </Page.Description>
        </Page.Header>

        <Page.Content className="space-y-16">Content</Page.Content>
      </div>
    </Page.Root>
  );
}
