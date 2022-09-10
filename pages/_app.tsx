import React from "react";
import type { AppProps } from "next/app";
import { Head } from "components";

import styles from "styles/pages/app.module.scss";
import "../styles/styles.scss";

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  const ReactDOM = require("react-dom");
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <div className={styles.wrapper}>
        <header />
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
        <footer />
      </div>
    </>
  );
}

export default MyApp;
