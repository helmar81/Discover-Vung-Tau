/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_fCW-vF1L.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Main, a as $$Layout } from './about_3hX_DK3Z.mjs';
import { $ as $$H1 } from './coffee_vdjlOH_B.mjs';

const $$Astro = createAstro();
const $$Nightlife = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nightlife;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nightlife" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Nightlife" })} ${maybeRenderHead()}<img src="../images/nightlife.jpg" alt="wellness=" class="rounded-2xl shadow-xl mb-4  object-cover"> <h2> in progress</h2> <ul class="app-card-list"></ul> ` })}` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/nightlife.astro", void 0);

const $$file = "C:/Users/User/DiscoverVungTau/src/pages/nightlife.astro";
const $$url = "/nightlife";

export { $$Nightlife as default, $$file as file, $$url as url };
