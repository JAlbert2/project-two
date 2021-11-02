import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<card-scaffold type="objective">
      <p>TESTING SCAFFOLD</p>
    </card-scaffold>`);
  });
  it('renders the header element', () => {
    const content = element.shadowRoot.querySelector('div slot');
    expect(content).to.exist;
    expect(content.assignedElements({ flat: true })[0].innerText).to.equal(
      'TESTING SCAFFOLD'
    );
  });

  it('passes the a11y audit', async () => {
    element.type = 'science';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'objective';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'fact';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
  });
});
