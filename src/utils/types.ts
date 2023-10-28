import { type URLS } from '@utils/data'

export enum ContactGroup {
  Social = 'social',
  Code = 'code',
  Other = 'other',
}

export type Contact = {
  url: (typeof URLS)[keyof typeof URLS]
  title: string
  isEmail?: boolean
  group?: ContactGroup
}

export type Workplace = {
  title: string
  company: string
  isContract?: boolean
  description: string
  skills?: string[]
  startDate: string
  endDate?: string
  url?: string
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
  GPG = 'gpg',
}
