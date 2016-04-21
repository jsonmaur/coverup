/**
 * Masks a string by converting characters to asterisks.
 * @param {string} value - The value to mask
 * @returns {string}
 */
module.exports = function mask (value, options = {}) {
  // ---------------------------------------------------------------------------
  // option defaults
  // ---------------------------------------------------------------------------

  options.keep = options.keep || 1
  options.direction = options.direction || 'left'
  options.character = options.character || '*'

  // ---------------------------------------------------------------------------
  // type casting and checks
  // ---------------------------------------------------------------------------

  if (!value) {
    throw new Error('cannot mask an undefined value')
  }

  value = String(value)

  options.keep = Math.floor(parseInt(options.keep, 10))
  options.character = String(options.character)

  if (!options.direction.match(/^(left|right)$/)) {
    throw new Error('direction must be either "left" or "right"')
  }

  // ---------------------------------------------------------------------------
  // mask
  // ---------------------------------------------------------------------------

  let masked = options.direction === 'left'
    ? value.substring(0, options.keep) : ''

  let i = -1
  const length = value.length - options.keep
  while (++i < length) {
    masked += options.character
  }

  if (options.direction === 'right') {
    masked += value.slice(options.keep * -1)
  }

  return masked
}
