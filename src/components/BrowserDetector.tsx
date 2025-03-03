import { useEffect } from 'react'
import { type ReactElement } from 'react'

const isSafari = (): boolean => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}

export default function BrowserDetector(): ReactElement | null {
  useEffect(() => {
    if (isSafari()) {
      document.body.classList.add('safari')
    }
  }, [])

  return null
}
