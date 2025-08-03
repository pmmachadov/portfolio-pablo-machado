import React, { ReactElement, useRef } from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import styles from "@styles/SkillCard.module.sass";

type Item = {
  icon?: ReactElement;
  text: string;
  skillLevel: string;
};

interface Props {
  itemHeight: number;
  items: Item[];
}

const SkillCard = ({ items, itemHeight }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible, hasRender } = useIntersectionObserver(ref, 0.25);

  return (
    <div ref={ref} className={styles.skillGrid}>
      {items.map((x, i) => {
        return (
          <div key={i} className={styles.skillGridItem}>
            {x.icon ? x.icon : null}
            <div className={styles.skillItemTextWrapper}>
              <span className={styles.skillItemText}>{x.text}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(SkillCard);
