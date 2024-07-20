import Link from "next/link";

type NavigationItem = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        color="currentColor"
        fill="none"
        className="size-5 text-neutral-500"
      >
        <path
          d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M2.35157 13.2135C1.99855 10.9162 1.82204 9.76763 2.25635 8.74938C2.69065 7.73112 3.65421 7.03443 5.58132 5.64106L7.02117 4.6C9.41847 2.86667 10.6171 2 12.0002 2C13.3832 2 14.5819 2.86667 16.9792 4.6L18.419 5.64106C20.3462 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6488 13.2135L21.3478 15.1724C20.8473 18.4289 20.5971 20.0572 19.4292 21.0286C18.2613 22 16.5538 22 13.139 22H10.8614C7.44652 22 5.73909 22 4.57118 21.0286C3.40327 20.0572 3.15305 18.4289 2.65261 15.1724L2.35157 13.2135Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Writing",
    href: "/writing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        color="currentColor"
        fill="none"
        className="size-5 text-neutral-500"
      >
        <path
          d="M5.07579 17C4.08939 4.54502 12.9123 1.0121 19.9734 2.22417C20.2585 6.35185 18.2389 7.89748 14.3926 8.61125C15.1353 9.38731 16.4477 10.3639 16.3061 11.5847C16.2054 12.4534 15.6154 12.8797 14.4355 13.7322C11.8497 15.6004 8.85421 16.7785 5.07579 17Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 22C4 15.5 7.84848 12.1818 10.5 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const explore: NavigationItem[] = [
  {
    name: "Reading",
    href: "/reading",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        color="currentColor"
        fill="none"
        className="size-5 text-neutral-500"
      >
        <path
          d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 7L9 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11L9 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Bookmarks",
    href: "/bookmarks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        color="currentColor"
        fill="none"
        className="size-5 text-neutral-500"
      >
        <path
          d="M9.5 14.5L14.5 9.49995"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16.8463 14.6095L19.4558 12C21.5147 9.94108 21.5147 6.60298 19.4558 4.54411C17.397 2.48524 14.0589 2.48524 12 4.54411L9.39045 7.15366M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.3969 2.48528 14.0588 4.54416 12L7.1537 9.39041"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Workspace",
    href: "/workspace",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        color="currentColor"
        fill="none"
        className="size-5 text-neutral-500"
      >
        <path
          d="M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11 15H13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 22H17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const projects: NavigationItem[] = [
  {
    name: "GitHub Icons",
    href: "https://github.com/juwanpetty/github-icons",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        color="currentColor"
        fill="none"
        className="size-5 text-neutral-500"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Scheduled Tabs",
    href: "https://github.com/juwanpetty/scheduled-tabs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        color="currentColor"
        fill="none"
        className="size-5 text-neutral-500"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const social: NavigationItem[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/juwanpetty",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="size-5 text-neutral-500"
      >
        <g fill="currentColor">
          <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0" />
        </g>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/juwanpetty",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="size-5 text-neutral-500"
      >
        <g fill="currentColor">
          <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z" />
        </g>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/juwanpetty",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="size-5 text-neutral-500"
      >
        <g fill="currentColor">
          <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z" />
        </g>
      </svg>
    ),
  },
];

