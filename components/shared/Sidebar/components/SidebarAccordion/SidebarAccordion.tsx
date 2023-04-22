"use client";

import React, { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

import Icon from "@components/shared/Icon/Icon";

import ChevronRight from "@icons/ChevronRight";

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
  const pathname = usePathname();

  const StopClickEventPropagation = ({
    children,
  }: {
    children: ReactElement | ReactElement[];
  }) => {
    return (
      <div
        className={styles.Root}
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <Accordion.Root
      className={styles.SidebarAccordion}
      type="single"
      collapsible
    >
      <Accordion.Item value={id}>
        <Accordion.Header asChild>
          <Link
            className={styles.AccordionHeader}
            href={`/${resource.toLowerCase()}`}
            aria-label={resource}
            aria-current={
              pathname === `/${resource.toLowerCase()}` ? "page" : undefined
            }
          >
            <Icon source={icon} size="small" />
            <span className={styles.Header}>{resource}</span>
            <StopClickEventPropagation>
              <Accordion.Trigger className={styles.AccordionTrigger}>
                <div className={styles.AccordionChevron}>
                  <Icon source={<ChevronRight />} size="small" />
                </div>
              </Accordion.Trigger>
            </StopClickEventPropagation>
          </Link>
        </Accordion.Header>
        <Accordion.Content className={styles.AccordionContent}>
          <div>
            <div className={styles.AccordionContentLinks}>
              <span>Recent {resource}</span>
              {children}
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default SidebarAccordion;
