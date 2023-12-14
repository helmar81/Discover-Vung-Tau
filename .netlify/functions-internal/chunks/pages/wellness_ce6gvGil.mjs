/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_fCW-vF1L.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Main, a as $$Layout } from './about_2munxwfN.mjs';
import { $ as $$H1 } from './coffee_CnzKKYaF.mjs';

const $$Astro = createAstro();
const $$Wellness = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Wellness;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Wellness" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Massage" })} ${maybeRenderHead()}<img src="../images/WellnessHomes.jpg" alt="wellness=" class="rounded-2xl shadow-xl mb-4  object-cover"> ` })} ` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/wellness.astro", void 0);

const $$file = "C:/Users/User/DiscoverVungTau/src/pages/wellness.astro";
const $$url = "/wellness";

export { $$Wellness as default, $$file as file, $$url as url };
