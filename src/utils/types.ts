import { type ReactElement } from 'react'
import { type URLS } from '@utils/constants.tsx'

export enum ContactGroup {
  Social = 'social',
  Code = 'code',
  Other = 'other',
}

export type Contact = {
  url: (typeof URLS)[keyof typeof URLS]
  icon: ReactElement
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
  Gitlab = 'gitlab',
  Telegram = 'telegram',
  StackOverflow = 'stackoverflow',
  LinkedIn = 'linkedin',
  Email = 'email',
  Instagram = 'instagram',
  Facebook = 'facebook',
  DevTo = 'devto',
  Resume = 'resume',
  GPG = 'gpg',
}
