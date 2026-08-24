import { describe, expect, it } from 'vitest'

import {
  PERSONAL_DATA,
  LOCATION,
  URLS,
  CONTACTS,
  PROJECTS,
  WORK,
  META,
} from './data'
import { Social } from './types'

describe('data configuration', () => {
  describe('PERSONAL_DATA', () => {
    it('constructs correct full name and nickname', () => {
      expect(PERSONAL_DATA.fullName).toBe('Dolf Barr')
      expect(PERSONAL_DATA.nickname).toBe('dolfbarr')
      expect(PERSONAL_DATA.occupation).toBe('senior software engineer')
      expect(PERSONAL_DATA.tagLines.length).toBeGreaterThan(0)
    })
  })

  describe('LOCATION', () => {
    it('has valid coordinates, flag, and timeZone', () => {
      expect(LOCATION.title).toBe('Belgrade, Serbia')
      expect(LOCATION.timeZone).toBe('Europe/Belgrade')
      expect(LOCATION.flag).toBe('🇷🇸')
      expect(LOCATION.coordinates).toHaveLength(2)
    })
  })

  describe('URLS & CONTACTS', () => {
    it('contains valid URLs for all socials', () => {
      expect(URLS[Social.Twitter]).toContain('twitter.com/dolfbarr')
      expect(URLS[Social.Github]).toContain('github.com/dolfbarr')
      expect(URLS[Social.LinkedIn]).toContain('linkedin.com/in/dolfbarr')
      expect(URLS[Social.Email]).toBe('mail@dolf.me')
    })

    it('has corresponding contact definitions with matching URLs', () => {
      expect(CONTACTS[Social.Twitter].url).toBe(URLS[Social.Twitter])
      expect(CONTACTS[Social.Email].isEmail).toBe(true)
      expect(CONTACTS[Social.Resume].url).toBe(URLS[Social.Resume])
    })
  })

  describe('PROJECTS', () => {
    it('contains project definitions with titles, stack, and github links', () => {
      expect(PROJECTS.length).toBeGreaterThan(0)
      for (const project of PROJECTS) {
        expect(project.title).toBeDefined()
        expect(project.description).toBeDefined()
        expect(project.github).toMatch(/^https:\/\/github\.com\//)
      }
    })
  })

  describe('WORK', () => {
    it('calculates total years of experience as a positive number >= 10', () => {
      expect(typeof WORK.totalYearsOfExperience).toBe('number')
      expect(WORK.totalYearsOfExperience).toBeGreaterThanOrEqual(10)
    })

    it('has valid workplace experience history', () => {
      expect(WORK.experience.length).toBeGreaterThan(0)
      const currentWorkplace = WORK.experience[0]
      expect(currentWorkplace?.company).toBe('Semrush')
      expect(currentWorkplace?.startDate).toBe('Jun ’25')

      for (const workplace of WORK.experience) {
        expect(workplace.title).toBeDefined()
        expect(workplace.company).toBeDefined()
        expect(workplace.url).toMatch(/^https:\/\//)
      }
    })
  })

  describe('META', () => {
    it('contains consistent title and descriptions', () => {
      expect(META.title).toContain('Dolf Barr')
      expect(META.host).toBe('dolf.me')
      expect(META.siteUrl).toBe('https://dolf.me')
      expect(META.shortDescription).toContain('Dolf Barr')
      expect(META.description).toContain('Dolf Barr')
    })
  })
})
