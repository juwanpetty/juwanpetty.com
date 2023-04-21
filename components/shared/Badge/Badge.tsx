import React from "react";

import styles from "./Badge.module.scss";

export interface BadgeProps {
  children: string;
  status?: "success" | "error" | "warning" | "info";
}

const Badge = ({ children = "default value" }: BadgeProps) => {
  return <div className={styles.Badge}>{children}</div>;
};

export default Badge;
