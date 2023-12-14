/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent } from '../astro_fCW-vF1L.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Main, a as $$Layout } from './about_2munxwfN.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "C:/Users/User/DiscoverVungTau/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Guide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Guide;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Guide", "data-astro-cid-5tcejxga": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-5tcejxga": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="text-center uppercase" data-astro-cid-5tcejxga>Vung Tau is a lively and bustling area with a high density of restaurants and coffee shops that offer a variety of cuisines and beverages. You can also find many massage shops where you can relax and enjoy a soothing treatment. The nightlife is vibrant and exciting, with many bars, clubs, and karaoke venues to choose from. Whether you are looking for a casual or a fancy experience, it has something for everyone.</h2> <ul role="list" class="link-card-grid " data-astro-cid-5tcejxga> ${renderComponent($$result3, "Card", $$Card, { "href": "/restaurants", "title": "Restaurants", "body": "where to eat", "icon": "uil:envelope", "data-astro-cid-5tcejxga": true })} ${renderComponent($$result3, "Card", $$Card, { "href": "/coffee", "title": "Coffee Shops", "body": "there are plenty of them", "icon": "uil:envelope", "data-astro-cid-5tcejxga": true })} ${renderComponent($$result3, "Card", $$Card, { "href": "/nightlife", "title": "Nightlife", "body": "explore the many bars here", "icon": "uil:envelope", "data-astro-cid-5tcejxga": true })} ${renderComponent($$result3, "Card", $$Card, { "href": "/wellness", "title": "Wellness", "body": "Massage or medical treatment \u2764\uFE0F", "icon": "uil:envelope", "data-astro-cid-5tcejxga": true })} </ul> <p data-astro-cid-5tcejxga>still in progress</p> <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" data-astro-cid-5tcejxga>
Back
</button> ` })} ` })} `;
}, "C:/Users/User/DiscoverVungTau/src/pages/guide.astro", void 0);

const $$file = "C:/Users/User/DiscoverVungTau/src/pages/guide.astro";
const $$url = "/guide";

export { $$Guide as default, $$file as file, $$url as url };
