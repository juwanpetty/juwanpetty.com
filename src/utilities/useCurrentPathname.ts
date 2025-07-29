import { usePathname } from "next/navigation";

export function useCurrentPathname({
  href,
  exact = false,
}: {
  href?: string;
  exact?: boolean;
}): boolean {
  const pathname = usePathname();

  if (!href) return false;

  if (exact) {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(href);
}
