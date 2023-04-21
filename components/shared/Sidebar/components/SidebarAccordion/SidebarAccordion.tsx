"use client";

import React from "react";

import Link from "next/link";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

import Icon from "@components/shared/Icon/Icon";

import SidebarLink from "../SidebarLink/SidebarLink";
import styles from "./SidebarAccordion.module.scss";

export interface SidebarAccordionProps {
  id: string;
  children: React.ReactNode;
  icon: JSX.Element;
  resource: string;
}

const SidebarAccordion = ({
  id,
  children = "default value",
  icon,
  resource,
}: SidebarAccordionProps) => {
  return (
    <Accordion.Root
      className={styles.SidebarAccordion}
      type="single"
      defaultValue={id}
    >
      <Accordion.Item value={id}>
        <Accordion.Header asChild>
          <Link
            className={styles.AccordionHeader}
            href={`/${resource.toLowerCase()}`}
            aria-label={resource}
          >
            <Icon source={icon} size="small" />

            <span className={styles.Header}>{resource}</span>

            <Accordion.Trigger>
              <Icon source={<ChevronRight />} size="small" />
            </Accordion.Trigger>
          </Link>
        </Accordion.Header>
        <Accordion.Content asChild>
          <div className={styles.Content}>
            <span>Recent {resource}</span>
            {children}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default SidebarAccordion;
