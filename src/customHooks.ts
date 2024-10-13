// useIsWideScreen.ts
import { useEffect, useState } from "react";

export const useIsWideScreen = (breakpoint: number = 768): boolean => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(
    window.innerWidth > breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isWideScreen;
};
