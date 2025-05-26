import React, { useRef } from "react";
import styles from "@styles/BgTitle.module.sass";
import useIntersectionObserver from "@hooks/useIntersectionObserver";

interface Props {
  title: string;
  className?: string;
}

const BgTitle = ({ title, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(ref);
  const animateStyle: React.CSSProperties = {
    opacity: isVisible ? 0.3 : 0,
    transition: "opacity 700ms ease-out",
  };
  return (
    <header
      className={`${styles.container} ${className || ""}`}
      ref={ref}
      style={animateStyle}
    >
      <h1
        className={styles.title}
        style={{ fontFamily: "Archivo Black, sans-serif" }}
      >
        {title}
      </h1>
    </header>
  );
};

export default BgTitle;
