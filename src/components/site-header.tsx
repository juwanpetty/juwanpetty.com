import { homePath } from "@/paths";
import { Link } from "next-view-transitions";

export function SiteHeader() {
  return (
    <header className="mb-32 flex flex-col items-start text-base">
      <Link className="font-medium" href={homePath()}>
        Juwan Petty
      </Link>
      <span className="text-neutral-400">Frontend &amp; Design Engineer</span>
    </header>
  );
}
