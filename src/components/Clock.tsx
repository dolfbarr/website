import { LOCATION } from '@utils/data'
import React, { useEffect, useState } from 'react'
import { type ReactElement } from 'react'

type ClockProps = {
  location?: string
  initialTime?: string
}

const CLOCK_INTERVAL = 15_000 // ms
const formatTime = (location: string): string => {
  return new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: location,
  }).format(new Date())
}

const Clock: React.FC<ClockProps> = ({
  location = LOCATION.timeZone,
  initialTime,
}): ReactElement => {
  const [time, setTime] = useState(() => initialTime ?? formatTime(location))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime(location))
    }, CLOCK_INTERVAL)

    return () => {
      clearInterval(timer)
    }
  }, [location])

  return (
    <time title={LOCATION.timeZoneText} dateTime={time}>
      {time}
    </time>
  )
}
export default React.memo(Clock)
