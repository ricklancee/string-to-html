'use strict';

const contextRange = document.createRange();
contextRange.setStart(document.body, 0);

export default function parseHtml(string) {
  return contextRange.createContextualFragment(string);
};
