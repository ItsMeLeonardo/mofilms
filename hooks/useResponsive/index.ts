import { useEffect, useState } from "react";

import { Props, Breakpoints, State } from "./types";

const defaultBreakpoint: Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xl2: 1400,
};

export const useResponsive = ({
  breakpoints = defaultBreakpoint,
}: Props = {}) => {
  const [state, setState] = useState<State>({
    widthScreen: 0,
    currentScreen: "md",
  });

  useEffect(() => {
    const handleResize = () => {
      const currentScreen = Object.keys(breakpoints).find((key) => {
        return breakpoints[key] >= window.innerWidth;
      });
      setState({
        widthScreen: window.innerWidth,
        currentScreen: currentScreen || "max",
      });
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoints]);

  return state;
};
