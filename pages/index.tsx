import { NextPage } from "next";
import Head from "next/head";

import { Subscribe } from "components";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coming Soon | Juwan Petty</title>
        <meta
          name="description"
          content="A personal website by Juwan Petty. Coming soon."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "96px",
            fontWeight: 700,
          }}
        >
          Coming Soon
        </h1>
        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            marginBottom: "6rem",
          }}
        >
          From automation of people processes to creating <br /> an engaged and
          driven culture.
        </p>
        <Subscribe />

        <p
          style={{
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            color: "rgb(107 114 128)",
            textAlign: "center",
            marginTop: "0.75rem",
          }}
        >
          I&apos;ll only use this for spam. Kidding.
        </p>
      </div>
    </>
  );
};

export default Index;
