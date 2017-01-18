# String To Html

A very simple browser script to parse html strings into document fragments.

### Usage
Note: If required you need to transpile `string-to-html.js` into ES5 and use a module loader.

```js
import toHtml from 'string-to-html';
const htmlString = '<div><p>Hello World</p><div>';
const fragment = toHtml(htmlString);
document.body.appendChild(fragment);
```

### Testing

Install depedencies with `npm install`, run the test with `npm run test` or open `test.html` in your browser.
