import React, { ReactElement, useRef } from 'react';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import styles from '@styles/SkillCard.module.sass';
import ProgressBarContainer from '@components/ProgressBarContainer';

type Item = {
  icon?: ReactElement;
  text: string;  // Assumed to be unique for each item
  skillLevel: string;
};

interface Props {
  itemHeight: number;
  items: Item[];
}

const SkillCard = ({ items, itemHeight }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible, hasRender } = useIntersectionObserver(ref, 0.25);

  const containerHeight = {
    height: itemHeight * items.length,
  };

  const progressBarStyle: React.CSSProperties = {
    border: '1px solid',
    paddingLeft: '10px',
  };

  const itemPosition = (item: Item) => {
    let top;
    if (isVisible) {
      top = itemHeight * items.indexOf(item);  // Adjusted the position calculation
    } else if (hasRender.current) {
      top = itemHeight * items.indexOf(item);  // Adjusted the position calculation
    } else {
      top = -itemHeight;
    }

    return {
      top,
      height: itemHeight,
    };
  };

  return (
    <div>
      <div
        ref={ ref }
        className={ styles.skillItemContainer }
        style={ containerHeight }
      >
        { items.map((item) => {
          return (
            <div key={ item.text } style={ itemPosition(item) } className={ styles.skillItem }>
              { item.icon ? item.icon : null }
              <div className={ styles.skillItemTextWrapper }>
                <ProgressBarContainer
                  animateTo={ item.skillLevel }
                  containerStyle={ progressBarStyle }
                  fixed={ isVisible || hasRender.current }
                  delay='800ms'
                >
                  <span className={ styles.skillItemText }>{ item.text }</span>
                </ProgressBarContainer>
              </div>
            </div>
          );
        }) }
      </div>
    </div>
  );
};

export default React.memo(SkillCard);
