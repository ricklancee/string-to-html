var toHtml = (function () {
'use strict';

const contextRange = document.createRange();
contextRange.setStart(document.body, 0);

function toHtml(string) {
  return contextRange.createContextualFragment(string);
}

return toHtml;

}());
