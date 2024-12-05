import { PageLayout } from "@/shared/components/page-layout";

export default function Playground() {
  return (
    <PageLayout>
      <main>
        <h1 className="text-4xl font-semibold">Title</h1>

        <div className="text-base font-normal leading-7">
          <p className="mt-4">
            With the goal to merge play with work, I decided to add subtle
            animations to complete the vibe.
          </p>
          <p className="mt-4">
            Primary is a fun playful theme, so Popping/Sliding Up and Sliding
            Down animations have been added to specific components in the
            Obsidian interface.
          </p>
          <p className="mt-4">
            You’ll find these animations when hovering sidebar tabs, when
            opening the Command Palette or the Quick Switcher, the Suggestion
            popover and more!
          </p>
        </div>
      </main>

      <aside>
        <h3 className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="size-4 w-4"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <line x1="10.25" y1="6.25" x2="12.25" y2="6.25" />
              <line x1="5.75" y1="9.25" x2="12.25" y2="9.25" />
              <line x1="5.75" y1="12.25" x2="12.25" y2="12.25" />
              <rect
                x="1.75"
                y="2.75"
                width="14.5"
                height="12.5"
                rx="2"
                ry="2"
                transform="translate(18 0) rotate(90)"
              />
              <rect x="5.75" y="4.75" width="1.5" height="1.5" fill="#212121" />
            </g>
          </svg>
          <span className="text-sm font-medium">On this page</span>
        </h3>
      </aside>
    </PageLayout>
  );
}
