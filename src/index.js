/**
 * Masks a string by converting characters to asterisks.
 * @param {string} value - The value to mask
 * @return {string}
 */
module.exports = function mask (value, options = {}) {
  // ---------------------------------------------------------------------------
  // option defaults
  // ---------------------------------------------------------------------------

  options.char = options.char || '*'
  options.keepLeft = options.keepLeft || 0
  options.keepRight = options.keepRight || 0
  options.compactTo = options.compactTo || 0
  options.keepSymbols = options.keepSymbols || false

  // ---------------------------------------------------------------------------
  // type casting and checks
  // ---------------------------------------------------------------------------

  if (!value) {
    throw new Error('cannot mask an undefined value')
  }

  if (options.compactTo && options.keepSymbols) {
    throw new Error('you cannot define both compactTo and keepSymbols')
  }

  value = String(value)
  options.char = String(options.char)
  options.keepLeft = Math.floor(parseInt(options.keepLeft, 10))
  options.keepRight = Math.floor(parseInt(options.keepRight, 10))
  options.compactTo = Math.floor(parseInt(options.compactTo, 10))
  options.keepSymbols = Boolean(options.keepSymbols)

  // ---------------------------------------------------------------------------
  // mask
  // ---------------------------------------------------------------------------

  const regex = options.keepSymbols ? /[a-zA-Z0-9]/g : /(.)/g

  let masked = value.replace(regex, options.char)

  if (options.keepLeft > 0) {
    masked = value.substring(0, options.keepLeft) +
      masked.substring(options.keepLeft)
  }

  if (options.keepRight > 0) {
    masked = masked.slice(0, options.keepRight * -1) +
      value.substring(value.length - options.keepRight)
  }

  if (options.compactTo > 0) {
    masked = masked.replace(
      new RegExp(`\\${options.char}+`, 'g'),
      Array(options.compactTo + 1).join(options.char)
    )
  }

  return masked
}
