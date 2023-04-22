import { useState, useEffect } from "react";

const useMousePosition = (defaultX = 0, defaultY = 0) => {
  const [mousePosition, setMousePosition] = useState({
    x: defaultX,
    y: defaultY,
  });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
