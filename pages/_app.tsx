import React from "react";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Head } from "components";
import cs from "classnames";

import "../styles/globals.scss";

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  const ReactDOM = require("react-dom");
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

const grotesk = localFont({
  src: [
    {
      path: "../public/fonts/neufile-grotesk-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neufile-grotesk-regular-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/neufile-grotesk-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neufile-grotesk-medium-italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/neufile-grotesk-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/neufile-grotesk-semibold-italic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/neufile-grotesk-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/neufile-grotesk-bold-italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-grotesk",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <main className={cs("font-sans", grotesk.variable)}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
