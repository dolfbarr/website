import { Social } from '@utils/types'
import React from 'react'
import { type ReactElement } from 'react'
import {
  GitHub,
  Twitter,
  Send,
  Layers,
  Linkedin,
  Mail,
  Code,
  FileText,
} from 'react-feather'

type IconProps = {
  icon: Social
  size?: number
}

const SOCIAL_ICONS: Record<Social, ReactElement> = {
  [Social.Twitter]: <Twitter />,
  [Social.Github]: <GitHub />,
  [Social.Telegram]: <Send />,
  [Social.StackOverflow]: <Layers />,
  [Social.LinkedIn]: <Linkedin />,
  [Social.Email]: <Mail />,
  [Social.DevTo]: <Code />,
  [Social.Resume]: <FileText />,
}

const SocialIcon = ({ icon, size = 24 }: IconProps): ReactElement | null => {
  const iconElement = SOCIAL_ICONS[icon]
  if (!iconElement) {
    return null
  }
  return React.cloneElement(iconElement, { size })
}
export default SocialIcon
