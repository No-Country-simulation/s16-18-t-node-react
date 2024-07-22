export const getSeparatedDate = (date: Date) => {
  if (isNaN(date.getTime())) return null

  const [onlyDate, onlyHour] = date.toISOString().split('T')

  return { date: onlyDate, hour: onlyHour.slice(0, 5) }
}
