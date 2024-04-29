import React from 'react';
import SectionCard from '@components/SectionCard';
import SkillCard from '@components/SkillCard';
import styles from '@styles/Skills.module.sass';
import {
  skillcard_Languages,
  skillcard_Styles,
  skillcard_Frameworks,
} from '@sections/Me';
import BgTitle from '@components/BgTitle';

const Skills = () => {
  return (
    <SectionCard id='skills' title='TOOLS' page='SKILLS'>
      <>
        <BgTitle title='TOOLS' />

        <div className={ styles.skillCardWrapper }>

          <SkillCard items={ skillcard_Languages } itemHeight={ 85 } />
          <SkillCard items={ skillcard_Styles } itemHeight={ 85 } />
          <SkillCard items={ skillcard_Frameworks } itemHeight={ 85 } />
        </div>
      </>
    </SectionCard>
  );
};

export default Skills;
