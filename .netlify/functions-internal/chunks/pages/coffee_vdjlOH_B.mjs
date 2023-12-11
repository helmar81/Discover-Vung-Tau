/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent } from '../astro_fCW-vF1L.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Main, a as $$Layout } from './about_3hX_DK3Z.mjs';

const $$Astro$1 = createAstro();
const $$H1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$H1;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl text-blue-400 font-bold mb-12"> ${text}</h1>`;
}, "C:/Users/User/DiscoverVungTau/src/components/H1.astro", void 0);

const $$Astro = createAstro();
const $$Coffee = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Coffee;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Restaurants" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Coffee" })} ${maybeRenderHead()}<p>
Vietnam is the second largest coffee producer in the world after Brazil. According to the USDA Foreign Agricultural Service, Vietnam’s coffee production estimate for 2022/2023 is 29.750 million bags, green bean equivalent (GBE), based on lower yields, high production costs, and a drop in cultivation area1. Vietnam mainly grows Robusta coffee, which accounts for more than 90% of its total output and has an average annual turnover of around US$3 billion2. Coffee production has been a major source of income for Vietnam since the early 20th century, when it was introduced by the French in 1857. Coffee consumption in Vietnam is also very popular, especially instant coffee that is widely available and affordable. Do you like Vietnamese coffee? 😊
</p> <img src="../images/coffee.jpg" alt="wellness=" class="rounded-2xl shadow-xl mb-4  object-cover"> <img src="/images/newHaircut.jpg" alt="wellness=" class="rounded-2xl shadow-xl mb-4  object-cover"> ` })} ` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/coffee.astro", void 0);

const $$file = "C:/Users/User/DiscoverVungTau/src/pages/coffee.astro";
const $$url = "/coffee";

const coffee = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Coffee,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$H1 as $, coffee as c };
