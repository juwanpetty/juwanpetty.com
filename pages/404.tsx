import React from "react";
import styles from "styles/pages/404.module.scss";

type Props = {};

const Custom404 = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner} aria-hidden="true">
        <div>404 404 404 404 404 404 404 404 404 404</div>
        <div>404 404 404 404 404 404 404 404 404 404</div>
        <div>404 404 404 404 404 404 404 404 404 404</div>
        <div>404 404 404 404 404 404 404 404 404 404</div>
        <div className={styles.centered}>
          404 404 404 404 404 404 404 404 404 404
        </div>
        <div>404 404 404 404 404 404 404 404 404 404</div>
        <div>404 404 404 404 404 404 404 404 404 404</div>
        <div>404 404 404 404 404 404 404 404 404 404</div>
        <div>404 404 404 404 404 404 404 404 404 404</div>
      </div>
    </div>
  );
};

export default Custom404;
