import Link from "next/link";

export function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 hidden h-dvh w-72 flex-col gap-5 bg-neutral-50 py-4 md:flex">
      <section className="flex flex-col gap-4 px-4">
        <Link href="/">
          <svg
            width="206"
            height="54"
            viewBox="0 0 206 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-auto"
          >
            <g filter="url(#filter0_ddiii_1202_5017)">
              <g clip-path="url(#clip0_1202_5017)">
                <rect x="3" width="48" height="48" rx="12" fill="#0C111D" />
                <rect
                  width="48"
                  height="48"
                  transform="translate(3)"
                  fill="url(#paint0_linear_1202_5017)"
                />
                <g filter="url(#filter1_d_1202_5017)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 24C20.4411 24 27 17.4411 27 6C27 17.4411 33.5589 24 45 24C33.5589 24 27 30.5589 27 42C27 30.5589 20.4411 24 9 24Z"
                    fill="url(#paint1_linear_1202_5017)"
                  />
                </g>
              </g>
              <rect
                x="4"
                y="1"
                width="46"
                height="46"
                rx="11"
                stroke="url(#paint2_linear_1202_5017)"
                stroke-width="2"
              />
            </g>
            <path
              d="M63 33L69.561 13.317H75.501L82.062 33H77.688L76.365 28.95H68.697L67.374 33H63ZM69.669 25.737H75.393L73.719 20.715L72.612 17.124H72.45L71.343 20.715L69.669 25.737Z"
              fill="#0C111D"
            />
            <path
              d="M89.3836 33.243C87.9436 33.243 86.6836 32.937 85.6036 32.325C84.5236 31.695 83.6866 30.822 83.0926 29.706C82.4986 28.572 82.2016 27.258 82.2016 25.764C82.2016 24.252 82.4986 22.938 83.0926 21.822C83.7046 20.688 84.5596 19.815 85.6576 19.203C86.7556 18.573 88.0426 18.258 89.5186 18.258C90.7606 18.258 91.8676 18.492 92.8396 18.96C93.8116 19.428 94.5766 20.076 95.1346 20.904C95.7106 21.732 96.0256 22.695 96.0796 23.793H92.1916C92.0656 23.037 91.7506 22.47 91.2466 22.092C90.7426 21.696 90.1306 21.498 89.4106 21.498C88.3666 21.498 87.5746 21.885 87.0346 22.659C86.4946 23.433 86.2246 24.468 86.2246 25.764C86.2246 27.186 86.5126 28.248 87.0886 28.95C87.6826 29.652 88.4476 30.003 89.3836 30.003C90.2296 30.003 90.8956 29.787 91.3816 29.355C91.8856 28.923 92.1736 28.356 92.2456 27.654H96.1066C96.0526 28.788 95.7286 29.778 95.1346 30.624C94.5586 31.452 93.7756 32.1 92.7856 32.568C91.7956 33.018 90.6616 33.243 89.3836 33.243Z"
              fill="#0C111D"
            />
            <path
              d="M98.0032 33V18.528H101.837L101.972 21.147H102.134C102.494 20.193 103.079 19.473 103.889 18.987C104.699 18.501 105.59 18.258 106.562 18.258C107.57 18.258 108.488 18.501 109.316 18.987C110.144 19.473 110.756 20.31 111.152 21.498H111.368C111.71 20.418 112.313 19.608 113.177 19.068C114.059 18.528 115.049 18.258 116.147 18.258C117.083 18.258 117.92 18.456 118.658 18.852C119.396 19.248 119.981 19.887 120.413 20.769C120.863 21.633 121.088 22.794 121.088 24.252V33H117.119V25.116C117.119 23.892 116.912 22.983 116.498 22.389C116.102 21.795 115.454 21.498 114.554 21.498C113.6 21.498 112.853 21.849 112.313 22.551C111.791 23.235 111.53 24.036 111.53 24.954V33H107.561V25.116C107.561 23.892 107.354 22.983 106.94 22.389C106.544 21.795 105.896 21.498 104.996 21.498C104.024 21.498 103.277 21.849 102.755 22.551C102.233 23.235 101.972 24.036 101.972 24.954V33H98.0032Z"
              fill="#0C111D"
            />
            <path
              d="M130.149 33.243C128.637 33.243 127.341 32.937 126.261 32.325C125.199 31.713 124.38 30.858 123.804 29.76C123.228 28.644 122.94 27.348 122.94 25.872C122.94 24.306 123.228 22.956 123.804 21.822C124.398 20.688 125.226 19.815 126.288 19.203C127.35 18.573 128.592 18.258 130.014 18.258C131.688 18.258 133.065 18.627 134.145 19.365C135.225 20.085 135.999 21.084 136.467 22.362C136.935 23.622 137.088 25.053 136.926 26.655H126.855C126.837 27.807 127.134 28.698 127.746 29.328C128.358 29.94 129.159 30.246 130.149 30.246C130.905 30.246 131.544 30.084 132.066 29.76C132.606 29.418 132.948 28.968 133.092 28.41H136.845C136.719 29.382 136.35 30.228 135.738 30.948C135.144 31.668 134.37 32.235 133.416 32.649C132.462 33.045 131.373 33.243 130.149 33.243ZM130.014 21.255C129.114 21.255 128.385 21.516 127.827 22.038C127.269 22.542 126.954 23.235 126.882 24.117H133.038C132.984 23.145 132.669 22.425 132.093 21.957C131.535 21.489 130.842 21.255 130.014 21.255Z"
              fill="#0C111D"
            />
            <path
              d="M153.313 33.243C151.351 33.243 149.623 32.847 148.129 32.055C146.653 31.263 145.501 30.111 144.673 28.599C143.845 27.087 143.431 25.269 143.431 23.145C143.431 21.021 143.845 19.212 144.673 17.718C145.501 16.206 146.653 15.054 148.129 14.262C149.623 13.47 151.351 13.074 153.313 13.074C155.005 13.074 156.508 13.371 157.822 13.965C159.136 14.541 160.198 15.36 161.008 16.422C161.818 17.466 162.313 18.69 162.493 20.094H158.227C157.993 19.086 157.435 18.267 156.553 17.637C155.689 16.989 154.609 16.665 153.313 16.665C151.621 16.665 150.271 17.205 149.263 18.285C148.273 19.365 147.778 20.985 147.778 23.145C147.778 25.323 148.273 26.952 149.263 28.032C150.271 29.112 151.621 29.652 153.313 29.652C154.573 29.652 155.653 29.337 156.553 28.707C157.453 28.077 158.011 27.24 158.227 26.196H162.493C162.331 27.6 161.836 28.833 161.008 29.895C160.18 30.957 159.1 31.785 157.768 32.379C156.454 32.955 154.969 33.243 153.313 33.243Z"
              fill="#0C111D"
            />
            <path
              d="M171.113 33.243C169.673 33.243 168.404 32.946 167.306 32.352C166.208 31.758 165.353 30.903 164.741 29.787C164.147 28.671 163.85 27.33 163.85 25.764C163.85 24.27 164.138 22.965 164.714 21.849C165.29 20.715 166.118 19.833 167.198 19.203C168.278 18.573 169.583 18.258 171.113 18.258C172.553 18.258 173.813 18.555 174.893 19.149C175.991 19.743 176.837 20.607 177.431 21.741C178.043 22.857 178.349 24.198 178.349 25.764C178.349 27.258 178.061 28.572 177.485 29.706C176.909 30.822 176.081 31.695 175.001 32.325C173.939 32.937 172.643 33.243 171.113 33.243ZM171.086 30.03C172.058 30.03 172.841 29.679 173.435 28.977C174.029 28.275 174.326 27.204 174.326 25.764C174.326 24.324 174.038 23.253 173.462 22.551C172.886 21.849 172.103 21.498 171.113 21.498C170.123 21.498 169.331 21.849 168.737 22.551C168.143 23.253 167.846 24.324 167.846 25.764C167.846 27.186 168.134 28.257 168.71 28.977C169.304 29.679 170.096 30.03 171.086 30.03Z"
              fill="#0C111D"
            />
            <path
              d="M180.337 33V18.528H183.928L184.09 20.85H184.225C184.549 19.914 185.062 19.266 185.764 18.906C186.484 18.528 187.303 18.339 188.221 18.339H189.031V22.065H188.14C186.808 22.065 185.845 22.362 185.251 22.956C184.657 23.532 184.342 24.36 184.306 25.44V33H180.337Z"
              fill="#0C111D"
            />
            <path
              d="M190.582 37.509V18.528H194.416L194.551 21.039H194.767C195.109 20.193 195.676 19.518 196.468 19.014C197.278 18.51 198.241 18.258 199.357 18.258C201.085 18.258 202.48 18.888 203.542 20.148C204.622 21.39 205.162 23.262 205.162 25.764C205.162 28.248 204.622 30.12 203.542 31.38C202.48 32.64 201.085 33.27 199.357 33.27C198.241 33.27 197.278 33.018 196.468 32.514C195.676 31.992 195.109 31.317 194.767 30.489H194.551V37.509H190.582ZM197.872 30.057C198.844 30.057 199.618 29.715 200.194 29.031C200.788 28.329 201.085 27.24 201.085 25.764C201.085 24.288 200.788 23.208 200.194 22.524C199.618 21.822 198.844 21.471 197.872 21.471C197.134 21.471 196.522 21.642 196.036 21.984C195.55 22.326 195.19 22.776 194.956 23.334C194.722 23.874 194.605 24.45 194.605 25.062V26.466C194.605 27.078 194.722 27.663 194.956 28.221C195.19 28.761 195.55 29.202 196.036 29.544C196.522 29.886 197.134 30.057 197.872 30.057Z"
              fill="#0C111D"
            />
            <defs>
              <filter
                id="filter0_ddiii_1202_5017"
                x="0"
                y="-3"
                width="54"
                height="57"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1202_5017"
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
                  result="effect2_dropShadow_1202_5017"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_1202_5017"
                  result="effect2_dropShadow_1202_5017"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1202_5017"
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
                  result="effect3_innerShadow_1202_5017"
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
                  in2="effect3_innerShadow_1202_5017"
                  result="effect4_innerShadow_1202_5017"
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
                  result="effect5_innerShadow_1202_5017"
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
                  in2="effect4_innerShadow_1202_5017"
                  result="effect5_innerShadow_1202_5017"
                />
              </filter>
              <filter
                id="filter1_d_1202_5017"
                x="6"
                y="5.25"
                width="42"
                height="42"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1.5"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_1202_5017"
                />
                <feOffset dy="2.25" />
                <feGaussianBlur stdDeviation="2.25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1202_5017"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1202_5017"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1202_5017"
                x1="24"
                y1="5.96047e-07"
                x2="26"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" stop-opacity="0.12" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1202_5017"
                x1="27"
                y1="6"
                x2="27"
                y2="42"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.8" />
                <stop offset="1" stop-color="white" stop-opacity="0.5" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1202_5017"
                x1="27"
                y1="0"
                x2="27"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.12" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <clipPath id="clip0_1202_5017">
                <rect x="3" width="48" height="48" rx="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
            <Link
              href="/"
              className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
            >
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
              <span className="text-sm font-medium text-neutral-800">Home</span>
            </Link>
            <Link
              href="/writing"
              className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
            >
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
              <span className="text-sm font-medium text-neutral-800">
                Writing
              </span>
            </Link>
            <Link
              href="/bookmarks"
              className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
            >
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
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16.8463 14.6095L19.4558 12C21.5147 9.94108 21.5147 6.60298 19.4558 4.54411C17.397 2.48524 14.0589 2.48524 12 4.54411L9.39045 7.15366M14.6095 16.8463L12 19.4558C9.94113 21.5147 6.60303 21.5147 4.54416 19.4558C2.48528 17.3969 2.48528 14.0588 4.54416 12L7.1537 9.39041"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span className="text-sm font-medium text-neutral-800">
                Bookmarks
              </span>
            </Link>
          </section>

          <div>
            <span className="mb-2 inline-block pl-4 text-xs font-medium text-neutral-500">
              Projects
            </span>
            <section className="px-2">
              <a
                target="_blank"
                href="https://github.com/juwanpetty/github-icons"
                className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
              >
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
                <span className="text-sm font-medium text-neutral-800">
                  GitHub Icons
                </span>
              </a>
              <a
                target="_blank"
                href="https://github.com/juwanpetty/scheduled-tabs"
                className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
              >
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
                <span className="text-sm font-medium text-neutral-800">
                  Scheduled Tabs
                </span>
              </a>
            </section>
          </div>
        </div>
        <section className="px-2">
          <a
            target="_blank"
            href="https://www.instagram.com/juwanpetty/"
            className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
          >
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
            <span className="text-sm font-medium text-neutral-800">
              Instagram
            </span>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/juwanpetty"
            className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
          >
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
            <span className="text-sm font-medium text-neutral-800">
              Twitter
            </span>
          </a>
          <a
            target="_blank"
            href="https://github.com/juwanpetty"
            className="flex h-8 items-center gap-2 rounded-[0.625rem] px-2 hover:bg-neutral-100"
          >
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
            <span className="text-sm font-medium text-neutral-800">GitHub</span>
          </a>
        </section>
      </div>
    </nav>
  );
}
