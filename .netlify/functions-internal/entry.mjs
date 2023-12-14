import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_RwM4AIPW.mjs';

const _page0  = () => import('./chunks/generic_BW9AighY.mjs');
const _page1  = () => import('./chunks/index_YtTPc-j2.mjs');
const _page2  = () => import('./chunks/randomnumber_KhRsWEuE.mjs');
const _page3  = () => import('./chunks/restaurants_q9z6S8hW.mjs');
const _page4  = () => import('./chunks/nightlife_vw-GnmMr.mjs');
const _page5  = () => import('./chunks/wellness_SVq0ijEb.mjs');
const _page6  = () => import('./chunks/contact_k_Fp8zye.mjs');
const _page7  = () => import('./chunks/coffee_bQZ59Z1N.mjs');
const _page8  = () => import('./chunks/about_XoCDOjPt.mjs');
const _page9  = () => import('./chunks/guide_u_hmTkeb.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/randomnumber.js", _page2],["src/pages/restaurants.astro", _page3],["src/pages/nightlife.astro", _page4],["src/pages/wellness.astro", _page5],["src/pages/contact.astro", _page6],["src/pages/coffee.astro", _page7],["src/pages/about.astro", _page8],["src/pages/guide.astro", _page9]]);
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
