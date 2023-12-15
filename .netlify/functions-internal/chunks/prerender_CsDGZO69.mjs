/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, j as renderSlot, k as renderHead, s as spreadAttributes, u as unescapeHTML, F as Fragment } from './astro_V6vkh6i_.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from './pages/generic_M4baSRN-.mjs';
/* empty css                           */
import { optimize } from 'svgo';
/* empty css                         */

const $$Astro$o = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center px-24 py-12 max-sm:px-5 max-sm:py-10
max-w-7xl w-full mx-auto"> <a href="/" class="flex items-center gap-x-3 "> <img src="/heartbeat.png" alt="heartbeat icon"${addAttribute(28, "width")}${addAttribute(24, "height")} class="rounded-2xl aspect-thumbnail object-cover"> <p class="uppercase text-1xl flex items-center gap-x-4 md: text-1xl  text-zinc-900">DISCOVER</p> </a> <ul class="flex gap-x-5"> <li><a href="/about" class="text-teal-900 font-bold">About</a></li> <li><a href="../guide" class="text-teal-900 font-bold">Guide</a></li> <li><a href="/contact" class="text-teal-900 font-bold">Contact</a></li> </ul> </header>`;
}, "C:/Users/User/DiscoverVungTau/src/components/Header.astro", void 0);

