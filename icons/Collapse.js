import React from "react";

const Collapse = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.33333 3.33333H2.5V16.6667H8.33333V3.33333Z" fill="#E0E0E0" />
      <path
        d="M15.8333 16.6667H4.16667C3.72464 16.6667 3.30072 16.4911 2.98816 16.1785C2.67559 15.8659 2.5 15.442 2.5 15V5C2.5 4.55797 2.67559 4.13405 2.98816 3.82149C3.30072 3.50893 3.72464 3.33333 4.16667 3.33333H15.8333C16.2754 3.33333 16.6993 3.50893 17.0118 3.82149C17.3244 4.13405 17.5 4.55797 17.5 5V15C17.5 15.442 17.3244 15.8659 17.0118 16.1785C16.6993 16.4911 16.2754 16.6667 15.8333 16.6667Z"
        stroke="#666666"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 11.6667L12.0833 10L13.75 8.33333"
        stroke="#666666"
        strokeWidth="1.39167"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33333 3.33333V16.6667"
        stroke="#666666"
        strokeWidth="1.66667"
      />
    </svg>
  );
};

export default Collapse;
