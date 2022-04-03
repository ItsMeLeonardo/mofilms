import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

//types
interface Props {
  children: ReactNode;
}

export default function HorizontalListMouse({ children }: Props) {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId = setInterval(() => {
      const { scrollWidth, offsetWidth } = carouselRef.current;
      const difference = offsetWidth - scrollWidth;
      if (difference !== 0) {
        setWidth(difference);
        clearInterval(intervalId);
      }
    }, 500);

    return () => {
      if (intervalId) clearTimeout(intervalId);
    };
  }, []);

  return (
    <>
      <motion.div className="container-carousel" ref={carouselRef}>
        <motion.section
          className="scroll-content-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: width }}
        >
          {children}
        </motion.section>
      </motion.div>
      {/* style in global.css */}
      <style jsx>{``}</style>
    </>
  );
}