const $$Astro$n = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center mt-4 p-4"> <a href="https://www.facebook.com/helmar.bachle" class="ml-4" aria-label="Facebook" rel="noopener"> <svg class="h-6 w-6 hover:text-hot-pink" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16"> <g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"> <path d="M23.32,6.44c0.212-0.177,0.241-0.492,0.065-0.704c-0.068-0.082-0.161-0.14-0.265-0.166l-0.79-0.2 c-0.268-0.067-0.431-0.339-0.364-0.606C21.974,4.731,21.986,4.7,22,4.67l0.44-0.89c0.12-0.249,0.015-0.548-0.233-0.668 C22.099,3.06,21.976,3.049,21.86,3.08l-2,0.56c-0.151,0.044-0.314,0.014-0.44-0.08c-0.865-0.649-1.918-1-3-1c-2.761,0-5,2.239-5,5 l0,0v0.36c0.001,0.127-0.094,0.235-0.22,0.25C8.39,8.5,5.7,7.07,2.8,3.73c-0.128-0.142-0.325-0.2-0.51-0.15 C2.124,3.656,2.013,3.817,2,4C1.599,5.645,1.761,7.377,2.46,8.92c0.062,0.123,0.013,0.274-0.11,0.336 C2.303,9.279,2.251,9.288,2.2,9.28L1.08,9.06C0.807,9.016,0.551,9.202,0.507,9.474C0.498,9.533,0.499,9.592,0.51,9.65 c0.175,1.555,1.047,2.945,2.37,3.78c0.124,0.06,0.176,0.21,0.116,0.334c-0.025,0.051-0.065,0.092-0.116,0.116l-0.53,0.21 c-0.256,0.103-0.381,0.394-0.278,0.65c0.005,0.014,0.011,0.027,0.018,0.04c0.595,1.302,1.791,2.229,3.2,2.48 c0.13,0.047,0.197,0.191,0.15,0.32c-0.025,0.07-0.08,0.124-0.15,0.15C3.93,18.292,2.471,18.575,1,18.56 c-0.276-0.055-0.545,0.124-0.6,0.4s0.124,0.545,0.4,0.6l0,0c2.548,1.208,5.321,1.866,8.14,1.93c2.479,0.038,4.915-0.658,7-2 c3.484-2.326,5.571-6.241,5.56-10.43V8.19c0.001-0.147,0.067-0.286,0.18-0.38L23.32,6.44z" stroke="none" fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path> </g> </svg> </a> <a href="https://www.youtube.com/@alwayssomewhere716" class="ml-4" aria-label="YouTube" rel="noopener" target="”_blank”"> <svg class="h-6 w-6 hover:text-hot-pink" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16"> <g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"> <path d="M20.06,3.5H3.94C1.764,3.5,0,5.264,0,7.44v9.12c0,2.176,1.764,3.94,3.94,3.94c0,0,0,0,0,0h16.12 c2.176,0,3.94-1.764,3.94-3.94l0,0V7.44C24,5.264,22.236,3.5,20.06,3.5L20.06,3.5z M16.54,12l-6.77,4.36 c-0.232,0.149-0.542,0.082-0.691-0.151C9.028,16.129,9,16.035,9,15.94V7.28c0-0.276,0.225-0.5,0.501-0.499 c0.095,0,0.189,0.028,0.269,0.079l6.77,4.33c0.232,0.15,0.299,0.459,0.149,0.691c-0.038,0.06-0.089,0.11-0.149,0.149V12z" stroke="none" fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path> </g> </svg> </a> <a href="https://github.com/helmar81" class="ml-4" aria-label="Github" target="”_blank”"> <svg class="h-6 w-6 hover:text-hot-pink" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16">&gt;<g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"> <path d="M12,0.28C5.373,0.278-0.002,5.649-0.004,12.276c-0.002,5.197,3.342,9.804,8.284,11.414h0.29 c0.551,0.034,1.026-0.385,1.06-0.936c0.003-0.041,0.003-0.083,0-0.124v-0.21c0-0.17,0-0.4,0-1.09c-0.02-0.132-0.092-0.251-0.2-0.33 c-0.118-0.095-0.272-0.132-0.42-0.1c-2.68,0.58-3.25-1.1-3.29-1.21C5.384,18.801,4.784,18.037,4,17.5 c-0.047-0.041-0.097-0.077-0.15-0.11c0.116-0.063,0.249-0.087,0.38-0.07c0.511,0.071,0.948,0.405,1.15,0.88 c0.804,1.4,2.572,1.913,4,1.16c0.15-0.065,0.258-0.2,0.29-0.36c0.038-0.463,0.236-0.897,0.56-1.23 c0.206-0.183,0.225-0.499,0.042-0.706c-0.081-0.091-0.191-0.149-0.312-0.164c-2.37-0.27-4.79-1.1-4.79-5.19 c-0.02-1.027,0.356-2.023,1.05-2.78C6.351,8.786,6.386,8.579,6.31,8.4C6.032,7.624,6.036,6.774,6.32,6 c0.924,0.164,1.791,0.559,2.52,1.15c0.122,0.086,0.277,0.112,0.42,0.07c0.893-0.242,1.814-0.367,2.74-0.37 c0.929,0.001,1.854,0.125,2.75,0.37c0.14,0.039,0.291,0.013,0.41-0.07c0.73-0.589,1.597-0.984,2.52-1.15 c0.272,0.77,0.272,1.61,0,2.38c-0.076,0.179-0.041,0.386,0.09,0.53c0.687,0.75,1.062,1.733,1.05,2.75c0,4.09-2.43,4.91-4.81,5.18 c-0.275,0.029-0.474,0.274-0.446,0.549c0.013,0.129,0.076,0.248,0.176,0.331c0.448,0.463,0.671,1.099,0.61,1.74v3.18 c-0.01,0.317,0.122,0.621,0.36,0.83c0.303,0.227,0.696,0.298,1.06,0.19c6.285-2.103,9.676-8.902,7.573-15.187 C21.71,3.592,17.147,0.296,12,0.28z" stroke="none" fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </a> <a href="mailto:uspekhiwebdesign@gmail.com" class="ml-4" aria-label="Email" rel="noopener"> <svg class="h-6 w-6 hover:text-hot-pink" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16">&gt;<g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"> <path d="M 2.25,4.5h19.5c0.828,0,1.5,0.672,1.5,1.5v12c0,0.828-0.672,1.5-1.5,1.5H2.25c-0.828,0-1.5-0.672-1.5-1.5V6 C0.75,5.172,1.422,4.5,2.25,4.5z " stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M 15.687,9.975L19.5,13.5 " stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M 8.313,9.975L4.5,13.5 " stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M 22.88,5.014l-9.513,6.56 c-0.823,0.568-1.911,0.568-2.734,0L1.12,5.014" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </a> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "line-md:instagram" })}</div>`;
}, "C:/Users/User/DiscoverVungTau/src/components/Social.astro", void 0);

