A small package to transform a positive decimal number into a binary string or array.

# Install
```bash
npm i str_to_bin
```

# Test
```bash
npm test
```

# How to use
```javascript
const { strToBin } = require('str_to_bin');

const bin = strToBin('5');
console.log(bin); // '101'

const arrBin = strToBin('5', 1);
console.log(arrBin); // [1, 0, 1];
```