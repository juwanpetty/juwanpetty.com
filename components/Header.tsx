"use client";

import { useEffect, useRef, useState } from "react";

export function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  function toggleShowSearch() {
    setShowSearch((prev) => !prev);
  }

  return (
    <header className="sticky left-0 top-0 z-10 flex h-[var(--header-height)] w-full items-center justify-between gap-6 border-b border-solid border-neutral-200 bg-white px-4 md:hidden">
      {!showSearch ? (
        <>
          <button
            type="button"
            className="flex h-10 items-center justify-center gap-1.5 rounded-xl bg-neutral-100 px-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              color="currentColor"
              fill="none"
              className="size-5 text-neutral-500"
            >
              <path
                d="M4 8.5L20 8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 15.5L20 15.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium text-neutral-800">Menu</span>
          </button>

          <button
            type="button"
            onClick={toggleShowSearch}
            className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-solid border-neutral-200 bg-white px-3 shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              color="currentColor"
              fill="none"
              className="size-5 text-neutral-500"
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </>
      ) : null}

      {showSearch ? (
        <div className="flex w-full items-center">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            ref={inputRef}
            className="h-10 grow rounded-l-xl rounded-r-none border border-solid border-neutral-200 bg-white px-3 text-base shadow-sm md:text-sm"
          />
          <button
            type="button"
            onClick={toggleShowSearch}
            className="h-10 rounded-br-xl rounded-tr-xl border border-solid border-neutral-200 border-l-transparent px-[0.625rem] text-sm font-medium text-neutral-800 shadow-sm"
          >
            Cancel
          </button>
        </div>
      ) : null}
    </header>
  );
}