const $$Astro$m = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="py-9 lg:py-12 text-center bg-slate-300" data-astro-cid-k2f5zb5c> <div class="footer-nav" data-astro-cid-k2f5zb5c> <nav data-astro-cid-k2f5zb5c> <ul data-astro-cid-k2f5zb5c> <li data-astro-cid-k2f5zb5c><a href="/" data-astro-cid-k2f5zb5c>Home</a></li> <li data-astro-cid-k2f5zb5c><a href="about" data-astro-cid-k2f5zb5c>About</a></li> <li data-astro-cid-k2f5zb5c><a href="/guide" data-astro-cid-k2f5zb5c>Guide</a></li> <li data-astro-cid-k2f5zb5c><a href="/contact" data-astro-cid-k2f5zb5c>Contact</a></li> </ul> </nav> </div> ${renderComponent($$result, "Social", $$Social, { "data-astro-cid-k2f5zb5c": true })} <a href="https://uspekhi.web.app" rel="noopener" target="_blank" data-astro-cid-k2f5zb5c>
USPEKHI© ${(/* @__PURE__ */ new Date()).getFullYear()} </a> </footer>  `;
}, "C:/Users/User/DiscoverVungTau/src/components/footer.astro", void 0);

const $$Astro$l = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/User/DiscoverVungTau/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$k = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><meta property="og:image"', "><title>", "</title>", '<script async src="https://www.googletagmanager.com/gtag/js?id=G-FC667HVLH8"><\/script>', "</head> ", ' <body class="min-h-screen"> ', " ", " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(image, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/User/DiscoverVungTau/src/layouts/Layout.astro", void 0);

const $$Astro$j = createAstro();
const $$H1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$H1;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-4xl text-blue-600 font-bold mb-12"> ${text}</h1>`;
}, "C:/Users/User/DiscoverVungTau/src/components/H1.astro", void 0);

const $$Astro$i = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<main class="px-24 max-w-5xl mx-auto w-full max-sm:px-5"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "C:/Users/User/DiscoverVungTau/src/components/Main.astro", void 0);

const sunset = new Proxy({"src":"/_astro/sunset.mTU8EjvX.webp","width":4032,"height":2268,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$h = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Discover Vung Tau" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Vung Tau" })} ${renderComponent($$result3, "Image", $$Image, { "src": sunset, "alt": "sunset", "class": "rounded-2xl shadow-xl mb-4  object-cover inline", "decoding": "async", "loading": "lazy" })} ${maybeRenderHead()}<div class="mx-auto max-w-xl text-justify py-3.5"> <p class="text-lg leading-relaxed text-gray-600n justify-around">
It is a popular weekend escape from Ho Chi Minh City, it rocks at weekends and holidays when beach-starved locals and expats descend in numbers, but it is relatively quiet during the week. The city enjoys a spectacular location on a peninsula in the south, with the ocean on three sides. The light and sea air make it a refreshing break from sultry Saigon.
		The climate is very pleasant,the temperature never drops below 23 Celsius and the best season is between December and June, as it rarely rains.
		It is favored by many Australians, British and Americans. They enjoy the warm climate and the low costs of living. You can rent an apartment for less than 200$ in a homestay with all bills included
		There is a great community, expats who work in the oil industry, teachers from all over the world, pensioners and many tourists rejoice the relaxing lifestyle. Regularly a group of Scandinavians and other foreigners have their meet up in one of the many bars. The locals are very approachable as they want to talk to foreigners to improve their English language skills.
</p> <div class="mt-8"></div> </div> <div class="mx-auto max-w-xl text-justify py-3.5"> <p class="text-lg leading-relaxed text-gray-600n justify-around">
Vung Tau has a population of about 400,000 people and is a 2 hours drive from Ho Chi Minh City.
		You find all amenities nearby, just step out of your door, walk 20 steps and you have a convenient store in front of you. Many of them are open until midnight.
		It has a high density of hotels, restaurants, and bars. The city is progressing rapidly and becoming more and more popular as a tourist destination.
		The beaches are nice, there is no air pollution and the traffic is moderate. You can get to anywhere in Vung Tau even by bicycle in less than 30 minutes.
