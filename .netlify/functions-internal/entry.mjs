import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_vbUOR3M3.mjs';

const _page0  = () => import('./chunks/generic_LoI07R8C.mjs');
const _page1  = () => import('./chunks/index_bJdA1Qoc.mjs');
const _page2  = () => import('./chunks/randomnumber_KhRsWEuE.mjs');
const _page3  = () => import('./chunks/restaurants_BPhnQ10D.mjs');
const _page4  = () => import('./chunks/nightlife_21lf_GJu.mjs');
const _page5  = () => import('./chunks/wellness_DkAHUZzh.mjs');
const _page6  = () => import('./chunks/contact_MZ26A5Nv.mjs');
const _page7  = () => import('./chunks/coffee_pjKtm0BI.mjs');
const _page8  = () => import('./chunks/about_Zb3bPXli.mjs');
const _page9  = () => import('./chunks/guide_3M4qdyKv.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/randomnumber.js", _page2],["src/pages/restaurants.astro", _page3],["src/pages/nightlife.astro", _page4],["src/pages/wellness.astro", _page5],["src/pages/contact.astro", _page6],["src/pages/coffee.astro", _page7],["src/pages/about.astro", _page8],["src/pages/guide.astro", _page9]]);
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
