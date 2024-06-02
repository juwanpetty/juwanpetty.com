import { useEffect } from 'react';

interface WindowWidthProps {
  callback: () => void;
  minimumBoundary: number;
}

export const useWindowWidth = ({
  callback,
  minimumBoundary,
}: WindowWidthProps
) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > minimumBoundary) {
        callback();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [callback, minimumBoundary]);
};