</p> <div class="mt-8"></div> </div> ` })} ` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/index.astro", void 0);

const $$file$9 = "C:/Users/User/DiscoverVungTau/src/pages/index.astro";
const $$url$9 = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$9,
    url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const room = new Proxy({"src":"/_astro/room.Aioi1K4U.jpg","width":4032,"height":2268,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$g = createAstro();
const $$Accomodation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Accomodation;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Accomodation" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Accomodation" })} ${maybeRenderHead()}<div class="flex justify-center items-center"> ${renderComponent($$result3, "Image", $$Image, { "src": room, "alt": "rent", "class": "rounded-2xl shadow-xl mb-4 object-cover ", "width": "1024", "height": "800", "decoding": "async", "loading": "lazy" })} </div> <h2> get a room for less than 150$</h2> <a href="/hotel" class="flex items-center gap-x-3 "> <img src="/forward.png" alt="forward icon"${addAttribute(48, "width")}${addAttribute(44, "height")} class=" color grayscale align-right"> </a><a href="/hotel" class="flex items-center gap-x-3 "></a>` })}` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/accomodation.astro", void 0);

const $$file$8 = "C:/Users/User/DiscoverVungTau/src/pages/accomodation.astro";
const $$url$8 = "/accomodation";

const accomodation = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Accomodation,
    file: $$file$8,
    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const kem = new Proxy({"src":"/_astro/kem.6NEItJiJ.jpg","width":4032,"height":2268,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const menue = new Proxy({"src":"/_astro/menue.BWaWHBmR.webp","width":4032,"height":2268,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const shrimps = new Proxy({"src":"/_astro/shrimps.kibzxtXw.jpg","width":4032,"height":2268,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$f = createAstro();
const $$Restaurants = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Restaurants;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Restaurants" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Dinning" })} ${maybeRenderHead()}<div class="flex justify-center items-center"> ${renderComponent($$result3, "Image", $$Image, { "src": kem, "alt": "sunset", "class": "rounded-2xl shadow-xl mb-4 object-cover ", "width": "1024", "height": "800", "decoding": "async", "loading": "lazy" })} </div> <div class="flex justify-center items-center"> ${renderComponent($$result3, "Image", $$Image, { "src": shrimps, "alt": "sunset", "class": "rounded-2xl shadow-xl mb-4 object-cover ", "width": "1024", "height": "800", "decoding": "async", "loading": "lazy" })} </div> <div class="flex justify-center items-center"> ${renderComponent($$result3, "Image", $$Image, { "src": menue, "alt": "sunset", "class": "rounded-2xl shadow-xl mb-4 object-cover ", "width": "1024", "height": "800", "decoding": "async", "loading": "lazy" })} </div> <a href="/coffee" class="flex items-center gap-x-3 "> <img src="/forward.png" alt="forward icon"${addAttribute(48, "width")}${addAttribute(44, "height")} class=" color grayscale align-right"> </a><a href="/coffee" class="flex items-center gap-x-3 "></a>` })}` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/restaurants.astro", void 0);

const $$file$7 = "C:/Users/User/DiscoverVungTau/src/pages/restaurants.astro";
const $$url$7 = "/restaurants";

const restaurants = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Restaurants,
    file: $$file$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const nightlife$1 = new Proxy({"src":"/_astro/nightlife.K-tvQfsr.jpg","width":2268,"height":4032,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$e = createAstro();
const $$Nightlife = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Nightlife;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nightlife" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Nightlife" })} ${maybeRenderHead()}<div class="flex justify-center items-center"> ${renderComponent($$result3, "Image", $$Image, { "src": nightlife$1, "alt": "sunset", "class": "rounded-2xl shadow-xl mb-4 object-cover ", "width": "1024", "height": "800", "decoding": "async", "loading": "lazy" })} </div> <h2> in progress</h2> <a href="/wellness" class="flex items-center gap-x-3 "> <img src="/forward.png" alt="forward icon"${addAttribute(48, "width")}${addAttribute(44, "height")} class=" color grayscale align-right"> </a>` })}` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/nightlife.astro", void 0);

const $$file$6 = "C:/Users/User/DiscoverVungTau/src/pages/nightlife.astro";
const $$url$6 = "/nightlife";

const nightlife = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Nightlife,
    file: $$file$6,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const newHaircut = new Proxy({"src":"/_astro/newHaircut.Qhx_FJMG.jpg","width":1095,"height":1243,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const WellnessHomes = new Proxy({"src":"/_astro/WellnessHomes.XMDVwQUA.jpg","width":4032,"height":2268,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$d = createAstro();
const $$Wellness = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Wellness;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Wellness" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Wellness" })} ${maybeRenderHead()}<div class="flex justify-center items-center"> ${renderComponent($$result3, "Image", $$Image, { "src": WellnessHomes, "alt": "sunset", "class": "rounded-2xl shadow-xl mb-4 object-cover ", "width": "1024", "height": "800", "decoding": "async", "loading": "lazy" })} </div> <div class="mx-auto max-w-xl text-justify py-3.5"> <p class="text-lg leading-relaxed text-gray-600n justify-around">
Wellness Homes Vung Tau offers specific health and wellness services and is proud to be one of the most prestigious wellness providers in Vietnam, led by physicians. Situated near the beautiful Long Cung resort beach in Vung Tau, we aim to extend our services to foreigners residing in Vung Tau and other locations across Vietnam. 
	If you're interested in general health and well-being without resorting to drugs, we offer services such as:
</p> <div class="mt-8"></div> <div class="text-lg leading-relaxed text-gray-600n justify-around"> <ol> <li>
- Vein intersection and clearance of blockages in energy and blood flows.
</li> <li>
- Rehabilitation of blood flow to prevent blood clots that may lead to strokes.
</li> <li>
- Insomnia treatment to reduce stress and anxiety.
</li> </ol> </div> </div> <div class="mx-auto max-w-xl text-justify py-3.5"> <p class="text-lg leading-relaxed text-gray-600n justify-around">
Their focus is on providing treatments and services that enhance both physical and mental well-being.
</p> <div class="mt-8"></div> </div> <div class="mx-auto max-w-xl text-justify py-3.5"> <p class="text-lg leading-relaxed text-gray-500 mt-3">
You find them here:
</p> <div class="mt-5"> <div class="flex items-center mt-2 space-x-2 text-gray-600"> <span>B4 Thuỳ Dương 3, Ward 10 Vung Tau City, Vietnam</span> </div><div class="flex items-center mt-2 space-x-2 text-gray-600"> <a href="mailto:hello@stablotemplate.com">hoctap1537@gmail.com</a> </div><div class="flex items-center mt-2 space-x-2 text-gray-600"> <a href="tel:+84 0908 098 138">+84 0908 098 138</a> </div> </div> <card></card> <div class="mx-auto max-w-xl text-justify py-3.5"> <p class="text-lg leading-relaxed text-gray-600n justify-around">
Get a new haircut for 1.50$
</p> <div class="mt-8"></div> <div class="flex justify-center items-center"> ${renderComponent($$result3, "Image", $$Image, { "src": newHaircut, "alt": "sunset", "class": "rounded-2xl shadow-xl mb-4 object-cover ", "width": "1024", "height": "800", "decoding": "async", "loading": "lazy" })} </div> <a href="/accomodation" class="flex items-center gap-x-3 "> <img src="/forward.png" alt="forward icon"${addAttribute(48, "width")}${addAttribute(44, "height")} class=" color grayscale align-right"> </a><a href="/accomodation" class="flex items-center gap-x-3 "></a></div></div>` })}` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/wellness.astro", void 0);

const $$file$5 = "C:/Users/User/DiscoverVungTau/src/pages/wellness.astro";
const $$url$5 = "/wellness";

const wellness = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Wellness,
    file: $$file$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg",
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/User/DiscoverVungTau/src/components/container.astro", void 0);

const $$Astro$b = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    size = "md",
    style = "primary",
    block,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    md: "px-5 py-2.5",
    lg: "px-6 py-3"
  };
  const styles = {
    outline: "border-2 border-black hover:bg-black text-black hover:text-white",
    primary: "bg-black text-white hover:bg-gray-900  border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/User/DiscoverVungTau/src/components/button.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$a = createAstro();
const $$Contactform = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Contactform;
  return renderTemplate(_a || (_a = __template(["<!-- To make this contact form work, create your free access key from https://web3forms.com/\n     Then you will get all form submissions in your email inbox. -->", '<form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation" novalidate data-astro-cid-uwnxe3i2> <input type="hidden" name="access_key" value="923de864-4f3e-49f2-83f3-b23efd07cf67" data-astro-cid-uwnxe3i2> <!-- Create your free access key from https://web3forms.com/ --> <input type="checkbox" class="hidden" style="display:none" name="botcheck" data-astro-cid-uwnxe3i2> <div class="mb-5" data-astro-cid-uwnxe3i2> <input type="text" placeholder="Full Name" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" name="name" data-astro-cid-uwnxe3i2> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide your full name.\n</div> </div> <div class="mb-5" data-astro-cid-uwnxe3i2> <label for="email_address" class="sr-only" data-astro-cid-uwnxe3i2>Email Address</label><input id="email_address" type="email" placeholder="Email Address" name="email" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" data-astro-cid-uwnxe3i2> <div class="empty-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide your email address.\n</div> <div class="invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease provide a valid email address.\n</div> </div> <div class="mb-3" data-astro-cid-uwnxe3i2> <textarea name="message" required placeholder="Your Message" class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" data-astro-cid-uwnxe3i2></textarea> <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1" data-astro-cid-uwnxe3i2>\nPlease enter your message.\n</div> </div> ', ' <div id="result" class="mt-3 text-center" data-astro-cid-uwnxe3i2></div> </form>  <script>\n  const form = document.getElementById("form");\n  const result = document.getElementById("result");\n\n  form.addEventListener("submit", function (e) {\n    e.preventDefault();\n    form.classList.add("was-validated");\n    if (!form.checkValidity()) {\n      form.querySelectorAll(":invalid")[0].focus();\n      return;\n    }\n    const formData = new FormData(form);\n    const object = Object.fromEntries(formData);\n    const json = JSON.stringify(object);\n\n    result.innerHTML = "Sending...";\n\n    fetch("https://api.web3forms.com/submit", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n        Accept: "application/json",\n      },\n      body: json,\n    })\n      .then(async (response) => {\n        let json = await response.json();\n        if (response.status == 200) {\n          result.classList.add("text-green-500");\n          result.innerHTML = json.message;\n        } else {\n          console.log(response);\n          result.classList.add("text-red-500");\n          result.innerHTML = json.message;\n        }\n      })\n      .catch((error) => {\n        console.log(error);\n        result.innerHTML = "Something went wrong!";\n      })\n      .then(function () {\n        form.reset();\n        form.classList.remove("was-validated");\n        setTimeout(() => {\n          result.style.display = "none";\n        }, 5000);\n      });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Button", $$Button, { "type": "submit", "size": "lg", "block": true, "data-astro-cid-uwnxe3i2": true }, { "default": ($$result2) => renderTemplate`Send Message` }));
}, "C:/Users/User/DiscoverVungTau/src/components/contactform.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({


});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({


});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$9 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "C:/Users/User/DiscoverVungTau/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$8 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet> ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)} </svg>`;
}, "C:/Users/User/DiscoverVungTau/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$7 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "C:/Users/User/DiscoverVungTau/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$6 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}> ${title ? renderTemplate`<title>${title}</title>` : ""} <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use> </svg>`;
}, "C:/Users/User/DiscoverVungTau/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$5 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`   ${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16"> <div> <h2 class="font-medium text-2xl text-gray-800">Contact me</h2> <p class="text-lg leading-relaxed text-gray-500 mt-3">
Have something to say? I am here to respond. Fill up the form or send
            email or call phone.
</p> <div class="mt-5"> <div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:map-marker" })} <span>Asia</span> </div><div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:envelope" })}<a href="mailto:globaltraveller58@gmail.com">globaltraveller58@gmail.com</a> </div><div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:phone" })}<a href="tel:+84 383754137">+84 383754137</a> </div> </div> </div> <div> ${renderComponent($$result3, "Contactform", $$Contactform, {})} </div> </div> `, "desc": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result4) => renderTemplate`I am here to reply.` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Contact` })}` })} ` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/contact.astro", void 0);

