import { NextPage } from "next";
import Head from "next/head";
import { Subscribe } from "components";
import styles from "styles/pages/home.module.scss";

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

      <div className={styles.container}>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.subtitle}>
          Something’s stirring in this corner of the internet. <br />
          Add your name to the email list to be notified when the site goes
          live.
        </p>

        <Subscribe />

        <p className={styles.caption}>
          I&apos;ll only use this for spam. Kidding.
        </p>
      </div>
    </>
  );
};

export default Index;
