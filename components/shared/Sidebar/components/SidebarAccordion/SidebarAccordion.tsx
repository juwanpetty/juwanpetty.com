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
    <Accordion.Root type="single" collapsible>
      <Accordion.Item className={styles.AccordionItem} value={id}>
        <Accordion.Header className={styles.AccordionHeader} asChild>
          <Link
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
          <motion.div
            className={styles.AccordionContentText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.15,
            }}
          >
            {children}
          </motion.div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default SidebarAccordion;
