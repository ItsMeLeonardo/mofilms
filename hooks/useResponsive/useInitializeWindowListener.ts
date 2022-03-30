import { useEffect } from "react";
import { useSetAtom } from "jotai";

import { setResponsiveAtom, ScreenTypes } from "store/responsiveAtom";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xl2: 1400,
};

export const useInitializeWindowListener = () => {
  const setSize = useSetAtom(setResponsiveAtom);
  useEffect(() => {
    const handleResize = () => {
      const currentScreen = Object.keys(breakpoints).find((key) => {
        return breakpoints[key] >= window.innerWidth;
      });
      setSize({
        widthScreen: window.innerWidth,
        currentScreen: (currentScreen as ScreenTypes) || "max",
      });
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [setSize]);
};
