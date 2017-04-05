# String To Html

[![npm version](https://badge.fury.io/js/string-to-html.svg)](https://npmjs.com/package/string-to-html)

A very simple browser script to parse html strings into document fragments.

### When & why?
For when you want to use vanilla js and parse html strings into a domframents.
Why a domfragment instead of innerHTML ? because you can do operations on the fragment before
inserting in into the document. 

### Usage
Note: If required you need to transpile `string-to-html.js` into ES5 and use a module loader.

Install with yarn `yarn add string-to-html` or npm `npm install string-to-html`;

```js
import toHtml from 'string-to-html';

const people = ['Alfred', 'Jodocus', 'Kwak', 'Dolf'];

const htmlString = `
  <ul>
    ${ people.map(name => `<li>${ name }</li>`).join('') }
  </ul>
`;

const fragment = toHtml(htmlString);
document.body.appendChild(fragment);
```


### Testing

Install depedencies with `yarn install`, run the test with `yarn test` or open `test.html` in your browser.
