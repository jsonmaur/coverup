# Mask.js

[![Build Status](https://travis-ci.org/jsonmaur/mask.js.svg?branch=master)](https://travis-ci.org/jsonmaur/mask.js)
[![Coverage Status](https://coveralls.io/repos/github/jsonmaur/mask.js/badge.svg?branch=master)](https://coveralls.io/github/jsonmaur/mask.js?branch=master)

Obfuscates a string by converting characters to asterisks. Works well for masking credit card numbers, API keys, or any other sensitive info you don't want to show in its entirety.

> Note: This library doesn't keep your info secure, it simply prevents users from seeing an entire string on the front-end. Please make sure you take the correct precautions when dealing with sensitive info in your backend.

## How to Use

```bash
npm install mask --save
```

```javascript
var mask = require('mask')

mask('secret')
//=> s*****

mask('4242424242424242', { keep: 4 })
//=> 4242************

mask('4242424242424242', { keep: 4, direction: 'right' })
//=> ************4242

mask('secret', { character: '%' })
//=> s%%%%%
```

## API

### mask (value, options)

- **value** - The value you want to mask.

  > Type: `string`  

- **options**
  - **keep** - The number of characters to avoid masking.

    > Type: `integer`  
    > Default: `1`

  - **direction** - The side of the string to keep characters on. Must be set to either `left` or `right`.

    > Type: `string`  
    > Default: `left`

  - **character** - The character to use when masking.

    > Type: `string`  
    > Default: `*`

<a name="license"></a>
## License

[MIT](LICENSE) © [Jason Maurer](http://maur.co)
