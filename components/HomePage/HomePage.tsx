import React from "react";

import styles from "./HomePage.module.scss";

export interface HomePageProps {
  prop?: string;
}

const HomePage = ({ prop = "default value" }: HomePageProps) => {
  return <div className={styles.HomePage}>HomePage {prop}</div>;
};

export default HomePage;
