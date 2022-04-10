import { useEffect, useState, useRef, RefObject } from "react";

interface Props {
  distance?: string;
  externalRef?: RefObject<HTMLElement>;
  once?: boolean;
}

export const useNearScreen = ({
  distance = "100px",
  externalRef = null,
  once = true,
}: Props = {}) => {
  const [isNearScreen, setIsNearScreen] = useState<boolean>(false);

  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elementToObserver = externalRef
      ? externalRef.current
      : elementRef.current;

    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !elementToObserver) return;

    const onChange: IntersectionObserverCallback = (elements, observer) => {
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

    observer.observe(elementToObserver);

    return () => observer.disconnect();
  }, [distance, externalRef, once]);

  return { isNearScreen, elementRef };
};
