import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  NoSymbolIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";

const navigation = [
  { name: "Projects", href: "/projects", current: true },
  { name: "Articles", href: "/articles", current: false },
  { name: "Store", href: "/store", current: false },
  { name: "About", href: "/about", current: false },
];

const social = [
  { name: "Twitter", href: "#" },
  { name: "YouTube", href: "#" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Disclosure as="div">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="relative z-10 flex px-2 md:px-0">
            <Link href="/" className="flex flex-shrink-0 items-center">
              <Image
                className="block h-8 w-auto"
                src="/logoipsum.svg"
                width={31}
                height={30}
                alt="Your Company"
                priority
              />
            </Link>
          </div>

          {/* Main nav */}
          <nav className="hidden md:absolute md:inset-0 md:space-x-4 md:z-10 md:flex md:items-center md:justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "underline underline-offset-8 decoration-2"
                    : null,
                  "rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:z-10 md:ml-4 md:flex md:items-center md:space-x-2">
            {social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md p-2 inline-flex items-center"
                aria-label={item.name}
              >
                <NoSymbolIcon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="z-10 flex items-center md:hidden">
            <Disclosure.Button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Open menu"
              onClick={toggleOpen}
            >
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>
        </div>

        <Disclosure.Panel
          as="nav"
          className={classNames(
            open ? "bg-neutral-900 bg-opacity-25" : "bg-transparent",
            "md:hidden fixed top-0 left-0 w-screen h-screen z-20 p-2"
          )}
        >
          <div className="bg-white rounded-lg w-full overflow-y-auto shadow-md py-3 flex flex-col gap-y-3">
            <div className="px-2">
              <div className="relative flex h-10 items-center justify-between">
                {/* Logo */}
                <div className="relative flex px-2 md:px-0">
                  <Link href="/" className="flex flex-shrink-0 items-center">
                    <Image
                      className="block h-8 w-auto"
                      src="/logoipsum.svg"
                      width={31}
                      height={30}
                      alt="Your Company"
                    />
                  </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center">
                  <Disclosure.Button
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-label="Close menu"
                    onClick={toggleOpen}
                  >
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-1 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? "" : "",
                    "block rounded-md py-2 px-3 items-center text-base font-medium text-gray-900"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="h-px w-full bg-neutral-200" />

            <div className="flex items-center justify-end space-x-2 px-2">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-md p-2 inline-flex items-center"
                  aria-label={item.name}
                >
                  <NoSymbolIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </Disclosure.Panel>
      </div>
    </Disclosure>
  );
};

export default Navigation;
