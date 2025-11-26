export interface NavItem {
  label: string;
  path: string;
}

export interface EducationFeature {
  title: string;
  items: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image?: string;
}

export enum PageSection {
  HOME = 'home',
  ABOUT = 'about',
  INFANTIL = 'infantil',
  FUNDAMENTAL = 'fundamental',
  INTEGRAL = 'integral',
  STRUCTURE = 'structure',
  ACTIVITIES = 'activities',
  CONTACT = 'contact',
}