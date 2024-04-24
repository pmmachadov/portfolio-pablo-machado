import { Key, ReactElement } from 'react';

export interface ProjectCardType {
  title: string;
  image: string;
  id: string;
  links: {
    id: Key | null | undefined; name: string; path: string; icon?: ReactElement
  }[];
}

export interface NavLinkType {
  name: string;
  path: string;
  icon?: ReactElement;
}

export interface SkillItemType {
  icon?: ReactElement;
  text: string;
  skillLevel: string;
}

export interface SocialLinkType {
  icon: ReactElement;
  link: string;
  title: string;
  target: string;
  rel: string;
}

export interface MediaImageType {
  src: string;
  alt: string;
  height: number;
  width: number;
  mobileImg?: {
    src: string;
    height: number;
    width: number;
  };
}

export interface ImageComponentProps {
  src?: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
}
