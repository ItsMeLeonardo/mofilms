import { useEffect, useState, useRef } from "react";

export const useNearScreen = ({
  distance = "100px",
  externalRef,
  once = true,
} = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false);

  const elementRef = useRef(null);

  useEffect(() => {
    const elementToObserver = externalRef
      ? externalRef.current
      : elementRef.current;

    const onChange = (elements, observer) => {
      const [element] = elements;
      if (element.isIntersecting) {
        setIsNearScreen(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setIsNearScreen(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: `${distance}`,
    });

    if (elementToObserver) {
      observer.observe(elementToObserver);
    }

    return () => observer.disconnect();
  });

  return { isNearScreen, elementRef };
};
