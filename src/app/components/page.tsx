import { Icon } from "@/components/icon";
import Link from "next/link";
import { ComponentProps } from "react";

export default function PlaygroundIndex() {
  return (
    <div>
      <div className="fixed inset-x-0 top-0 z-10 border-b border-gray-950/5 bg-white dark:border-white/10">
        <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
          <div>
            <Link href="/" className="flex size-8 items-center justify-center">
              <LogoIcon />
            </Link>
          </div>
          <div className="flex items-center gap-6 max-md:hidden">
            <button className="flex h-8 items-center gap-1.5 rounded-sm px-1 text-sm text-neutral-700">
              <Icon name="search" className="size-3.5" />
              <div className="flex h-6 items-center gap-0.5 rounded-sm bg-neutral-100 px-1.5 text-neutral-700">
                <Icon name="command" className="size-3.5" />
                <span className="text-sm/5 font-[450]">K</span>
              </div>
            </button>
            <NavItem href="/">Crafts</NavItem>
            <NavItem href="/">Components</NavItem>
            <button className="flex size-8 items-center justify-center rounded-sm text-neutral-700">
              <Icon name="github" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-2xl pt-14.25">
        <div className="px-4 pt-10 pb-24 sm:px-6 xl:pr-0">
          <div className="mb-10 flex items-center justify-between">
            <button className="flex h-7 items-center gap-1.5 rounded-sm text-sm text-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <g
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path d="M2.25,6.25H12c2.071,0,3.75,1.679,3.75,3.75h0c0,2.071-1.679,3.75-3.75,3.75h-3.75"></path>
                  <polyline points="5.75 9.75 2.25 6.25 5.75 2.75"></polyline>
                </g>
              </svg>
              <span>Components</span>
            </button>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
              Button
            </h1>

            <p className="text-base/7 text-pretty text-neutral-500">
              Displays a button or a component that looks like a button.
            </p>
          </div>

          <div className="prose mt-10">
            <div className="aspect-video w-full rounded-lg border border-neutral-200 bg-neutral-100 p-1">
              <div className="h-full w-full rounded-sm bg-white" />
            </div>
          </div>

          <footer className="mt-16 text-sm leading-6">
            <div className="flex items-center justify-between gap-2 text-neutral-700">
              <a
                className="group flex items-center gap-2"
                href="/docs/installation"
              >
                <Icon name="arrow-left" className="size-4" />
                <span>Installation</span>
              </a>
              <a
                className="group flex items-center gap-2"
                href="/docs/compatibility"
              >
                <span>Compatibility</span>
                <Icon name="arrow-right" className="size-4" />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

function LogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="size-5"
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></line>
    </svg>
  );
}

function NavItem({ href, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link href={href} className="text-sm/6 text-neutral-700" {...props}>
      {children}
    </Link>
  );
}
