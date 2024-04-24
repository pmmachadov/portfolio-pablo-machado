import React, { useContext } from 'react';
import SwitchBtn from '@components/SwitchBtn';
import styles from '@styles/Navbar.module.sass';
import ThemeContext, { ThemeOptions } from '../contexts/ThemeContext';
import { NavLinkType } from 'types';

interface Props {
  links: NavLinkType[];
}

const Navbar = ({ links }: Props) => {
  const { setTheme, themeStyle } = useContext(ThemeContext);

  const handleChange = (checked: boolean) => {
    setTheme(checked ? ThemeOptions.Light : ThemeOptions.Dark);
  };

  const handleClick = (id: string) => () => {
    const section = id.replace('#', '');
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };

  return (
    <header>
      <nav className={ styles.navbar } style={ themeStyle }>
        { links.map((link) => {
          return (
            <span className={ styles.linkContainer } key={ link.path }>
              <button
                onClick={ handleClick(link.path) }
                aria-label={ link.name }
                className={ styles.link }
                data-navitem={ link.name }
              >
                { link.icon }
              </button>
            </span>
          );
        }) }
        <SwitchBtn onChange={ handleChange } color={ themeStyle.color } />
      </nav>
    </header>
  );
};

export default Navbar;
