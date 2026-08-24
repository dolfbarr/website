export const formatTime = (
  date: Date = new Date(),
  timeZone: string,
): string => {
  if (!timeZone) {
    return '--:--'
  }

  return new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone,
  }).format(date)
}
