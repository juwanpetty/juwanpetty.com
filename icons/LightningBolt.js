import React from "react";

const LightningBolt = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.8333 8.33333V2.5L3.33333 11.6667H9.16667V17.5L16.6667 8.33333H10.8333Z"
        fill="#E0E0E0"
      />
      <path
        d="M11.1556 8.22222C11.0083 8.22222 10.8889 8.10283 10.8889 7.95556V2.74704C10.8889 2.49643 10.5745 2.38422 10.4158 2.57818L3.24523 11.3422C3.10277 11.5164 3.22665 11.7778 3.45162 11.7778H8.84444C8.99172 11.7778 9.11111 11.8972 9.11111 12.0444V17.253C9.11111 17.5036 9.42547 17.6158 9.58417 17.4218L16.7548 8.65775C16.8972 8.48364 16.7733 8.22222 16.5484 8.22222H11.1556Z"
        stroke="#666666"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LightningBolt;
