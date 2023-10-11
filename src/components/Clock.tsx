import { type PropsWithChildren, type ReactElement } from 'react'
import type React from 'react'
import { useEffect, useState } from 'react'
import { LOCATION } from '@utils/data'
type ClockProps = {
  location?: string
} & PropsWithChildren &
  React.HTMLAttributes<HTMLButtonElement>

const Clock: React.FC<ClockProps> = ({
  children,
  className,
  location = LOCATION.timeZone,
  ...props
}): ReactElement => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <span>
      {date.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: location,
      })}
    </span>
  )
}
export default Clock