const $$file$4 = "C:/Users/User/DiscoverVungTau/src/pages/contact.astro";
const $$url$4 = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const sun = new Proxy({"src":"/_astro/sun.-HXIuUsg.jpg","width":4032,"height":2268,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Coffee = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Coffee;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Restaurants" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Coffee" })} ${maybeRenderHead()}<p>
Vietnam is the second largest coffee producer in the world after Brazil. According to the USDA Foreign Agricultural Service, Vietnam’s coffee production estimate for 2022/2023 is 29.750 million bags, green bean equivalent (GBE), based on lower yields, high production costs, and a drop in cultivation area1. Vietnam mainly grows Robusta coffee, which accounts for more than 90% of its total output and has an average annual turnover of around US$3 billion2. Coffee production has been a major source of income for Vietnam since the early 20th century, when it was introduced by the French in 1857. Coffee consumption in Vietnam is also very popular, especially instant coffee that is widely available and affordable. Do you like Vietnamese coffee? 😊
</p> <div class="flex justify-center items-center"> ${renderComponent($$result3, "Image", $$Image, { "src": sun, "alt": "sunset", "class": "rounded-2xl shadow-xl mb-4 object-cover ", "width": "1024", "height": "800", "decoding": "async", "loading": "lazy" })} </div> <img src="/images/garden.jpg" alt="wellness=" class="rounded-2xl shadow-xl mb-4  object-cover"> <a href="/nightlife" class="flex items-center gap-x-3 "> <img src="/forward.png" alt="forward icon"${addAttribute(48, "width")}${addAttribute(44, "height")} class=" color grayscale align-right"> </a><a href="/nightlife" class="flex items-center gap-x-3 "></a>` })}` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/coffee.astro", void 0);

