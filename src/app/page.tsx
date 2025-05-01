import { Breadcrumb } from "@/components/breadcrumb";
import { Icons } from "@/components/icons";

export default async function Home() {
  const breadcrumbLinks = [
    { name: "First", href: "#" },
    { name: "Second", href: "#" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="h-14 border border-b border-neutral-100">
        <div className="mx-auto flex h-full w-full items-center justify-start px-4">
          <a href="#" className="mr-4 flex items-center gap-2">
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
          </a>
        </div>
      </header>
      <main className="grow">
        <div className="relative mx-auto grid max-w-screen-xl grid-cols-[260px_1fr] gap-10 px-4 py-10 md:py-10">
          <aside className="sticky top-0 flex flex-1 flex-col overflow-x-visible overflow-y-auto p-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 px-2">
                <a href="#" className="text-sm font-medium text-neutral-900">
                  Home
                </a>
                <a href="#" className="text-sm text-neutral-500">
                  Writing
                </a>
              </div>

              <div>
                <button
                  type="button"
                  className="flex h-8 w-full cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-2 hover:bg-neutral-100"
                >
                  <Icons.search className="h-5 w-5 text-neutral-500" />
                  <span className="text-sm text-neutral-500">Search</span>
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="rounded-md px-2 py-1 text-sm font-medium">
                  Installation
                </h4>
                <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
                  <a
                    className="group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-neutral-500 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-neutral-100"
                    target=""
                    rel=""
                    href="#"
                  >
                    Next.js
                  </a>
                  <a
                    className="group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-neutral-500 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-neutral-100"
                    target=""
                    rel=""
                    href="#"
                  >
                    Vite
                  </a>
                  <a
                    className="group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-neutral-500 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-neutral-100"
                    target=""
                    rel=""
                    href="#"
                  >
                    Laravel
                  </a>
                  <a
                    className="group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-neutral-500 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-neutral-100"
                    target=""
                    rel=""
                    href="#"
                  >
                    React Router
                  </a>
                  <a
                    className="group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-neutral-500 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-neutral-100"
                    target=""
                    rel=""
                    href="#"
                  >
                    Remix
                  </a>
                  <a
                    className="group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-neutral-500 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-neutral-100"
                    target=""
                    rel=""
                    href="#"
                  >
                    Astro
                  </a>
                  <a
                    className="group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-neutral-500 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-neutral-100"
                    target=""
                    rel=""
                    href="#"
                  >
                    Tanstack Start
                  </a>
                  <a
                    className="group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-neutral-500 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-neutral-100"
                    target=""
                    rel=""
                    href="#"
                  >
                    Tanstack Router
                  </a>
                  <a
                    className="group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-neutral-500 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-neutral-100"
                    target=""
                    rel=""
                    href="#"
                  >
                    Manual
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="rounded-md px-2 py-1 text-sm font-medium">
                  Contact
                </h4>
                <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
                  <a
                    className="group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-neutral-500 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg hover:bg-neutral-100"
                    target=""
                    rel=""
                    href="#"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="py-6">
            <Breadcrumb links={breadcrumbLinks} />

            <div className="prose prose-neutral">
              <p>Welcome to my corner of the internet.</p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur.
              </p>
            </div>

            <div className="mt-18 flex flex-col gap-12">
              <a
                href="#"
                className="flex h-9 w-max cursor-pointer items-center justify-center gap-2 rounded-[50px] bg-neutral-900 px-4 text-sm"
              >
                <span className="text-neutral-100">Read my posts</span>
                <Icons.chevronRight className="h-3 w-3 text-neutral-500" />
              </a>
              <div className="space-y-2">
                <Icons.signature className="w-20" />
                <span className="text-xs text-neutral-500">Juwan Petty</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
