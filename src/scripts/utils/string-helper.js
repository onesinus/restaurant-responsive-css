const maxString = (str, maxCharacter) => {
  let cuttedString = str.substr(0, maxCharacter)
  if (str.length > maxCharacter) cuttedString += '...'
  return cuttedString
}

export {
  maxString
}
