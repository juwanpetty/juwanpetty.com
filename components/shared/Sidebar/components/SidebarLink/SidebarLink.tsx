import React from "react";

import Link from "next/link";

import Badge from "@components/shared/Badge/Badge";

import Icon from "@shared/Icon/Icon";

import External from "@icons/External";

import styles from "./SidebarLink.module.scss";

export interface SidebarLinkProps {
  children: string;
  icon: JSX.Element;
  url: string;
  onClick?: () => void;
  accessibilityLabel?: string;
  isExternal?: boolean;
  isNew?: boolean;
}

const SidebarLink = ({
  children = "default value",
  icon,
  url,
  onClick,
  accessibilityLabel,
  isExternal,
  isNew,
}: SidebarLinkProps) => {
  console.log(`public/icons/home.svg`);

  return (
    <Link
      className={styles.SidebarLink}
      href={url}
      onClick={onClick}
      aria-label={accessibilityLabel}
    >
      {icon && <Icon source={icon} size="small" />}

      <span className={styles.Content}>
        {children}
        {isNew && <Badge>New</Badge>}
      </span>

      {isExternal && <Icon source={<External />} size="small" />}
    </Link>
  );
};

export default SidebarLink;
