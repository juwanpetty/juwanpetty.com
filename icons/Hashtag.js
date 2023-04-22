import React from "react";

const Hashtag = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.83333 16.6667L9.16666 3.33333M10.8333 16.6667L14.1667 3.33333M4.99999 7.5H16.6667M3.33333 12.5H15"
        stroke="#666666"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Hashtag;
