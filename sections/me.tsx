
import {
  faRobot,
  faWindowMaximize,
  faFileCode,
  faCodeBranch,
  faUpRightFromSquare,
  faComments,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'; // types

import {
  NavLinkType,
  ProjectCardType,
  SkillItemType,
  SocialLinkType,
} from 'types'; // icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomIcon from '@components/CustomIcon'; //
// COPY THIS FILE AND RENAME IT TO 'projectData' and add your own data
//
//
// THEMES
//
// change your theme colors here

export const lightTheme = {
  // font-color
  color: '#293241',
  // background-color
  backgroundColor: '#f0efeb',
};
export const darkTheme = {
  color: '#6EDB93',
  backgroundColor: '#0b132b',
}; //
// NAVIGATION
//
// add your navbar items here
// make sure the path name matches your section id so the window can scroll to each section

export const links: NavLinkType[] = [
  {
    name: 'intro',
    path: '#intro',
    icon: (
      <FontAwesomeIcon
        icon={ faRobot }
        title='scroll to section: intro'
        size='lg'
      />
    ),
  },
  {
    name: 'software',
    path: '#skills',
    icon: (
      <FontAwesomeIcon
        icon={ faFileCode }
        title='scroll to section: software'
        size='lg'
      />
    ),
  },
  {
    name: 'projects',
    path: '#projects',
    icon: (
      <FontAwesomeIcon
        icon={ faWindowMaximize }
        title='scroll to section: projects'
        size='lg'
      />
    ),
  },
  {
    name: 'contact',
    path: '#contact',
    icon: (
      <FontAwesomeIcon
        icon={ faComments }
        title='scroll to section: contact'
        size='lg'
      />
    ),
  },
]; //
// SOCIAL LINKS
//
// add your social buttons here

export const socialLinks: SocialLinkType[] = [
  {
    icon: <FontAwesomeIcon icon={ faGithub } title='github' size='2x' />,
    link: 'https://github.com/pmmachadov',
    title: 'github',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    icon: <FontAwesomeIcon icon={ faLinkedin } title='linkedIn' size='2x' />,
    link: 'https://www.linkedin.com/in/pmmachadov/?locale=en_US',
    title: 'linkedIn',
    target: '_blank',
    rel: 'noopener noreferrer'
  },

]; //
// PROJECT CARDS
//
// add your project data object into this array

export const projectData: ProjectCardType[] = [
  {
    title: 'Pokeom Card Game',
    image: '/assets/images/Pokemon-Charizard-Wallpaper.png',
    links: [
      {
        name: 'Live Project',
        path: 'https://statuesque-capybara-b6c91d.netlify.app/',
        icon: <FontAwesomeIcon icon={ faUpRightFromSquare } />,
      },
      {
        name: 'Code',
        path: 'https://github.com/pmmachadov/Pokemon-Card-Game',
        icon: <FontAwesomeIcon icon={ faCodeBranch } />,
      },
    ],
  },
  {
    title: 'Super Heroes App',
    image: '/assets/images/heroesMain.jpg',
    links: [
      {
        name: 'Live Project',
        path: 'https://fanciful-snickerdoodle-bde97c.netlify.app/marvel',
        icon: <FontAwesomeIcon icon={ faUpRightFromSquare } />,
      },
      {
        name: 'Code',
        path: 'https://github.com/pmmachadov/super-heroes-app',
        icon: <FontAwesomeIcon icon={ faCodeBranch } />,
      },
    ],
  },
  {
    title: 'Pokedex',
    image: '/assets/images/pokemon-go.png',
    links: [
      {
        name: 'Live Project',
        path: 'https://keen-kataifi-559ed9.netlify.app/',
        icon: <FontAwesomeIcon icon={ faUpRightFromSquare } />,
      },
      {
        name: 'Code',
        path: 'https://github.com/pmmachadov/Javascript-Pokedex',
        icon: <FontAwesomeIcon icon={ faCodeBranch } />,
      },
    ],
  },
];

// SKILL CARDS
//
// change your skill cards here
// each item will be a column of cards
// create as many or as few as you like

export const skillcard_Styles: SkillItemType[] = [
  {
    text: 'JavaScript',
    icon: <FontAwesomeIcon icon={ faJs } size='2x' />,
    skillLevel: '80%',
  },
  {
    text: 'TypeScript',
    icon: <CustomIcon path='/icons/typescript-icon.png' size={ 40 } />,
    skillLevel: '60%',
  },
  {
    text: 'React',
    icon: <FontAwesomeIcon icon={ faReact } size='2x' />,
    skillLevel: '70%',
  },
];
export const skillcard_Languages: SkillItemType[] = [
  {
    text: 'HTML5',
    icon: <FontAwesomeIcon icon={ faHtml5 } size='2x' />,
    skillLevel: '100%',
  },
  {
    text: 'CSS',
    icon: <FontAwesomeIcon icon={ faCss3 } size='2x' />,
    skillLevel: '90%',
  },
  {
    text: 'GIT',
    icon: <FontAwesomeIcon icon={ faGithub } size='2x' />,
    skillLevel: '90%',
  },
];
export const skillcard_Frameworks: SkillItemType[] = [
  {
    text: 'Node.js',
    icon: <FontAwesomeIcon icon={ faNodeJs } size='2x' />,
    skillLevel: '70%',
  },
  {
    text: 'SQL',
    icon: <FontAwesomeIcon icon={ faDatabase } size='2x' />,
    skillLevel: '60%',
  },
  {
    text: 'Jest',
    icon: <CustomIcon path='/icons/jest-icon.png' size={ 40 } />,
    skillLevel: '50%',
  },
];