const $$file$3 = "C:/Users/User/DiscoverVungTau/src/pages/coffee.astro";
const $$url$3 = "/coffee";

const coffee = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Coffee,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center"> <div class="bg-gray-300 rounded-full p-2"> <img class="h-36 w-39 rounded-full" src="/images/customer.webp" alt="Avatar 1"> </div> <p class="mt-2 text-center text-sm">Helmar</p> </div> <div class="mx-auto max-w-xl text-justify py-3.5"> <p class="text-lg leading-relaxed text-gray-600n justify-around px-px mx-3">
AS A LEVEL 3 SUPPORT ASSOCIATE FOR AMAZON, I EXCEL AT HANDLING COMPLEX QUERIES AND ESCALATED ISSUES FROM OUR PREMIUM SELLERS. IN MY SPARE TIME, I AM PASSIONATE ABOUT STAYING UP-TO-DATE ON THE LATEST TECHNOLOGIES AND ENJOY BUILDING APPS WITH ASTRO.JS AND SVELTEKIT. WITH A LOVE FOR TRAVEL, I HAVE VISITED 67 COUNTRIES AND BRING A DIVERSE PERSPECTIVE TO MY WORK. WHETHER AT HOME OR ABROAD, I AM ALWAYS SEEKING NEW CHALLENGES AND OPPORTUNITIES TO GROW.
</p> <div class="mt-8"> <p class="text-lg leading-relaxed text-gray-600n justify-around uppercase mx-3">I am also Creator, Producer, Developer and everything that comes with video, photography and Web Development.
          Here are some videos  I have uploaded on youtube</p> <div style="display: flex; justify-content: center rounded-2xl shadow-xl mb-4  object-cover"> <iframe width="560" height="315" src="https://www.youtube.com/embed/sOG76pmM6cI?si=wc8T5KBYe9zFpbyI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> </div></div>` })}` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/about.astro", void 0);

