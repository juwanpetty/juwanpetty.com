import { BottomNavigation } from "@components/BottomNavigation";
import { TopNavigation } from "@components/TopNavigation";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <div>
      <TopNavigation />
      <div className="min-h-[calc(100vh-var(--header-height))] pb-[var(--header-height)] sm:pb-0 sm:pt-[var(--bottom-nav-height)]">
        {children}
      </div>
      <BottomNavigation />
    </div>
  );
}
