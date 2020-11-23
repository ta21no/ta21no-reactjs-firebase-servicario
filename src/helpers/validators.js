


export const isValidImage = value => {
  if (!value) return true
  if (typeof value !== 'string') return false

  const validFormats = ['png', 'jpeg', 'jpg', 'svg']
  const extension = value.split('.').pop()
  const result = validFormats.includes(extension)


  return result
}

export const isValidUrl = value => {
  if (!value) return true
  if (typeof value !== 'string') return false

  const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
  const regex = new RegExp(expression);

  const  result = value.match(regex);
  // console.log(result)

  return result ? true : false

}

export const sameAs = (getValues, field) => value => {
  if (!value) return true
  if (typeof value !== 'string') return false

  const compareToValue = getValues()[field]
  return compareToValue === value

}