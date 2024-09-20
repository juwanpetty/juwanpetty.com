import { BottomNavigation } from "@components/BottomNavigation";
import { TopNavigation } from "@components/TopNavigation";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <div>
      <TopNavigation />
      <div className="min-h-dvh bg-white pb-[var(--header-height)] dark:bg-neutral-900 sm:pb-0 sm:pt-[var(--bottom-nav-height)]">
        {children}
      </div>
      <BottomNavigation />
    </div>
  );
}
