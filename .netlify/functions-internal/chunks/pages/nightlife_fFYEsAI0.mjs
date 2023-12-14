/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_fCW-vF1L.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$Layout } from './about_2munxwfN.mjs';
import { $ as $$H1 } from './coffee_CnzKKYaF.mjs';

const $$Astro = createAstro();
const $$Nightlife = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nightlife;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nightlife" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "H1", $$H1, { "text": "Nightlife" })} ${maybeRenderHead()}<img src="../images/nightlife.jpg" alt="wellness=" class="rounded-2xl shadow-xl mb-4 py-7  object-cover"> <h2> in progress</h2> ` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/nightlife.astro", void 0);

const $$file = "C:/Users/User/DiscoverVungTau/src/pages/nightlife.astro";
const $$url = "/nightlife";

export { $$Nightlife as default, $$file as file, $$url as url };
