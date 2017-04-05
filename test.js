import toHtml from "./string-to-html";

const people = ['Alfred', 'Jodocus', 'Kwak', 'Dolf'];
const htmlString = `
  <ul class="list">
    ${ people.map(name => `<li>${ name }</li>`).join('') }
  </ul>
`;

describe('stringToHtml', function() {
  it('should parse a html string into document frament', function() {
    const fragment = toHtml(htmlString);

    expect(typeof fragment).to.equal('object');
    expect(fragment.querySelectorAll('.list > li').length).to.equal(4);
  });

  it('should be able to append the document frament to the dom', function() {
    const fragment = toHtml(htmlString);
    document.body.appendChild(fragment);
    expect(document.querySelectorAll('.list > li').length).to.equal(4);
  });
});
