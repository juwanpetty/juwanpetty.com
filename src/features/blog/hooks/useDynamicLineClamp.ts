import { useEffect, useRef, useState, RefObject } from "react";

export function useDynamicLineClamp(
  initialClamp: number = 2
): { elementRef: RefObject<HTMLHeadingElement>; lineClamp: number } {
  const elementRef = useRef<HTMLHeadingElement>(null);
  const [lineClamp, setLineClamp] = useState(initialClamp);

  useEffect(() => {
    const adjustLineClamp = () => {
      if (elementRef.current) {
        const lineHeight = parseFloat(
          getComputedStyle(elementRef.current).lineHeight
        );
        const elementHeight = elementRef.current.offsetHeight;
        const lines = Math.round(elementHeight / lineHeight);
        setLineClamp(lines === initialClamp ? 1 : initialClamp);
      }
    };

    adjustLineClamp();
    window.addEventListener("resize", adjustLineClamp);

    return () => {
      window.removeEventListener("resize", adjustLineClamp);
    };
  }, [initialClamp]);

  return { elementRef, lineClamp };
}