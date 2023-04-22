"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Badge from "@components/shared/Badge/Badge";

import Icon from "@shared/Icon/Icon";

import External from "@icons/External";

import styles from "./SidebarLink.module.scss";

export interface SidebarLinkProps {
  children: React.ReactNode;
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
  const pathname = usePathname();
  const linkContent = (
    <>
      {icon && <Icon source={icon} size="small" />}

      <span className={styles.Content}>{children}</span>

      {isNew && <Badge>New</Badge>}
      {isExternal && <Icon source={<External />} size="small" />}
    </>
  );

  return isExternal ? (
    <a
      className={styles.SidebarLink}
      href={url}
      onClick={onClick}
      aria-label={accessibilityLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-current={pathname === url ? "page" : undefined}
    >
      {linkContent}
    </a>
  ) : (
    <Link
      className={styles.SidebarLink}
      href={url}
      onClick={onClick}
      aria-label={accessibilityLabel}
      aria-current={pathname === url ? "page" : undefined}
    >
      {linkContent}
    </Link>
  );
};

export default SidebarLink;
