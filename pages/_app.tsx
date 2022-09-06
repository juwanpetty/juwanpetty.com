import React from "react";
import type { AppProps } from "next/app";
import styled from "styled-components";

import "../styles/styles.scss";

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  const ReactDOM = require("react-dom");
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <footer />
    </Wrapper>
  );
}

export default MyApp;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;
