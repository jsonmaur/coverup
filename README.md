# Mask.js

[![Build Status](https://travis-ci.org/jsonmaur/mask.js.svg?branch=master)](https://travis-ci.org/jsonmaur/mask.js)
[![Coverage Status](https://coveralls.io/repos/github/jsonmaur/mask.js/badge.svg?branch=master)](https://coveralls.io/github/jsonmaur/mask.js?branch=master)

Obfuscates a string by converting characters to asterisks. Works well for masking credit card numbers, API keys, or any other sensitive info you don't want to show in its entirety. Works in Node.js and browsers.

> Note: This library doesn't keep your info secure, it simply prevents users from seeing an entire string when it is displayed. Please make sure you take the correct precautions when dealing with sensitive info in your app.

## How to Use

```bash
npm install [NPM-NAME-IS-PENDING] --save
```

```javascript
var mask = require('mask')

mask('4242-4242-4242-4242')
//=> *******************

mask('4242-4242-4242-4242', { char: '%' })
//=> %%%%%%%%%%%%%%%%%%%

mask('4242-4242-4242-4242', { keepSymbols: true })
//=> ****-****-****-****

mask('4242-4242-4242-4242', { keepLeft: 4 })
//=> 4242***************

mask('4242-4242-4242-4242', { keepRight: 4 })
//=> ***************4242
```

#### UMD

You can also access the UMD version by using [npmcdn](https://npmcdn.com). This will create `Mask` as a global.

```html
<script src="https://npmcdn.com/[NPM-NAME-IS-PENDING]/mask.min.js"></script>
<script> Mask('secret') //=> ****** </script>
```

## API

### mask (value, options)

- **value** - The value you want to mask.

  > Type: `string`  

- **options**
  - **keepLeft** - The number of characters to avoid masking on the left side of the string.

    > Type: `integer`  
    > Default: `0`

  - **keepRight** - The number of characters to avoid masking on the right side of the string.

    > Type: `integer`  
    > Default: `0`

  - **keepSymbols** - Whether you want to ignore symbols when masking. When set to `true`, only alphanumeric characters will be masked.

    > Type: `boolean`  
    > Default: `false`

  - **char** - The character to use when masking.

    > Type: `string`  
    > Default: `*`

<a name="license"></a>
## License

[MIT](LICENSE) © [Jason Maurer](http://maur.co)
