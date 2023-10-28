import {
  Social,
  type Contact,
  ContactGroup,
  type Workplace,
} from '@utils/types.ts'
import { CONFIG } from 'config'

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
  occupation: 'senior frontend engineer',
  tagLines: ['💻 frontend engineer', '☕️ coffee driven', '🏡 remote advocate'],
} as const

export const LOCATION = {
  title: 'Belgrade, Serbia',
  original: 'Београд, Србија',
  timeZone: 'Europe/Belgrade',
  coordinates: [44.8178, 20.457],
  flag: '🇷🇸',
} as const

export const URLS: Record<Social, string> = {
  [Social.Twitter]: `https://twitter.com/${PERSONAL_DATA.nickname}`,
  [Social.Github]: `https://github.com/${PERSONAL_DATA.nickname}`,
  [Social.Telegram]: `https://${PERSONAL_DATA.nickname}.t.me/`,
  [Social.StackOverflow]: 'https://stackoverflow.com/u/8362049',
  [Social.LinkedIn]: `https://www.linkedin.com/in/${PERSONAL_DATA.nickname}`,
  [Social.Email]: `mail@${PERSONAL_DATA.firstName.toLocaleLowerCase()}.me`,
  [Social.DevTo]: `https://dev.to/${PERSONAL_DATA.nickname}`,
  [Social.Resume]: CONFIG.base + '/public/dolf-barr-resume.pdf',
  [Social.GPG]: CONFIG.base + '/public/dolf-barr-gpg.key',
} as const

export const CONTACTS: Record<Social, Contact> = {
  resume: {
    url: URLS.resume,
    title: 'Download resume in PDF',
    group: ContactGroup.Other,
  },
  gpg: {
    url: URLS.gpg,
    title: 'Download GPG Key',
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

export const WORK = {
  totalYearsOfExperience: Math.abs(
    new Date(
      Number(Date.now()) - Number(new Date('1 Nov 2013')),
    ).getUTCFullYear() - 1970,
  ),

  experience: [
    {
      title: 'Senior Frontend Engineer',
      company: ' Invitae',
      isContract: true,
      description:
        'Working on the frontend architecture and implementation business processes for web portal & inner tools.',
      skills: [
        'Javascript',
        'Typescript',
        'HTML',
        'CSS',
        'Less',
        'Stylus',
        'Sass',
        'Node.js (NestJS)',
        'Redux-Forms',
        'React Hook Form',
        'Formik',
        'Yup',
        'Storybook',
        'Testing Library',
        'Cypress',
        'Python (Django)',
      ],
      startDate: 'Apr ’19',
      url: 'https://invitae.com',
    },
    {
      title: 'Senior Software Engineer',
      company: ' QuantumSoft',
      description:
        'Within different teams working on projects for QuantumSoft partners. Most of the time, I am responsible for the frontend architecture and development of the UI and application business logic.',
      startDate: 'Oct ’15',
      url: 'https://quantumsoft.pro',
    },
    {
      title: 'Frontend Engineer',
      company: 'Mind Doodle',
      isContract: true,
      description:
        'Responsibility for the frontend architecture and development of the UI and application business logic.',
      skills: [
        'Javascript',
        'Flow',
        'Typescript',
        'HTML',
        'CSS',
        'Less',
        'Websockets',
        'Node.js (Express.js)',
        'Webpack',
        'Cytoscape',
        'd3',
        'Draft.js',
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
  description: `${PERSONAL_DATA.fullName}, a ${PERSONAL_DATA.occupation} at ${WORK.experience[0]?.company} & ${WORK.experience[1]?.company} with ${WORK.totalYearsOfExperience}+ years of experience based in ${LOCATION.title}. I'm passionate about web and, especially, frontend development.`,
  twitterUsername: `@${PERSONAL_DATA.nickname}`,
  host: HOST,
  siteUrl: `https://${HOST}`,
  defaultLang: 'en',
}

export const DEFAULT_ICON_SIZE = 13
