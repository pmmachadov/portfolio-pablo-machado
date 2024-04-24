import React, { useContext } from 'react';
import ThemeContext from '@contexts/ThemeContext';

interface Props {
  path: string;
  size: number;
}
const CustomIcon = ({ path, size }: Props) => {
  const { themeStyle } = useContext(ThemeContext);
  const style: React.CSSProperties = {
    display: 'inline-block',
    background: themeStyle.color,
    mask: `url('${path}') center/contain`,
    WebkitMask: `url('${path}') center/contain`,
    height: size + 'px',
    width: size + 'px',
    // transition: 'background 750ms ease',
  };

  return <div style={ style } aria-hidden={ true } />;
};

export default CustomIcon;
