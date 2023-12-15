import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_mi3oYJE6.mjs';

const _page0  = () => import('./chunks/generic_LoI07R8C.mjs');
const _page1  = () => import('./chunks/index_qzM2J1Lv.mjs');
const _page2  = () => import('./chunks/accomodation_UH-3vS_7.mjs');
const _page3  = () => import('./chunks/randomnumber_KhRsWEuE.mjs');
const _page4  = () => import('./chunks/restaurants_CLudMvD8.mjs');
const _page5  = () => import('./chunks/nightlife_x0_RWru8.mjs');
const _page6  = () => import('./chunks/wellness_5XhYxB4p.mjs');
const _page7  = () => import('./chunks/contact_lX11__OJ.mjs');
const _page8  = () => import('./chunks/coffee_-8GgN6tO.mjs');
const _page9  = () => import('./chunks/about_6mUArzFM.mjs');
const _page10  = () => import('./chunks/guide__DS6D7NV.mjs');
const _page11  = () => import('./chunks/hotel_nzmNPTPe.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/accomodation.astro", _page2],["src/pages/randomnumber.js", _page3],["src/pages/restaurants.astro", _page4],["src/pages/nightlife.astro", _page5],["src/pages/wellness.astro", _page6],["src/pages/contact.astro", _page7],["src/pages/coffee.astro", _page8],["src/pages/about.astro", _page9],["src/pages/guide.astro", _page10],["src/pages/hotel.astro", _page11]]);
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
