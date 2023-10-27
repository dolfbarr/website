import { Social } from '@utils/types'
import React from 'react'
import type { ReactElement } from 'react'
import {
  GitHub,
  Gitlab,
  Twitter,
  Send,
  Layers,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
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
  [Social.Gitlab]: <Gitlab />,
  [Social.Telegram]: <Send />,
  [Social.StackOverflow]: <Layers />,
  [Social.LinkedIn]: <Linkedin />,
  [Social.Email]: <Mail />,
  [Social.Instagram]: <Instagram />,
  [Social.Facebook]: <Facebook />,
  [Social.DevTo]: <Code />,
  [Social.Resume]: <FileText />,
  [Social.GPG]: <Key />,
}

const SocialIcon: React.FC<IconProps> = ({ icon, size = 24 }): ReactElement => {
  return React.cloneElement(SOCIAL_ICONS[icon], { size })
}
export default SocialIcon
