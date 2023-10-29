import { LOCATION } from '@utils/data'
import React, { useEffect, useState } from 'react'
import { type ReactElement } from 'react'

type ClockProps = {
  location?: string
} & React.HTMLAttributes<HTMLButtonElement>

const CLOCK_INTERVAL = 15_000 // ms

const Clock: React.FC<ClockProps> = ({
  location = LOCATION.timeZone,
}): ReactElement => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, CLOCK_INTERVAL)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <span title={LOCATION.timeZoneText}>
      {date.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: location,
      })}
    </span>
  )
}
export default React.memo(Clock)
