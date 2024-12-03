import { SidebarSection } from "@/shared/components/sidebar-section";
import { MAIN_SECONDARY_NAVIGATION } from "@/shared/constants";

export function Sidebar() {
  return (
    <nav className="sticky top-[calc(96px+1px)] hidden h-[calc(100vh-136px-1px)] md:flex md:shrink-0 md:flex-col">
      <div>
        <button
          type="button"
          className="flex h-8 w-full items-center justify-start gap-1.5 rounded-[0.625rem] border border-solid border-stone-200 bg-white px-2.5 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            color="currentColor"
            fill="none"
            className="size-4 text-stone-500"
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
          <span className="text-sm font-medium text-stone-500">
            Quick search...
          </span>
          <div className="ml-auto flex h-5 items-center rounded-md bg-stone-200 px-1.5 text-sm font-medium text-stone-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="size-3 w-3"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <rect x="6.75" y="6.75" width="4.5" height="4.5" />
                <path d="M4.75,2.75h0c1.104,0,2,.896,2,2v2h-2c-1.104,0-2-.896-2-2h0c0-1.104,.896-2,2-2Z" />
                <path
                  d="M13.25,2.75h0c1.104,0,2,.896,2,2v2h-2c-1.104,0-2-.896-2-2h0c0-1.104,.896-2,2-2Z"
                  transform="translate(18 -8.5) rotate(90)"
                />
                <path
                  d="M13.25,11.25h0c1.104,0,2,.896,2,2v2h-2c-1.104,0-2-.896-2-2h0c0-1.104,.896-2,2-2Z"
                  transform="translate(26.5 26.5) rotate(-180)"
                />
                <path
                  d="M4.75,11.25h0c1.104,0,2,.896,2,2v2h-2c-1.104,0-2-.896-2-2h0c0-1.104,.896-2,2-2Z"
                  transform="translate(-8.5 18) rotate(-90)"
                />
              </g>
            </svg>
            <span>K</span>
          </div>
        </button>
        <div className="h-8 bg-gradient-to-b from-white" />
      </div>

      {/* <div className="mb-10 space-y-1">
        <Link
          href="/"
          className="flex h-6 w-full items-center rounded-[0.625rem] px-2 text-sm font-medium text-stone-500 transition-colors"
        >
          <div className="mr-4 flex size-6 items-center justify-center rounded-md border border-stone-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="text-stone-600"
            >
              <g fill="currentColor">
                <path
                  opacity="0.4"
                  d="M1.88001 8.38091C1.83311 8.38091 1.7853 8.37651 1.7374 8.36771C1.3312 8.28961 1.0645 7.89651 1.1427 7.48981C1.3439 6.43661 1.7491 5.44981 2.3468 4.55721C2.5763 4.21341 3.0411 4.11969 3.3868 4.35069C3.7315 4.58119 3.8233 5.04701 3.5929 5.39121C3.1085 6.11631 2.7794 6.9171 2.6154 7.7721C2.547 8.1315 2.23261 8.38091 1.88001 8.38091Z"
                />
                <path
                  opacity="0.4"
                  d="M7.5997 16.8638C7.5518 16.8638 7.504 16.8594 7.4552 16.8501C6.422 16.6489 5.4513 16.2495 4.5714 15.6631C4.2267 15.4336 4.1339 14.9678 4.3634 14.6231C4.5929 14.2793 5.0568 14.1832 5.4034 14.4151C6.1173 14.8907 6.90439 15.2149 7.74229 15.3775C8.14849 15.4566 8.4142 15.8502 8.3351 16.2569C8.2658 16.6153 7.9513 16.8638 7.5997 16.8638Z"
                />
                <path
                  opacity="0.4"
                  d="M13.0118 3.7109C12.8692 3.7109 12.7247 3.67039 12.5968 3.58489C11.8829 3.10929 11.0958 2.78509 10.2579 2.62249C9.85172 2.54339 9.58602 2.1498 9.66512 1.7431C9.74422 1.3359 10.1387 1.07559 10.545 1.14979C11.5782 1.35099 12.5489 1.7504 13.4288 2.3368C13.7735 2.5663 13.8663 3.03209 13.6368 3.37679C13.4923 3.59359 13.255 3.7109 13.0118 3.7109Z"
                />
                <path
                  opacity="0.4"
                  d="M15.0294 13.7759C14.8868 13.7759 14.7413 13.7349 14.6134 13.6494C14.2687 13.4189 14.1769 12.9531 14.4073 12.6089C14.8917 11.8838 15.2208 11.083 15.3848 10.228C15.4619 9.8208 15.8555 9.55809 16.2627 9.63229C16.6689 9.71039 16.9356 10.1035 16.8574 10.5102C16.6562 11.5634 16.251 12.5502 15.6533 13.4428C15.5088 13.6591 15.2716 13.7759 15.0294 13.7759Z"
                />
                <path d="M4.9884 3.7109C4.7452 3.7109 4.5079 3.5937 4.3634 3.3769C4.1339 3.0322 4.2267 2.5664 4.5714 2.3369C5.4513 1.7505 6.422 1.3511 7.4552 1.1499C7.8614 1.0718 8.256 1.33539 8.3351 1.74319C8.4142 2.14989 8.14859 2.5435 7.74229 2.6226C6.90439 2.7852 6.1173 3.1094 5.4034 3.585C5.2755 3.6704 5.1309 3.7109 4.9884 3.7109Z" />
                <path d="M2.9708 13.7759C2.7286 13.7759 2.49131 13.6592 2.34681 13.4429C1.74911 12.5503 1.34391 11.5635 1.14271 10.5103C1.06461 10.1036 1.3312 9.7105 1.7374 9.6324C2.1427 9.5582 2.5372 9.8209 2.6153 10.2281C2.7794 11.0831 3.10851 11.8839 3.59281 12.609C3.82331 12.9532 3.73151 13.4191 3.38671 13.6495C3.25881 13.7349 3.1134 13.7759 2.9708 13.7759Z" />
                <path d="M16.1202 8.3809C15.7677 8.3809 15.4532 8.1314 15.3848 7.772C15.2207 6.917 14.8916 6.11619 14.4073 5.39109C14.1768 5.04689 14.2686 4.581 14.6134 4.3506C14.9581 4.1196 15.4239 4.21339 15.6534 4.55709C16.2511 5.44969 16.6563 6.4365 16.8575 7.4897C16.9356 7.8964 16.669 8.2895 16.2628 8.3676C16.2149 8.3764 16.1671 8.3809 16.1202 8.3809Z" />
                <path d="M10.4005 16.8638C10.0489 16.8638 9.73452 16.6153 9.66512 16.2569C9.58602 15.8502 9.85163 15.4566 10.2579 15.3775C11.0958 15.2149 11.8829 14.8907 12.5968 14.4151C12.9425 14.1832 13.4073 14.2794 13.6368 14.6231C13.8663 14.9678 13.7735 15.4336 13.4288 15.6631C12.5489 16.2495 11.5782 16.6489 10.545 16.8501C10.4962 16.8594 10.4483 16.8638 10.4005 16.8638Z" />
              </g>
            </svg>
          </div>
          <span>Documentation</span>
        </Link>
      </div> */}

      <div className="space-y-4">
        {MAIN_SECONDARY_NAVIGATION.map((section) => (
          <SidebarSection
            key={section.title}
            heading={section.title}
            links={section.links}
          />
        ))}
      </div>
    </nav>
  );
}
