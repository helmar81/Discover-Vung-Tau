import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_fCW-vF1L.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.XNrkQasT.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/randomnumber","type":"endpoint","pattern":"^\\/randomnumber$","segments":[[{"content":"randomnumber","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/randomnumber.js","pathname":"/randomnumber","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.XNrkQasT.css"}],"routeData":{"route":"/restaurants","type":"page","pattern":"^\\/restaurants\\/?$","segments":[[{"content":"restaurants","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/restaurants.astro","pathname":"/restaurants","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.XNrkQasT.css"}],"routeData":{"route":"/nightlife","type":"page","pattern":"^\\/nightlife\\/?$","segments":[[{"content":"nightlife","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nightlife.astro","pathname":"/nightlife","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.XNrkQasT.css"}],"routeData":{"route":"/wellness","type":"page","pattern":"^\\/wellness\\/?$","segments":[[{"content":"wellness","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/wellness.astro","pathname":"/wellness","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.XNrkQasT.css"},{"type":"inline","content":".invalid-feedback[data-astro-cid-uwnxe3i2],.empty-feedback[data-astro-cid-uwnxe3i2]{display:none}.was-validated[data-astro-cid-uwnxe3i2] :-moz-placeholder-shown:invalid[data-astro-cid-uwnxe3i2]~.empty-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :placeholder-shown:invalid[data-astro-cid-uwnxe3i2]~.empty-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :not(:-moz-placeholder-shown):invalid[data-astro-cid-uwnxe3i2]~.invalid-feedback[data-astro-cid-uwnxe3i2]{display:block}.was-validated[data-astro-cid-uwnxe3i2] :not(:placeholder-shown):invalid[data-astro-cid-uwnxe3i2]~.invalid-feedback[data-astro-cid-uwnxe3i2]{display:block}.is-invalid[data-astro-cid-uwnxe3i2],.was-validated[data-astro-cid-uwnxe3i2] :invalid[data-astro-cid-uwnxe3i2]{border-color:#dc3545}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.XNrkQasT.css"}],"routeData":{"route":"/coffee","type":"page","pattern":"^\\/coffee\\/?$","segments":[[{"content":"coffee","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/coffee.astro","pathname":"/coffee","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.XNrkQasT.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.XNrkQasT.css"},{"type":"inline","content":".link-card[data-astro-cid-dohjnao5]{list-style:none;display:flex;padding:1px 20px;background-color:none;background-image:none;background-size:100%;border-radius:7px;background-position:70%;transition:background-position .6s cubic-bezier(.22,1,.36,1);box-shadow:inset 0 0 0 1px #ffffff1a;margin:18;width:430px;height:250px}.link-card[data-astro-cid-dohjnao5]>a[data-astro-cid-dohjnao5]{width:100%;text-decoration:none;line-height:1.4;padding:calc(1.5rem - 1px);border-radius:8px;color:#fff;background-color:#1e5ae7;opacity:.8}h2[data-astro-cid-dohjnao5]{margin:0;font-size:1.25rem;transition:color .6s cubic-bezier(.22,1,.36,1)}p[data-astro-cid-dohjnao5]{margin-top:.9rem;margin-bottom:5}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within){background-position:0;background-image:var(--accent-gradient)}.link-card[data-astro-cid-dohjnao5]:is(:hover,:focus-within) h2[data-astro-cid-dohjnao5]{color:rgb(var(--accent-light))}main[data-astro-cid-5tcejxga]{margin:auto;padding:11rem;width:800px;max-width:200px;color:#fff;font-size:20px;line-height:1.6;padding:8}.astro-a[data-astro-cid-5tcejxga]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-5tcejxga]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:3em}.text-gradient[data-astro-cid-5tcejxga]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-5tcejxga]{margin-bottom:2rem;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:8px}.instructions[data-astro-cid-5tcejxga] code[data-astro-cid-5tcejxga]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.8em .7em}.instructions[data-astro-cid-5tcejxga] strong[data-astro-cid-5tcejxga]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-5tcejxga]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:8}\n"}],"routeData":{"route":"/guide","type":"page","pattern":"^\\/guide\\/?$","segments":[[{"content":"guide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/guide.astro","pathname":"/guide","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/DiscoverVungTau/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/coffee.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/guide.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/nightlife.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/restaurants.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/wellness.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/contact.astro":"chunks/pages/contact_9AcmqVe_.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_hRu5vrmO.mjs","/src/pages/guide.astro":"chunks/pages/guide_MUmsKpR-.mjs","/src/pages/index.astro":"chunks/pages/index_5G7OGF7o.mjs","/src/pages/nightlife.astro":"chunks/pages/nightlife_9KBhevLv.mjs","/src/pages/randomnumber.js":"chunks/pages/randomnumber_1GmX5US1.mjs","/src/pages/restaurants.astro":"chunks/pages/restaurants_AKIbOrQs.mjs","/src/pages/wellness.astro":"chunks/pages/wellness_nZBGAiVR.mjs","\u0000@astrojs-manifest":"manifest_Dq8DMweD.mjs","C:/Users/User/DiscoverVungTau/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BW9AighY.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_tJCO4Q_Y.mjs","\u0000@astro-page:src/pages/randomnumber@_@js":"chunks/randomnumber_KhRsWEuE.mjs","\u0000@astro-page:src/pages/restaurants@_@astro":"chunks/restaurants_IlI3UOdY.mjs","\u0000@astro-page:src/pages/nightlife@_@astro":"chunks/nightlife_ccUAiLQE.mjs","\u0000@astro-page:src/pages/wellness@_@astro":"chunks/wellness_sDM1aWgG.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_pACHaFhQ.mjs","\u0000@astro-page:src/pages/coffee@_@astro":"chunks/coffee_xsCo9oq4.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_B4WmiuT7.mjs","\u0000@astro-page:src/pages/guide@_@astro":"chunks/guide_pg4m5PJt.mjs","@astrojs/preact/client.js":"_astro/client.asXjCW7l.js","C:/Users/User/DiscoverVungTau/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.UqJVjSsW.js","@astrojs/react/client.js":"_astro/client.gSoe9Upx.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.XNrkQasT.css","/favicon.svg","/heartbeat.png","/joke.svg","/images/360.jpg","/images/coffee.jpg","/images/crabs.webp","/images/customer.webp","/images/dish.webp","/images/entrance.webp","/images/fishMarket.jpg","/images/fusion.webp","/images/home.webp","/images/me.jpg","/images/me.webp","/images/menue.webp","/images/newHaircut.jpg","/images/newHaircut.mp4","/images/nightlife.jpg","/images/oasis.webp","/images/park.webp","/images/pearl.webp","/images/relax.webp","/images/seafood.webp","/images/sunset.webp","/images/vt.png","/images/vtt.jpg","/images/WellnessHomes.jpg","/_astro/client.8-IYWSBM.js","/_astro/client.asXjCW7l.js","/_astro/client.gSoe9Upx.js","/_astro/signals.module.UqJVjSsW.js"]});

export { manifest };
