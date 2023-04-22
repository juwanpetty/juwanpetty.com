"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import Icon from "@components/shared/Icon/Icon";

import ChevronLeft from "@icons/ChevronLeft";

import styles from "./SidebarCollapse.module.scss";
import useMousePosition from "./hooks/useMousePosition";

const THRESHOLD = 50;

const SidebarCollapse = () => {
  const elementRef = useRef<HTMLButtonElement>(null);
  const [isMouseClose, setIsMouseClose] = useState(false);
  const mousePosition = useMousePosition(0, 96);

  useEffect(() => {
    // element can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
    if (!elementRef.current) return;

    // find the horizontal center of the element
    const center =
      elementRef.current.getBoundingClientRect().left +
      elementRef.current.getBoundingClientRect().width / 2;

    // is the distance between the mouse and the center of the element within the threshold?
    // and only on the right side?
    const isClose =
      Math.abs(mousePosition.x - center) < THRESHOLD &&
      mousePosition.x > elementRef.current.getBoundingClientRect().left;

    setIsMouseClose(isClose);
  }, [mousePosition]);

  const centerButton = () => {
    if (!elementRef.current) return;

    // this number can be no less than 0 and no more than the height of the viewport height
    return Math.min(
      Math.max(
        mousePosition.y - elementRef.current.getBoundingClientRect().height / 2,
        0
      ),
      window.innerHeight - elementRef.current.getBoundingClientRect().height
    );
  };

  return (
    <div className={styles.SidebarCollapse} data-reveal={isMouseClose}>
      <motion.button
        className={styles.Button}
        onClick={() => console.log("clicked")}
        ref={elementRef}
        animate={{ y: centerButton() }}
        // transition={{ type: "tween", duration: 0.2, ease: "circOut" }}
        layout
      >
        <Icon source={<ChevronLeft />} size="small" />
      </motion.button>
      <span className={styles.Background} />
    </div>
  );
};

export default SidebarCollapse;
