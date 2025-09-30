import {
  Social,
  type Contact,
  ContactGroup,
  type Workplace,
  type Project,
} from '@utils/types.ts'
import { CONFIG } from 'config'

export const SEPARATOR = '⋅'

export const PERSONAL_DATA = {
  firstName: 'Dolf',
  lastName: 'Barr',
  get fullName() {
    return `${String(this.firstName)} ${String(this.lastName)}`
  },
  get nickname() {
    return `${String(this.firstName.toLocaleLowerCase())}${String(
      this.lastName.toLocaleLowerCase(),
    )}`
  },
  occupation: 'senior software engineer',
  tagLines: ['💻 software engineer', '☕️ coffee driven', '🏡 remote advocate'],
} as const

export const LOCATION = {
  title: 'Belgrade, Serbia',
  original: 'Београд, Србија',
  timeZone: 'Europe/Belgrade',
  timeZoneText: 'CET; UTC+01:00 / CEST; UTC+02:00',
  coordinates: [44.8178, 20.457],
  flag: '🇷🇸',
  link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10836685.071292663!2d13.607408663156074!3d44.737441157001975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade!5e0!3m2!1sen!2srs!4v1698595027670!5m2!1sen!2srs',
} as const

export const URLS: Record<Social, string> = {
  [Social.Twitter]: `https://twitter.com/${PERSONAL_DATA.nickname}`,
  [Social.Github]: `https://github.com/${PERSONAL_DATA.nickname}`,
  [Social.Telegram]: `https://${PERSONAL_DATA.nickname}.t.me/`,
  [Social.StackOverflow]: 'https://stackoverflow.com/u/8362049',
  [Social.LinkedIn]: `https://www.linkedin.com/in/${PERSONAL_DATA.nickname}`,
  [Social.Email]: `mail@${PERSONAL_DATA.firstName.toLocaleLowerCase()}.me`,
  [Social.DevTo]: `https://dev.to/${PERSONAL_DATA.nickname}`,
  [Social.Resume]: CONFIG.base + '/dolf-barr-resume.pdf',
} as const

export const CONTACTS: Record<Social, Contact> = {
  resume: {
    url: URLS.resume,
    title: 'Download resume in PDF',
    group: ContactGroup.Other,
  },
  email: {
    url: URLS.email,
    title: 'Email',
    isEmail: true,
    group: ContactGroup.Social,
  },
  telegram: {
    url: URLS.telegram,
    title: 'Telegram',
    group: ContactGroup.Social,
  },
  twitter: {
    url: URLS.twitter,
    title: 'Twitter',
    group: ContactGroup.Social,
  },
  devto: {
    url: URLS.devto,
    title: 'Dev.to',
    group: ContactGroup.Code,
  },
  github: {
    url: URLS.github,
    title: 'GitHub',
    group: ContactGroup.Code,
  },
  stackoverflow: {
    url: URLS.stackoverflow,
    title: 'Stack Overflow',
    group: ContactGroup.Code,
  },
  linkedin: {
    url: URLS.linkedin,
    title: 'LinkedIn',
    group: ContactGroup.Social,
  },
}

export const PROJECTS: Project[] = [
  {
    title: '🪵 react-log-hook',
    description:
      'Lightweight & customizable logging hook for your react components lifecycle',
    stack: ['React', 'TypeScript', 'testing-library'],
    github: 'https://github.com/dolfbarr/react-log-hook',
    stars: 40,
  },
  {
    title: '🍅 pimer',
    description: 'Simple & minimalistic pomodoro app',
    stack: ['Svelte', 'JavaScript', 'tailwind'],
    github: 'https://github.com/dolfbarr/pimer',
    url: 'https://dolfbarr.github.io/pimer/',
  },
]

export const WORK = {
  totalYearsOfExperience: Math.abs(
    new Date(
      Number(Date.now()) - Number(new Date('1 Nov 2013')),
    ).getUTCFullYear() - 1970,
  ),

  experience: [
    {
      title: 'Senior Frontend Engineer',
      company: 'Semrush',
      startDate: 'Jun  ’25',
      url: 'https://semrush.com',
      skills: [
        'Javascript',
        'React.js',
        'Typescript',
        'React Flow',
        'HTML',
        'CSS',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'QuantumSoft',
      description:
        'Within different teams working on projects for QuantumSoft partners. Most of the time, I am responsible for the frontend architecture and development of the UI and application business logic.',
      startDate: 'Oct ’15',
      endDate: 'May ’25',
      url: 'https://quantumsoft.pro',
      skills: [
        'Javascript',
        'React.js',
        'Typescript',
        'Python',
        'HTML',
        'CSS',
        'PHP',
      ],
    },
    {
      title: 'Senior Software Engineer (Frontend)',
      company: 'Invitae',
      isContract: true,
      description:
        'Working on the frontend architecture and implementation business processes for web portal & inner tools.',
      skills: [
        'Javascript',
        'React.js',
        'Typescript',
        'Python',
        'HTML',
        'CSS',
        'Less',
        'Stylus',
        'Sass',
        'Node.js (NestJS)',
        'Cypress',
        'React Hook Form',
        'Yup',
        'Storybook',
        'Testing Library',
      ],
      startDate: 'Apr ’19',
      endDate: 'Oct ’24',
      url: 'https://invitae.com',
    },
    {
      title: 'Fullstack Engineer',
      company: 'Mind Doodle',
      isContract: true,
      description:
        'Responsibility for the frontend architecture and development of the UI and application business logic.',
      skills: [
        'Javascript',
        'React.js',
        'Typescript',
        'Flow',
        'HTML',
        'CSS',
        'Less',
        'Websockets',
        'Node.js (Express.js)',
        'Webpack',
        'Cytoscape',
        'd3',
        'Draft.js',
        'PHP',
      ],
      startDate: 'Aug ’16',
      endDate: 'Mar ’19',
      url: 'https://www.mindmappro.com',
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'KREOSOFT',
      description:
        'Participated in the development of corporate and social services for students and employees of Tomsk State University.',
      startDate: 'Nov ’13',
      endDate: 'Sep ’15',
      url: 'https://kreosoft.ru',
      skills: [
        'Javascript',
        'jQuery',
        'CSS',
        'HTML',
        'PHP',
        'Python',
        'Bootstrap',
      ],
    },
  ] as Workplace[],
} as const

export const EDUCATION = {
  university: 'Tomsk State University',
  description: 'Bachelor’s degree, Computer Science.',
  startDate: '2011',
  endDate: '2015',
} as const

export const HOST = 'dolf.me'

export const META = {
  title: `${PERSONAL_DATA.fullName}, ${PERSONAL_DATA.occupation}`,
  shortDescription: `${PERSONAL_DATA.fullName}, a ${PERSONAL_DATA.occupation} based in ${LOCATION.title}`,
  description: `${PERSONAL_DATA.fullName}, a ${PERSONAL_DATA.occupation} at ${WORK.experience[0]?.company} with ${WORK.totalYearsOfExperience}+ years of experience based in ${LOCATION.title}. I'm passionate about web and, especially, frontend development.`,
  twitterUsername: `@${PERSONAL_DATA.nickname}`,
  ogTitle: ` ${SEPARATOR} ${PERSONAL_DATA.fullName}`,
  host: HOST,
  siteUrl: `https://${HOST}`,
  defaultLang: 'en',
}

export const DEFAULT_ICON_SIZE = 13
