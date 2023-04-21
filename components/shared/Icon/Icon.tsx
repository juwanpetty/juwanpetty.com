import { cloneElement } from "react";

import classNames from "classnames";

import styles from "./Icon.module.scss";

export interface IconProps {
  source: JSX.Element;
  accessibilityLabel?: string;
  size?: "small" | "medium" | "large";
}

const Icon = ({ source, size = "medium", accessibilityLabel }: IconProps) => {
  return cloneElement(source, {
    className: classNames(styles.Icon, styles[size]),
    "aria-label": accessibilityLabel,
  });
};

export default Icon;
