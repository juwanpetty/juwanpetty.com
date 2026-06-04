"use client";

import { Fragment } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NAV_ITEMS: {
  label: string;
  href: string;
}[] = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Notes",
    href: "/notes",
  },
];

export function SiteHeader() {
  const pathName = usePathname();

  function isCurrent(path: string, href: string) {
    if (href === "/" && path === "/") return true;

    return path.includes(`${href}`) && href !== "/";
  }

  return (
    <>
      <div className="fixed top-7.5 left-1/2 z-2 -translate-x-1/2">
        <nav className="flex items-center gap-1.5 rounded-full bg-[#656565] p-2 text-base font-medium tracking-tight backdrop-blur-lg">
          {NAV_ITEMS.map((item, index) => {
            const isLastItem = NAV_ITEMS.length === index + 1;

            return (
              <Fragment key={item.label}>
                <NavLink
                  label={item.label}
                  href={item.href}
                  isActive={isCurrent(pathName, item.href)}
                />
                {!isLastItem && (
                  <span className="pointer-events-none text-[#fff]/14">/</span>
                )}
              </Fragment>
            );
          })}
        </nav>
      </div>
      <ProgressiveBlur />
    </>
  );
}

type NavLinkProps = {
  label: string;
  href: string;
  isActive: boolean;
};

function NavLink({ label, href, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-3 py-1.5 text-[#fff]/25 transition-colors hover:bg-[#fff]/14 hover:text-[#fff]",
        isActive && "text-[#fff]"
      )}
    >
      {label}
    </Link>
  );
}

interface BlurLayerProps {
  blur: number;
  maskStart: number;
  maskEnd: number;
  zIndex: number;
}

function BlurLayer({ blur, maskStart, maskEnd, zIndex }: BlurLayerProps) {
  return (
    <div
      className="absolute inset-0 h-full w-full rounded-none"
      style={{
        backdropFilter: `blur(${blur}px)`,
        maskImage: `linear-gradient(to top, rgba(0,0,0,0) ${maskStart}%, rgb(0,0,0) ${maskEnd}%)`,
        zIndex,
      }}
    />
  );
}

const LAYERS = [
  { blur: 33.3333, maskStart: 90, maskEnd: 100 },
  { blur: 26.3374, maskStart: 80, maskEnd: 100 },
  { blur: 20.1646, maskStart: 70, maskEnd: 90 },
  { blur: 14.8148, maskStart: 60, maskEnd: 80 },
  { blur: 10.2881, maskStart: 50, maskEnd: 70 },
  { blur: 6.58436, maskStart: 40, maskEnd: 60 },
  { blur: 3.7037, maskStart: 30, maskEnd: 50 },
  { blur: 1.64609, maskStart: 20, maskEnd: 40 },
  { blur: 0.411523, maskStart: 10, maskEnd: 30 },
  { blur: 0, maskStart: 0, maskEnd: 20 },
];

function ProgressiveBlur() {
  return (
    <div className="fixed top-0 right-0 left-0 isolate z-1 h-30">
      <div className="pointer-events-none relative h-full w-full">
        {LAYERS.map(({ blur, maskStart, maskEnd }, i) => (
          <BlurLayer
            key={i}
            blur={blur}
            maskStart={maskStart}
            maskEnd={maskEnd}
            zIndex={i + 1}
          />
        ))}
      </div>
    </div>
  );
}
