import toHtml from "./string-to-html";

describe('stringToHtml', function() {
  it('should parse a html string into document framents', function() {
    const someHtmlString = '<div><div>somestring</div></div>';

    const fragment = toHtml(someHtmlString);
    expect(typeof fragment).to.equal('object');
    expect(fragment.querySelector('div > div').innerHTML).to.equal('somestring');
  });
});
