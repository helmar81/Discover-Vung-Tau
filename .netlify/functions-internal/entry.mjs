import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_nQVwS0eW.mjs';

const _page0  = () => import('./chunks/generic_bFrNpLWq.mjs');
const _page1  = () => import('./chunks/index_t8Z3W1dr.mjs');
const _page2  = () => import('./chunks/accomodation_Mxzd5Z0v.mjs');
const _page3  = () => import('./chunks/randomnumber_KhRsWEuE.mjs');
const _page4  = () => import('./chunks/restaurants_xfOeB7mB.mjs');
const _page5  = () => import('./chunks/nightlife_mLTCR7Zi.mjs');
const _page6  = () => import('./chunks/wellness_NYRKPaAZ.mjs');
const _page7  = () => import('./chunks/contact_0ufxkRL7.mjs');
const _page8  = () => import('./chunks/coffee_d1prdEI4.mjs');
const _page9  = () => import('./chunks/about_qNb_PAn9.mjs');
const _page10  = () => import('./chunks/guide_VkC6cDBn.mjs');
const _page11  = () => import('./chunks/hotel_HMlDhNtE.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/accomodation.astro", _page2],["src/pages/randomnumber.js", _page3],["src/pages/restaurants.astro", _page4],["src/pages/nightlife.astro", _page5],["src/pages/wellness.astro", _page6],["src/pages/contact.astro", _page7],["src/pages/coffee.astro", _page8],["src/pages/about.astro", _page9],["src/pages/guide.astro", _page10],["src/pages/hotel.astro", _page11]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
