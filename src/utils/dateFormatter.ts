import format from 'date-fns/format'

export const dateFromatter = (dateString: string) => {
  if (!!dateString) {
    const dateToString = format(new Date(dateString), 'EEEE, do LLLL yy')

    return dateToString
  }
}
