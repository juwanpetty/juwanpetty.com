import { JSX, SVGProps } from "react";

export function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  const currentYear = getCurrentYear();

  return (
    <footer className="border-t border-stone-100">
      <div className="mx-auto max-w-7xl pb-3 pt-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center gap-x-6 md:order-2">
          {[
            {
              name: "Bluesky",
              href: "#",
              icon: (
                props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
              ) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  {...props}
                >
                  <g fill="currentColor">
                    <path d="M23.931,5.298c-3.21,2.418-6.663,7.32-7.931,9.951-1.267-2.631-4.721-7.533-7.931-9.951-2.316-1.744-6.069-3.094-6.069,1.201,0,.857,.49,7.206,.778,8.237,.999,3.583,4.641,4.497,7.881,3.944-5.663,.967-7.103,4.169-3.992,7.372,5.908,6.083,8.492-1.526,9.154-3.476,.123-.36,.179-.527,.179-.379,0-.148,.057,.019,.179,.379,.662,1.949,3.245,9.558,9.154,3.476,3.111-3.203,1.671-6.405-3.992-7.372,3.24,.553,6.882-.361,7.881-3.944,.288-1.031,.778-7.38,.778-8.237,0-4.295-3.753-2.945-6.069-1.201Z" />
                  </g>
                </svg>
              ),
            },
            {
              name: "GitHub",
              href: "#",
              icon: (
                props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
              ) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  {...props}
                >
                  <g fill="currentColor">
                    <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z" />
                  </g>
                </svg>
              ),
            },
            {
              name: "YouTube",
              href: "#",
              icon: (
                props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
              ) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  {...props}
                >
                  <g fill="currentColor">
                    <path d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z" />
                  </g>
                </svg>
              ),
            },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-stone-500 hover:text-stone-800"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-stone-500 md:order-1 md:mt-0">
          &copy; {currentYear} Acme, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
