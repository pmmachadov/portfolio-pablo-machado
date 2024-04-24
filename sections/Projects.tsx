import React from 'react';
import ProjectCard from '@components/ProjectCard';
import SectionCard from '@components/SectionCard';
import { projectData } from '@sections/me';
import BgTitle from '@components/BgTitle';

const Projects = () => {
  return (
    <SectionCard id='projects' title='PROJECTS' page='WORK'>
      <div style={ { position: 'relative' } }>
        <BgTitle title='WORK' />

        { projectData.map((project) => (
          <ProjectCard project={ project } key={ project.id } />
        )) }
      </div>
    </SectionCard>
  );
};

export default Projects;
