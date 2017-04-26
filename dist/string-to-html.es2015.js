var contextRange = document.createRange();
contextRange.setStart(document.body, 0);

function toHtml(string) {
  return contextRange.createContextualFragment(string);
}

export default toHtml;