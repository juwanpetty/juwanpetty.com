/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  external?: boolean;
  icon?: keyof typeof Icons;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface HeaderNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
