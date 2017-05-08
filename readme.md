# String To Html

[![npm version](https://badge.fury.io/js/string-to-html.svg)](https://npmjs.com/package/string-to-html)

A very simple browser script to parse html strings into document fragments.

### Usage
Install the package with yarn or npm.
 
```bash
yarn add string-to-html 
# Or use npm
npm install string-to-html
```

If you want to use this directly in your browser download and include the `dist/string-to-html.js` file in a script tag on your page.

```html
<script src="./string-to-html.js"><script>
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

- Install depedencies with `yarn install`.
- To bundle and transpile run `yarn build` this will output a transpiled, common js and es2015 module version of `string-to-html.js` to the `dist/` directory.
- Run tests with `yarn test` or open `test.html` in your browser after running `yarn build-test`.
