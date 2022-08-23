const uppercaseFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const convertTitleToFilename = (str) => {
  const removedSpecialChars = str.replace(/[^a-zA-Z ]/g, '')
  const parts = removedSpecialChars.split(' ')
  const lowercasedParts = parts.map(part => part.toLowerCase())

  const updatedParts = lowercasedParts.map((item, index) => {
    if (index > 0) return uppercaseFirstLetter(item)
    return item
  })
  if (updatedParts.length > 1) {
    return updatedParts.join('')
  }
  return lowercasedParts[0]
}

const convertStrToCamelcase = (str) => {
  const parts = str.split('-')
  const updatedParts = parts.map((item, index) => {
    if (index > 0) return uppercaseFirstLetter(item)
    return item
  })
  if (updatedParts.length > 1) {
    return updatedParts.join('')
  }
  return parts[0]
}

const convertKebabCaseToTitle = (str) => {
  const parts = str.split('-')
  const updatedParts = parts.map((item => uppercaseFirstLetter(item)))
  return updatedParts.join(' ')
}

export {
  convertTitleToFilename,
  convertStrToCamelcase,
  uppercaseFirstLetter,
  convertKebabCaseToTitle
}
