

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@styles/ProjectCard.module.sass';

import { ProjectCardType } from 'types'; // Replace 'path/to/ProjectCardType' with the actual path to the file containing the 'ProjectCardType' type.

interface Props {
  project: ProjectCardType;
}

const ProjectCard = ({ project }: Props) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const nodeRef = useRef(null);
  const duration = 175;

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
            { project.links.map((link, index) => (
              <a
                key={ index }
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
