/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_fCW-vF1L.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Main, a as $$Layout } from './about_2munxwfN.mjs';
import { $ as $$H1 } from './coffee_CnzKKYaF.mjs';

const $$Astro = createAstro();
const $$Restaurants = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Restaurants;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Restaurants" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Dinning" })} ${maybeRenderHead()}<img src="../images/360.jpg" alt="wellness=" class="rounded-2xl shadow-xl mb-4  object-cover"> <img src="../images/fishMarket.jpg" alt="wellness=" class="rounded-2xl shadow-xl mb-4  object-cover"> <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Back
</button> ` })} ` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/restaurants.astro", void 0);

const $$file = "C:/Users/User/DiscoverVungTau/src/pages/restaurants.astro";
const $$url = "/restaurants";

export { $$Restaurants as default, $$file as file, $$url as url };
