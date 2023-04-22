import React from "react";

const News = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 5.55556H14.4444V17.1111H18V5.55556Z" fill="#C8C8C8" />
      <path
        d="M16.2222 17.1111H3.77778C3.30628 17.1111 2.8541 16.9238 2.5207 16.5904C2.1873 16.257 2 15.8048 2 15.3333V4.66667C2 4.19517 2.1873 3.74299 2.5207 3.40959C2.8541 3.07619 3.30628 2.88889 3.77778 2.88889H12.6667C13.1382 2.88889 13.5903 3.07619 13.9237 3.40959C14.2571 3.74299 14.4444 4.19517 14.4444 4.66667V5.55556M16.2222 17.1111C15.7507 17.1111 15.2985 16.9238 14.9651 16.5904C14.6317 16.257 14.4444 15.8048 14.4444 15.3333V5.55556M16.2222 17.1111C16.6937 17.1111 17.1459 16.9238 17.4793 16.5904C17.8127 16.257 18 15.8048 18 15.3333V7.33333C18 6.86184 17.8127 6.40965 17.4793 6.07625C17.1459 5.74286 16.6937 5.55556 16.2222 5.55556H14.4444M10.8889 2.88889H7.33333M5.55556 13.5556H10.8889M5.55556 6.44444H10.8889V10H5.55556V6.44444Z"
        stroke="#666666"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default News;
