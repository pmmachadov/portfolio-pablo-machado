import React from 'react';
import ProjectCard from '@components/ProjectCard';
import SectionCard from '@components/SectionCard';
import { projectData } from '@sections/me';
import BgTitle from '@components/BgTitle';
import containerStyle from '@styles/ProjectCard.module.sass';

const Projects = () => {
  const gridStyle = {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    alignItems: 'stretch',
    margin: '2rem 0'
  };


  return (
    <SectionCard id='projects' title='PROJECTS' page='WORK'>
      <div style={ containerStyle }>
        <BgTitle title='WORK' />
        <div style={ gridStyle }>
          { projectData.map((project) => (
            <ProjectCard key={ project.title } project={ project } />
          )) }
        </div>
      </div>
    </SectionCard>
  );
};

export default Projects;
