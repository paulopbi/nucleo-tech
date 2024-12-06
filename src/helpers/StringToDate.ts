export default function stringToDate(date: string) {
  const [year, month, day] = date.split('-')
  return new Date(Number(year), Number(month), Number(day)).toLocaleDateString(
    'pt-BR',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
  )
}
