export function pluralize(value: number, word: string) {
  if (value === 1 || value === -1) {
    return word
  }
  return `${word}s`
}
