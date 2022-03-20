import { useEffect, useState } from "react";

const defaultBreakpoint = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xl2: 1400,
};

export const useResponsive = ({ breakPoints = defaultBreakpoint } = {}) => {
  const [state, setState] = useState({
    widthScreen: 0,
    currentScreen: "md",
  });

  useEffect(() => {
    const handleResize = () => {
      const currentScreen = Object.keys(breakPoints).find((key) => {
        return breakPoints[key] >= window.innerWidth;
      });
      setState({
        widthScreen: window.innerWidth,
        currentScreen: currentScreen || "max",
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakPoints]);

  return state;
};
