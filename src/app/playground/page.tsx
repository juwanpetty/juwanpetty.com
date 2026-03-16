import { Icon } from "@/components/icon";
import Link from "next/link";
import { ComponentProps } from "react";

export default function PlaygroundIndex() {
  return (
    <div>
      <div className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex size-8 items-center justify-center rounded-sm text-neutral-700 hover:bg-neutral-200"
          >
            <LogoIcon />
            <span className="sr-only">Home</span>
          </Link>
          <div className="text-sm font-medium text-neutral-700">
            <NavItem href="/">Blog</NavItem>
            <NavItem href="/">Videos</NavItem>
            <NavItem href="/">Store</NavItem>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-8 items-center gap-1 rounded-sm px-2.5 text-sm text-neutral-700">
              <Icon name="search" className="size-4" />
              <div className="flex h-6 items-center gap-0.5 rounded-sm bg-neutral-200 px-1.5 text-neutral-700">
                <Icon name="command" className="size-4" />
                <span className="text-base/5 font-[450]">K</span>
              </div>
            </button>
            <button className="flex size-8 items-center justify-center rounded-sm">
              <Icon name="ellipsis" className="text-neutral-700" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* <div className="text-sm font-medium text-neutral-700">
            <NavItem href="/">About</NavItem>
          </div>
          <div className="h-4 w-px shrink-0 bg-neutral-200" /> */}
          <button className="flex size-8 items-center justify-center rounded-sm">
            <Icon name="cart" className="text-neutral-700" />
          </button>
          {/* <div className="h-4 w-px shrink-0 bg-neutral-200" />
          <button className="flex size-8 items-center justify-center rounded-sm">
            <Icon name="github" />
          </button> */}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[40rem] min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
        <div className="flex items-center justify-between">
          <button className="text-muted-foreground flex h-8 items-center gap-1 rounded-sm text-sm font-medium">
            <Icon name="arrow-left" />
            <span>Blog</span>
          </button>

          {/* <button>
            <Icon name="ellipsis" />
          </button> */}
        </div>

        <div className="prose prose-neutral">
          <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight text-balance text-neutral-800">
            React Wheel Picker joins Vercel Open Source Program
          </h1>

          <div>
            <p>
              I&apos;m thrilled to share that{" "}
              <a
                href="https://react-wheel-picker.chanhdai.com/?utm_source=chanhdai.com"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                React Wheel Picker
              </a>{" "}
              has been selected to join the{" "}
              <a
                href="https://vercel.com/blog/summer-2025-oss-program?utm_source=chanhdai.com#react-wheel-picker"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                ▲Vercel OSS Program
              </a>{" "}
              summer 2025 cohort.
            </p>

            <p>
              React Wheel Picker is a lightweight, customizable, and
              touch-friendly picker component for React — built to deliver a
              smooth, native-like scrolling experience across modern browsers.
              It started as a side project, and it&apos;s been amazing to see it
              grow with the help of open source contributors and feedback from
              users.
            </p>

            <p>
              Being part of Vercel OSS Program means the project will receive
              $300/month in infrastructure credits for the next 12 months, along
              with support from the developer community. I&apos;m incredibly
              grateful for Vercel&apos;s support — it&apos;s a big motivation to
              keep improving the project and pushing it forward.
            </p>

            <p>
              If you&apos;re curious, feel free to explore the demo or dive into
              the code:
            </p>

            <ul>
              <li>
                Live Demo:{" "}
                <a
                  href="https://react-wheel-picker.chanhdai.com/?utm_source=chanhdai.com"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://react-wheel-picker.chanhdai.com
                </a>
              </li>
              <li>
                GitHub Repository:{" "}
                <a
                  href="https://github.com/ncdai/react-wheel-picker?utm_source=chanhdai.com"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://github.com/ncdai/react-wheel-picker
                </a>
              </li>
            </ul>
          </div>

          {/* <p>
            We are excited to announce that React Wheel Picker has joined the
            Vercel Open Source Program! This program provides support and
            resources to open source projects that are built on Vercel, and we
            are thrilled to be a part of it.
          </p> */}
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
    <Link
      href={href}
      className="inline-flex h-8 items-center rounded-sm px-2.5"
      {...props}
    >
      {children}
    </Link>
  );
}
