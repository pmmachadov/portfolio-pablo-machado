import React from 'react';
import SectionCard from '@components/SectionCard';
import styles from '@styles/Intro.module.sass';
import BgTitle from '@components/BgTitle';
import PersonalImage from '@components/PersonalImage';


const Intro = () => {
  function scrollToContact (e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }

  return (
    // change your title and section id
    <SectionCard id='intro' title='ABOUT' page='01'>
      <>
        <BgTitle title='ABOUT' />
        <div>
          <PersonalImage
            src='/assets/images/personalPhoto.jpg'
            alt='Pablo Machado'
            className={ styles.myPhoto } />

          <p>
            <span
              className={ styles.myName }
              style={ { fontFamily: 'Archivo Black, sans-serif' } }>
              PABLO MACHADO
            </span> Professional in the digital sector within the Full Stack Web Development. My skills include: Attention to detail and quality. Planning and organization. Learning and application of knowledge.
            Did I just pique your interest? Let&apos;s{ ' ' }
            <a onClick={ scrollToContact }>
              <b style={ { textDecoration: 'underline' } }>chat </b>💬
            </a>{ ' ' }
          </p>
        </div>
      </>
    </SectionCard>
  );
};

export default Intro;
