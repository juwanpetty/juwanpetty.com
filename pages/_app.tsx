import React from "react";

import localFont from "@next/font/local";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";
import classNames from "classnames";

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
    <div className={classNames("font-sans", grotesk.variable)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
