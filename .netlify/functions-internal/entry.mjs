import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_PZU0VHWP.mjs';

const _page0  = () => import('./chunks/generic_bFrNpLWq.mjs');
const _page1  = () => import('./chunks/index_myECL10M.mjs');
const _page2  = () => import('./chunks/accomodation_tVXAHs_u.mjs');
const _page3  = () => import('./chunks/randomnumber_KhRsWEuE.mjs');
const _page4  = () => import('./chunks/restaurants_aO3BSyhf.mjs');
const _page5  = () => import('./chunks/nightlife_kaihES8J.mjs');
const _page6  = () => import('./chunks/wellness_xg4g_c1R.mjs');
const _page7  = () => import('./chunks/contact_LNIjCIiR.mjs');
const _page8  = () => import('./chunks/service_YBslVcvQ.mjs');
const _page9  = () => import('./chunks/coffee_tzGCdg3J.mjs');
const _page10  = () => import('./chunks/about_AeggXwcL.mjs');
const _page11  = () => import('./chunks/guide_l-r0uM2q.mjs');
const _page12  = () => import('./chunks/hotel_0Z3_MahN.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/accomodation.astro", _page2],["src/pages/randomnumber.js", _page3],["src/pages/restaurants.astro", _page4],["src/pages/nightlife.astro", _page5],["src/pages/wellness.astro", _page6],["src/pages/contact.astro", _page7],["src/pages/service.astro", _page8],["src/pages/coffee.astro", _page9],["src/pages/about.astro", _page10],["src/pages/guide.astro", _page11],["src/pages/hotel.astro", _page12]]);
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
