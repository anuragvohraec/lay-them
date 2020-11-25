// import { html, fixture, expect } from '@open-wc/testing';

// import {LayThem} from '../src/LayThem.js';
// import '../lay-them.js';

// describe('LayThem', () => {
//   it('has a default title "Hey there" and counter 5', async () => {
//     const el: LayThem = await fixture(html`
//       <lay-them></lay-them>
//     `);

//     expect(el.title).to.equal('Hey there');
//     expect(el.counter).to.equal(5);
//   });

//   it('increases the counter on button click', async () => {
//     const el: LayThem = await fixture(html`
//       <lay-them></lay-them>
//     `);
//     el.shadowRoot!.querySelector('button')!.click();

//     expect(el.counter).to.equal(6);
//   });

//   it('can override the title via attribute', async () => {
//     const el: LayThem = await fixture(html`
//       <lay-them title="attribute title"></lay-them>
//     `);

//     expect(el.title).to.equal('attribute title');
//   });

//   it('passes the a11y audit', async () => {
//     const el: LayThem = await fixture(html`
//       <lay-them></lay-them>
//     `);

//     await expect(el).shadowDom.to.be.accessible();
//   });
// });
