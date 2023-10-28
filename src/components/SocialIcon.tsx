import { Social } from '@utils/types'
import React from 'react'
import type { ReactElement } from 'react'
import {
  GitHub,
  Twitter,
  Send,
  Layers,
  Linkedin,
  Mail,
  Code,
  FileText,
  Key,
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
  [Social.GPG]: <Key />,
}

const SocialIcon: React.FC<IconProps> = ({ icon, size = 24 }): ReactElement => {
  return React.cloneElement(SOCIAL_ICONS[icon], { size })
}
export default SocialIcon
