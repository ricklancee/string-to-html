import toHtml from "./string-to-html";

describe('stringToHtml', function() {
  it('should parse a html string into document framents', function() {
    const someHtmlString = '<div><div>somestring</div></div>><p>foo</p>';

    const fragment = toHtml(someHtmlString);

    fragment.querySelector('p').classList.add('foo');
    expect(fragment.querySelector('p').className).to.equal('foo');
    expect(typeof fragment).to.equal('object');
    expect(fragment.querySelector('div > div').innerHTML).to.equal('somestring');
  });
});
