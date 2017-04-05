# String To Html

[![npm version](https://badge.fury.io/js/string-to-html.svg)](https://badge.fury.io/js/string-to-html)

A very simple browser script to parse html strings into document fragments.

### Usage
Note: If required you need to transpile `string-to-html.js` into ES5 and use a module loader.

Install with yarn `yarn add string-to-html` or npm `npm install string-to-html`;

```js
import toHtml from 'string-to-html';
const htmlString = '<div><p>Hello</p><div><div><p>World</p><div>';
const fragment = toHtml(htmlString);
document.body.appendChild(fragment);
```

### Testing

Install depedencies with `yarn install`, run the test with `yarn test` or open `test.html` in your browser.
