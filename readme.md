# String To Html

[![npm version](https://badge.fury.io/js/string-to-html.svg)](https://npmjs.com/package/string-to-html)

A very simple browser script to parse html strings into document fragments.

### Usage
Install the package with yarn or npm; this will install the es6 module of the package. 

If you want to use this in your browser without transpiling include the `string-to-html-es5.js` file in a `<script src="string-to-html-es5.js"><script>` tag on your page.

To install the es6 module:

```bash
yarn add string-to-html 
# Or use npm
npm install string-to-html
```

Example usage:

```js
import toHtml from 'string-to-html'; // Omit this line if you use the es5 version.

const people = ['Alfred', 'Jodocus', 'Kwak', 'Dolf'];

const htmlString = `
  <ul>
    ${ people.map(name => `<li>${ name }</li>`).join('') }
  </ul>
`;

const fragment = toHtml(htmlString);
document.body.appendChild(fragment);
```

### When & why?
For when you want to use vanilla JS and parse html strings into a DOM fragments. It's saves a time and is much easier than using `document.createFragment()` and appending `document.createElement()` as child elements.

Why a domfragment instead of innerHTML ? Because you can do DOM operations on the fragment before inserting in into the document. 


### Building and Testing

- Install depedencies with `npm install`.
- To transpile to script to es5 run `npm run bundle` this will output a transpiled version of `string-to-html.js` to `string-to-html-es5.js`.
- Run the test with `npm run test` or open `test.html` in your browser.
