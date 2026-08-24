export enum ContactGroup {
  Social = 'social',
  Code = 'code',
  Other = 'other',
}

export type Contact = {
  url: string
  title: string
  isEmail?: boolean
  group?: ContactGroup
}

export type Project = {
  title: string
  description: string
  stack?: string[]
  github: string
  url?: string
  stars?: number
}

export type Workplace = {
  title: string
  company: string
  isContract?: boolean
  description: string
  skills?: string[]
  startDate: string
  endDate?: string
  url: string
}

export enum Social {
  Twitter = 'twitter',
  Github = 'github',
  Telegram = 'telegram',
  StackOverflow = 'stackoverflow',
  LinkedIn = 'linkedin',
  Email = 'email',
  DevTo = 'devto',
  Resume = 'resume',
}