const $$file$2 = "C:/Users/User/DiscoverVungTau/src/pages/about.astro";
const $$url$2 = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "C:/Users/User/DiscoverVungTau/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$Guide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Guide;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Guide", "data-astro-cid-5tcejxga": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-5tcejxga": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="text-lg leading-relaxed text-gray-600n justify-around mx-auto max-w-xl text-justify py-3.5" data-astro-cid-5tcejxga>Vung Tau is a lively and bustling area with a high density of restaurants and coffee shops that offer a variety of cuisines and beverages. You can also find many massage shops where you can relax and enjoy a soothing treatment. The nightlife is vibrant and exciting, with many bars, clubs, and karaoke venues to choose from. Whether you are looking for a casual or a fancy experience, it has something for everyone.</h2> <ul role="list" class="link-card-grid " data-astro-cid-5tcejxga> ${renderComponent($$result3, "Card", $$Card, { "href": "/restaurants", "title": "Restaurants", "body": "where to eat", "icon": "uil:restaurant", "data-astro-cid-5tcejxga": true })} ${renderComponent($$result3, "Card", $$Card, { "href": "/coffee", "title": "Coffee Shops", "body": "there are plenty of them", "icon": "uil:envelope", "data-astro-cid-5tcejxga": true })} ${renderComponent($$result3, "Card", $$Card, { "href": "/nightlife", "title": "Nightlife", "body": "explore the many bars here", "icon": "uil:envelope", "data-astro-cid-5tcejxga": true })} ${renderComponent($$result3, "Card", $$Card, { "href": "/wellness", "title": "Wellness", "body": "Massage or medical treatment \u2764\uFE0F", "icon": "uil:envelope", "data-astro-cid-5tcejxga": true })} ${renderComponent($$result3, "Card", $$Card, { "href": "/accomodation", "title": "Accomodation", "body": "you have many options", "icon": "uil:envelope", "data-astro-cid-5tcejxga": true })} ${renderComponent($$result3, "Card", $$Card, { "href": "/hotel", "title": "Hotel", "body": "thousands of hotels", "icon": "uil:envelope", "data-astro-cid-5tcejxga": true })} </ul> ` })} ` })} `;
}, "C:/Users/User/DiscoverVungTau/src/pages/guide.astro", void 0);

