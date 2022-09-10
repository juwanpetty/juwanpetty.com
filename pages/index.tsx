import { NextPage } from "next";
import { Head, Subscribe } from "components";
import styles from "styles/pages/home.module.scss";

const Index: NextPage = () => {
  return (
    <>
      <Head
        title="Coming Soon | Juwan Petty"
        description="A personal website by Juwan Petty. Coming soon."
      />

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