export function Sidebar() {
  return (
    <div>
      <nav className="fixed left-0 top-0 hidden h-dvh w-72 flex-col gap-5 bg-neutral-50 py-4 md:flex">
        <section className="flex flex-col gap-4 px-4">
          <Link href="/">
            <svg
              width="203"
              height="48"
              viewBox="0 0 203 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-auto"
            >
              <g filter="url(#filter0_iii_129_315)">
                <g clipPath="url(#clip0_129_315)">
                  <rect width="48" height="48" rx="12" fill="#0C111D" />
                  <rect
                    width="48"
                    height="48"
                    fill="url(#paint0_linear_129_315)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 24C17.4411 24 24 17.4411 24 6C24 17.4411 30.5589 24 42 24C30.5589 24 24 30.5589 24 42C24 30.5589 17.4411 24 6 24Z"
                    fill="url(#paint1_linear_129_315)"
                  />
                </g>
                <rect
                  x="1"
                  y="1"
                  width="46"
                  height="46"
                  rx="11"
                  stroke="url(#paint2_linear_129_315)"
                  strokeWidth="2"
                />
              </g>
              <path
                d="M60 33L66.561 13.317H72.501L79.062 33H74.688L73.365 28.95H65.697L64.374 33H60ZM66.669 25.737H72.393L70.719 20.715L69.612 17.124H69.45L68.343 20.715L66.669 25.737Z"
                fill="#0C111D"
              />
              <path
                d="M86.3836 33.243C84.9436 33.243 83.6836 32.937 82.6036 32.325C81.5236 31.695 80.6866 30.822 80.0926 29.706C79.4986 28.572 79.2016 27.258 79.2016 25.764C79.2016 24.252 79.4986 22.938 80.0926 21.822C80.7046 20.688 81.5596 19.815 82.6576 19.203C83.7556 18.573 85.0426 18.258 86.5186 18.258C87.7606 18.258 88.8676 18.492 89.8396 18.96C90.8116 19.428 91.5766 20.076 92.1346 20.904C92.7106 21.732 93.0256 22.695 93.0796 23.793H89.1916C89.0656 23.037 88.7506 22.47 88.2466 22.092C87.7426 21.696 87.1306 21.498 86.4106 21.498C85.3666 21.498 84.5746 21.885 84.0346 22.659C83.4946 23.433 83.2246 24.468 83.2246 25.764C83.2246 27.186 83.5126 28.248 84.0886 28.95C84.6826 29.652 85.4476 30.003 86.3836 30.003C87.2296 30.003 87.8956 29.787 88.3816 29.355C88.8856 28.923 89.1736 28.356 89.2456 27.654H93.1066C93.0526 28.788 92.7286 29.778 92.1346 30.624C91.5586 31.452 90.7756 32.1 89.7856 32.568C88.7956 33.018 87.6616 33.243 86.3836 33.243Z"
                fill="#0C111D"
              />
              <path
                d="M95.0032 33V18.528H98.8372L98.9722 21.147H99.1342C99.4942 20.193 100.079 19.473 100.889 18.987C101.699 18.501 102.59 18.258 103.562 18.258C104.57 18.258 105.488 18.501 106.316 18.987C107.144 19.473 107.756 20.31 108.152 21.498H108.368C108.71 20.418 109.313 19.608 110.177 19.068C111.059 18.528 112.049 18.258 113.147 18.258C114.083 18.258 114.92 18.456 115.658 18.852C116.396 19.248 116.981 19.887 117.413 20.769C117.863 21.633 118.088 22.794 118.088 24.252V33H114.119V25.116C114.119 23.892 113.912 22.983 113.498 22.389C113.102 21.795 112.454 21.498 111.554 21.498C110.6 21.498 109.853 21.849 109.313 22.551C108.791 23.235 108.53 24.036 108.53 24.954V33H104.561V25.116C104.561 23.892 104.354 22.983 103.94 22.389C103.544 21.795 102.896 21.498 101.996 21.498C101.024 21.498 100.277 21.849 99.7552 22.551C99.2332 23.235 98.9722 24.036 98.9722 24.954V33H95.0032Z"
                fill="#0C111D"
              />
              <path
                d="M127.149 33.243C125.637 33.243 124.341 32.937 123.261 32.325C122.199 31.713 121.38 30.858 120.804 29.76C120.228 28.644 119.94 27.348 119.94 25.872C119.94 24.306 120.228 22.956 120.804 21.822C121.398 20.688 122.226 19.815 123.288 19.203C124.35 18.573 125.592 18.258 127.014 18.258C128.688 18.258 130.065 18.627 131.145 19.365C132.225 20.085 132.999 21.084 133.467 22.362C133.935 23.622 134.088 25.053 133.926 26.655H123.855C123.837 27.807 124.134 28.698 124.746 29.328C125.358 29.94 126.159 30.246 127.149 30.246C127.905 30.246 128.544 30.084 129.066 29.76C129.606 29.418 129.948 28.968 130.092 28.41H133.845C133.719 29.382 133.35 30.228 132.738 30.948C132.144 31.668 131.37 32.235 130.416 32.649C129.462 33.045 128.373 33.243 127.149 33.243ZM127.014 21.255C126.114 21.255 125.385 21.516 124.827 22.038C124.269 22.542 123.954 23.235 123.882 24.117H130.038C129.984 23.145 129.669 22.425 129.093 21.957C128.535 21.489 127.842 21.255 127.014 21.255Z"
                fill="#0C111D"
              />
              <path
                d="M150.313 33.243C148.351 33.243 146.623 32.847 145.129 32.055C143.653 31.263 142.501 30.111 141.673 28.599C140.845 27.087 140.431 25.269 140.431 23.145C140.431 21.021 140.845 19.212 141.673 17.718C142.501 16.206 143.653 15.054 145.129 14.262C146.623 13.47 148.351 13.074 150.313 13.074C152.005 13.074 153.508 13.371 154.822 13.965C156.136 14.541 157.198 15.36 158.008 16.422C158.818 17.466 159.313 18.69 159.493 20.094H155.227C154.993 19.086 154.435 18.267 153.553 17.637C152.689 16.989 151.609 16.665 150.313 16.665C148.621 16.665 147.271 17.205 146.263 18.285C145.273 19.365 144.778 20.985 144.778 23.145C144.778 25.323 145.273 26.952 146.263 28.032C147.271 29.112 148.621 29.652 150.313 29.652C151.573 29.652 152.653 29.337 153.553 28.707C154.453 28.077 155.011 27.24 155.227 26.196H159.493C159.331 27.6 158.836 28.833 158.008 29.895C157.18 30.957 156.1 31.785 154.768 32.379C153.454 32.955 151.969 33.243 150.313 33.243Z"
                fill="#0C111D"
              />
              <path
                d="M168.113 33.243C166.673 33.243 165.404 32.946 164.306 32.352C163.208 31.758 162.353 30.903 161.741 29.787C161.147 28.671 160.85 27.33 160.85 25.764C160.85 24.27 161.138 22.965 161.714 21.849C162.29 20.715 163.118 19.833 164.198 19.203C165.278 18.573 166.583 18.258 168.113 18.258C169.553 18.258 170.813 18.555 171.893 19.149C172.991 19.743 173.837 20.607 174.431 21.741C175.043 22.857 175.349 24.198 175.349 25.764C175.349 27.258 175.061 28.572 174.485 29.706C173.909 30.822 173.081 31.695 172.001 32.325C170.939 32.937 169.643 33.243 168.113 33.243ZM168.086 30.03C169.058 30.03 169.841 29.679 170.435 28.977C171.029 28.275 171.326 27.204 171.326 25.764C171.326 24.324 171.038 23.253 170.462 22.551C169.886 21.849 169.103 21.498 168.113 21.498C167.123 21.498 166.331 21.849 165.737 22.551C165.143 23.253 164.846 24.324 164.846 25.764C164.846 27.186 165.134 28.257 165.71 28.977C166.304 29.679 167.096 30.03 168.086 30.03Z"
                fill="#0C111D"
              />
              <path
                d="M177.337 33V18.528H180.928L181.09 20.85H181.225C181.549 19.914 182.062 19.266 182.764 18.906C183.484 18.528 184.303 18.339 185.221 18.339H186.031V22.065H185.14C183.808 22.065 182.845 22.362 182.251 22.956C181.657 23.532 181.342 24.36 181.306 25.44V33H177.337Z"
                fill="#0C111D"
              />
              <path
                d="M187.582 37.509V18.528H191.416L191.551 21.039H191.767C192.109 20.193 192.676 19.518 193.468 19.014C194.278 18.51 195.241 18.258 196.357 18.258C198.085 18.258 199.48 18.888 200.542 20.148C201.622 21.39 202.162 23.262 202.162 25.764C202.162 28.248 201.622 30.12 200.542 31.38C199.48 32.64 198.085 33.27 196.357 33.27C195.241 33.27 194.278 33.018 193.468 32.514C192.676 31.992 192.109 31.317 191.767 30.489H191.551V37.509H187.582ZM194.872 30.057C195.844 30.057 196.618 29.715 197.194 29.031C197.788 28.329 198.085 27.24 198.085 25.764C198.085 24.288 197.788 23.208 197.194 22.524C196.618 21.822 195.844 21.471 194.872 21.471C194.134 21.471 193.522 21.642 193.036 21.984C192.55 22.326 192.19 22.776 191.956 23.334C191.722 23.874 191.605 24.45 191.605 25.062V26.466C191.605 27.078 191.722 27.663 191.956 28.221C192.19 28.761 192.55 29.202 193.036 29.544C193.522 29.886 194.134 30.057 194.872 30.057Z"
                fill="#0C111D"
              />
              <defs>
                <filter
                  id="filter0_iii_129_315"
                  x="0"
                  y="-3"
                  width="48"
                  height="54"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-3" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_129_315"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_innerShadow_129_315"
                    result="effect2_innerShadow_129_315"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect3_innerShadow_129_315"
                  />
                  <feOffset />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.24 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_129_315"
                    result="effect3_innerShadow_129_315"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_129_315"
                  x1="24"
                  y1="5.96047e-07"
                  x2="26"
                  y2="48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_129_315"
                  x1="24"
                  y1="6"
                  x2="24"
                  y2="42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.8" />
                  <stop offset="1" stopColor="white" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_129_315"
                  x1="24"
                  y1="0"
                  x2="24"
                  y2="48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.12" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_129_315">
                  <rect width="48" height="48" rx="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="sr-only">Home</span>
          </Link>
          <button
            type="button"
            className="flex h-8 w-full items-center justify-center gap-1.5 rounded-[0.625rem] border border-solid border-neutral-200 bg-white px-2 shadow-sm hover:bg-neutral-50 active:bg-neutral-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              color="currentColor"
              fill="none"
              className="size-4 text-neutral-500"
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
            <span className="text-sm font-medium text-neutral-800">Search</span>
          </button>
        </section>
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            <section className="px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
                >
                  {item.icon}
                  <span className="text-sm font-medium text-neutral-800">
                    {item.name}
                  </span>
                </Link>
              ))}
            </section>
            <div>
              <span className="mb-2 inline-block pl-4 text-xs font-medium text-neutral-500">
                Explore
              </span>
              <section className="px-2">
                {explore.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
                  >
                    {item.icon}
                    <span className="text-sm font-medium text-neutral-800">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </section>
            </div>
            <div>
              <span className="mb-2 inline-block pl-4 text-xs font-medium text-neutral-500">
                Projects
              </span>
              <section className="px-2">
                {projects.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
                  >
                    {item.icon}
                    <span className="text-sm font-medium text-neutral-800">
                      {item.name}
                    </span>
                  </a>
                ))}
              </section>
            </div>
          </div>
          <section className="px-2">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
              >
                {item.icon}
                <span className="text-sm font-medium text-neutral-800">
                  {item.name}
                </span>
              </a>
            ))}
          </section>
        </div>
      </nav>
    </div>
  );
}
