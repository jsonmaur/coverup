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

  const regex = options.alphanumeric ? /[a-zA-Z0-9]/g : /(.)/g

  let chunk1, chunk2
  if (options.direction === 'right') {
    const length = value.length - options.keep
    chunk1 = value.substring(0, length).replace(regex, options.character)
    chunk2 = value.substring(length)
  } else {
    chunk1 = value.substring(0, options.keep)
    chunk2 = value.substring(options.keep).replace(regex, options.character)
  }

  return chunk1 + chunk2
}
