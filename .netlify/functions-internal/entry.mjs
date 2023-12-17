import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_NsGkLCGD.mjs';

const _page0  = () => import('./chunks/generic_bFrNpLWq.mjs');
const _page1  = () => import('./chunks/index_WspXzwLm.mjs');
const _page2  = () => import('./chunks/accomodation_mKwgwQ8q.mjs');
const _page3  = () => import('./chunks/randomnumber_KhRsWEuE.mjs');
const _page4  = () => import('./chunks/restaurants_Z3qsv6Q4.mjs');
const _page5  = () => import('./chunks/nightlife_whq-8VXw.mjs');
const _page6  = () => import('./chunks/wellness_E98PbGnX.mjs');
const _page7  = () => import('./chunks/contact_W0s5ju9F.mjs');
const _page8  = () => import('./chunks/coffee_JCXspnbG.mjs');
const _page9  = () => import('./chunks/about_B9GCtBum.mjs');
const _page10  = () => import('./chunks/guide_YhzHD5PY.mjs');
const _page11  = () => import('./chunks/hotel_EaapS1qZ.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/accomodation.astro", _page2],["src/pages/randomnumber.js", _page3],["src/pages/restaurants.astro", _page4],["src/pages/nightlife.astro", _page5],["src/pages/wellness.astro", _page6],["src/pages/contact.astro", _page7],["src/pages/coffee.astro", _page8],["src/pages/about.astro", _page9],["src/pages/guide.astro", _page10],["src/pages/hotel.astro", _page11]]);
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
