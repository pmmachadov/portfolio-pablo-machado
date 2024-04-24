import Image from 'next/image';
import styles from '@styles/ProjectCard.module.sass';
import { ProjectCardType } from 'types';
import React from 'react';

interface Props {
  project: ProjectCardType;
}

const ProjectCard = ({ project }: Props) => {


  return (
    <article className={ styles.projectCardContainer }>
      <h2 className={ styles.projectCardTitle }>
        { project.title.toUpperCase() }
      </h2>
      <div className={ styles.projectCard }>
        { project.image && (
          <div className={ styles.projectImage }>
            <Image
              src={ project.image }
              layout='responsive'
              width={ 600 }
              height={ 400 }
              objectFit='contain'
              alt={ `Image of ${project.title}` }
            />
          </div>
        ) }
        <div className={ styles.projectCardDetails }>
          <div className={ styles.projectCardLinkContainer }>
            { project.links.map((link) => (
              <a
                key={ link.id }
                href={ link.path }
                target="_blank"
                rel="noopener noreferrer"
                className={ styles.projectCardLink }
              >
                { link.icon }
                { link.name }
              </a>
            )) }
          </div>
        </div>
      </div>
    </article>
  );
};

export default React.memo(ProjectCard);
