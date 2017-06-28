/**
 * Conceals a string by converting characters to asterisks.
 * @param {string} value - The value to conceal
 * @return {string}
 */
module.exports = function coverup (value, options = {}) {
  options.char = options.char || '*'
  options.keepLeft = options.keepLeft || 0
  options.keepRight = options.keepRight || 0
  options.compactTo = options.compactTo || 0
  options.keepSymbols = options.keepSymbols || false

  // ---------------------------------------------------------------------------
  // type casting and checks
  // ---------------------------------------------------------------------------

  if (!value) {
    return value
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
  // coverup
  // ---------------------------------------------------------------------------

  const regex = options.keepSymbols ? /[a-zA-Z0-9]/g : /(.)/g

  let concealed = value.replace(regex, options.char)

  if (options.keepLeft > 0) {
    concealed = value.substring(0, options.keepLeft) +
      concealed.substring(options.keepLeft)
  }

  if (options.keepRight > 0) {
    concealed = concealed.slice(0, options.keepRight * -1) +
      value.substring(value.length - options.keepRight)
  }

  if (options.compactTo > 0) {
    concealed = concealed.replace(
      new RegExp(`\\${options.char}+`, 'g'),
      Array(options.compactTo + 1).join(options.char)
    )
  }

  return concealed
}
