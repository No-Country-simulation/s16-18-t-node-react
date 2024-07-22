interface Props {
  currency: string
  value?: number
  locale?: string
}

export const getFormatedPrice = ({ currency, value, locale }: Props) => {
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value)
  } catch (error) {
    return false
  }
}