const $$file$1 = "C:/Users/User/DiscoverVungTau/src/pages/guide.astro";
const $$url$1 = "/guide";

const guide = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Guide,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const pearl = new Proxy({"src":"/_astro/pearl.ib1zBWCv.webp","width":2268,"height":4032,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Hotel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hotel;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hotel" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Hotels" })} ${maybeRenderHead()}<div class="flex justify-center items-center"> ${renderComponent($$result3, "Image", $$Image, { "src": pearl, "alt": "sunset", "class": "rounded-2xl shadow-xl mb-4 object-cover ", "width": "1024", "height": "800", "decoding": "async", "loading": "lazy" })} </div> <h2> might cost you 150$/night</h2> <a href="/guide" class="flex items-center gap-x-3 "> <img src="/forward.png" alt="forward icon"${addAttribute(48, "width")}${addAttribute(44, "height")} class=" color grayscale align-right"> </a><a href="/guide" class="flex items-center gap-x-3 "></a>` })}` })}`;
}, "C:/Users/User/DiscoverVungTau/src/pages/hotel.astro", void 0);

const $$file = "C:/Users/User/DiscoverVungTau/src/pages/hotel.astro";
const $$url = "/hotel";

const hotel = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Hotel,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { accomodation as a, coffee as b, contact as c, about as d, guide as g, hotel as h, index as i, nightlife as n, restaurants as r, wellness as w };
