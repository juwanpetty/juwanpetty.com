import Link from "next/link";
import { NavigationItem } from "@/shared/components/navigation-item";
import { MobileNavigation } from "@/shared/components/mobile-navigation";

const NAVIGATION_ITEMS = [
  { name: "Explore", href: "/" },
  { name: "Writing", href: "/blog" },
  { name: "Projects", href: "/projects" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-neutral-200 bg-white">
      <div className="relative mx-auto flex h-14 w-full max-w-screen-xl items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="h-6 w-6 text-blue-400"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                  data-stroke="none"
                  stroke="none"
                />
                <path d="M4.987 2.96099C5.765 2.44299 6.649 2.07099 7.599 1.88599" />
                <path d="M1.879 7.631C2.064 6.663 2.441 5.764 2.97 4.974" />
                <path d="M4.987 15.039C5.765 15.557 6.649 15.929 7.599 16.114" />
                <path d="M1.879 10.369C2.064 11.337 2.441 12.236 2.97 13.026" />
                <path d="M10.401 1.88599C11.351 2.07099 12.235 2.44299 13.013 2.96099" />
                <path d="M15.03 4.974C15.559 5.764 15.936 6.663 16.121 7.631" />
                <path d="M10.401 16.114C11.351 15.929 12.235 15.557 13.013 15.039" />
                <path d="M15.03 13.026C15.559 12.236 15.936 11.337 16.121 10.369" />
              </g>
            </svg>
            <span className="hidden font-bold lg:inline-block">Acme</span>
          </Link>

          <nav className="flex items-center gap-4 text-sm xl:gap-6">
            {NAVIGATION_ITEMS.map((item) => (
              <NavigationItem key={item.name} href={item.href}>
                {item.name}
              </NavigationItem>
            ))}
          </nav>
        </div>

        <div className="flex w-full items-center space-x-2 md:hidden">
          <MobileNavigation />

          <Link className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="h-6 w-6 text-blue-400"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
                  fill="currentColor"
                  fillOpacity="0.3"
                  data-stroke="none"
                  stroke="none"
                />
                <path d="M4.987 2.96099C5.765 2.44299 6.649 2.07099 7.599 1.88599" />
                <path d="M1.879 7.631C2.064 6.663 2.441 5.764 2.97 4.974" />
                <path d="M4.987 15.039C5.765 15.557 6.649 15.929 7.599 16.114" />
                <path d="M1.879 10.369C2.064 11.337 2.441 12.236 2.97 13.026" />
                <path d="M10.401 1.88599C11.351 2.07099 12.235 2.44299 13.013 2.96099" />
                <path d="M15.03 4.974C15.559 5.764 15.936 6.663 16.121 7.631" />
                <path d="M10.401 16.114C11.351 15.929 12.235 15.557 13.013 15.039" />
                <path d="M15.03 13.026C15.559 12.236 15.936 11.337 16.121 10.369" />
              </g>
            </svg>
            <span className="sr-only">Acme</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
