import React, { useContext } from 'react';
import SectionCard from '@components/SectionCard';
import ThemeContext from '@contexts/ThemeContext';
import { socialLinks } from '@sections/me';
import ClipCopy from '@components/ClipCopy';
import styles from '@styles/Contact.module.sass';
import BgTitle from '@components/BgTitle';

const Contact = () => {
  const { themeStyle } = useContext(ThemeContext);

  return (
    <SectionCard id='contact' title='CONTACT' page='CONTACT'>
      <>
        <BgTitle title='CONTACT' />
        <p className={ styles.articleDescription }>
          Looking for an awesome <b>Full-Stack Developer</b>?<br></br> I&apos;m{ ' ' }
          <b>available</b> and looking to mingle! Hit me up and let&apos;s see
          if we&apos;re a match.
        </p>
        <ClipCopy copy='pmmachadov@gmail.com' theme={ themeStyle } />
        <p className={ styles.socialLinksTitle }>Connect with me</p>
        <section className={ styles.socialLinksContainer }>
          { socialLinks.map((link) => {
            return (
              <a
                key={ link.link }
                href={ link.link }
                aria-label={ `navigate to ${link.link}` }
                className={ styles.link }
                data-social-links={ link.title }
                target={ link.target }
                rel={ link.rel }
              >
                { link.icon }
              </a>
            );
          }) }
        </section>
      </>
    </SectionCard>
  );
};

export default Contact;
