/**
 * Masks a string by converting characters to asterisks.
 * @param {string} value - The value to mask
 * @returns {string}
 */
module.exports = function mask (value, options = {}) {
  options.keep = options.keep || 1
  options.direction = options.direction || 'left'
  options.character = options.character || '*'

  if (typeof value !== 'string') {
    throw new TypeError(`expected string, got ${typeof value}`)
  }

  if (typeof options.keep !== 'number') {
    throw new TypeError(`expected number, got ${typeof options.keep}`)
  }

  if (typeof options.character !== 'string') {
    throw new TypeError(`expected string, got ${typeof options.character}`)
  }

  if (!options.direction.match(/^(left|right)$/)) {
    throw new Error('direction must be either "left" or "right"')
  }

  let masked = options.direction === 'left'
    ? value.substring(0, options.keep) : ''

  const padLength = value.length - options.keep
  for (let i = 0; i < padLength; i++) {
    masked += options.character
  }

  if (options.direction === 'right') {
    masked += value.slice(options.keep * -1)
  }

  return masked
}
