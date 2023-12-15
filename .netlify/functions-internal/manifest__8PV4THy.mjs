import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_V6vkh6i_.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"accomodation/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/accomodation","type":"page","pattern":"^\\/accomodation\\/?$","segments":[[{"content":"accomodation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/accomodation.astro","pathname":"/accomodation","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"restaurants/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/restaurants","type":"page","pattern":"^\\/restaurants\\/?$","segments":[[{"content":"restaurants","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/restaurants.astro","pathname":"/restaurants","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"nightlife/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nightlife","type":"page","pattern":"^\\/nightlife\\/?$","segments":[[{"content":"nightlife","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nightlife.astro","pathname":"/nightlife","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"wellness/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/wellness","type":"page","pattern":"^\\/wellness\\/?$","segments":[[{"content":"wellness","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/wellness.astro","pathname":"/wellness","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"coffee/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/coffee","type":"page","pattern":"^\\/coffee\\/?$","segments":[[{"content":"coffee","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/coffee.astro","pathname":"/coffee","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"guide/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/guide","type":"page","pattern":"^\\/guide\\/?$","segments":[[{"content":"guide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/guide.astro","pathname":"/guide","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"hotel/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/hotel","type":"page","pattern":"^\\/hotel\\/?$","segments":[[{"content":"hotel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hotel.astro","pathname":"/hotel","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/randomnumber","type":"endpoint","pattern":"^\\/randomnumber$","segments":[[{"content":"randomnumber","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/randomnumber.js","pathname":"/randomnumber","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/DiscoverVungTau/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/accomodation.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/coffee.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/guide.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/hotel.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/nightlife.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/restaurants.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/DiscoverVungTau/src/pages/wellness.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/randomnumber.js":"chunks/pages/randomnumber_1GmX5US1.mjs","\u0000@astrojs-manifest":"manifest__8PV4THy.mjs","C:/Users/User/DiscoverVungTau/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_bFrNpLWq.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_kkm5SZsW.mjs","\u0000@astro-page:src/pages/accomodation@_@astro":"chunks/accomodation_rF3UuFvH.mjs","\u0000@astro-page:src/pages/randomnumber@_@js":"chunks/randomnumber_KhRsWEuE.mjs","\u0000@astro-page:src/pages/restaurants@_@astro":"chunks/restaurants_bHksNquw.mjs","\u0000@astro-page:src/pages/nightlife@_@astro":"chunks/nightlife_YQAAeWyd.mjs","\u0000@astro-page:src/pages/wellness@_@astro":"chunks/wellness_mS3wO6Vm.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_KCYJw571.mjs","\u0000@astro-page:src/pages/coffee@_@astro":"chunks/coffee_GShKocY3.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_eJlPW2mE.mjs","\u0000@astro-page:src/pages/guide@_@astro":"chunks/guide_uBXr4vHH.mjs","\u0000@astro-page:src/pages/hotel@_@astro":"chunks/hotel_BdzSHaHU.mjs","@astrojs/preact/client.js":"_astro/client.asXjCW7l.js","C:/Users/User/DiscoverVungTau/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.UqJVjSsW.js","/astro/hoisted.js?q=0":"_astro/hoisted.rfglzoOR.js","@astrojs/react/client.js":"_astro/client.gSoe9Upx.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/menue.BWaWHBmR.webp","/_astro/newHaircut.Qhx_FJMG.jpg","/_astro/pearl.ib1zBWCv.webp","/_astro/kem.6NEItJiJ.jpg","/_astro/WellnessHomes.XMDVwQUA.jpg","/_astro/sunset.mTU8EjvX.webp","/_astro/nightlife.K-tvQfsr.jpg","/_astro/sun.-HXIuUsg.jpg","/_astro/shrimps.kibzxtXw.jpg","/_astro/room.Aioi1K4U.jpg","/_astro/about.HtPcB8rO.css","/favicon.svg","/forward.png","/forward.svg","/heartbeat.png","/joke.svg","/images/beer.jpg","/images/clothes.jpg","/images/coffee.jpg","/images/crabs.webp","/images/customer.webp","/images/dish.webp","/images/entrance.webp","/images/fishMarket.jpg","/images/forward.png","/images/forward.svg","/images/fusion.webp","/images/garden.jpg","/images/home.webp","/images/kem.jpg","/images/me.jpg","/images/me.webp","/images/menue.webp","/images/newHaircut.jpg","/images/newHaircut.mp4","/images/nightlife.jpg","/images/oasis.webp","/images/park.webp","/images/pearl.webp","/images/relax.webp","/images/room.jpg","/images/seafood.webp","/images/sunset.webp","/images/vt.png","/images/vtt.jpg","/images/WellnessHomes.jpg","/_astro/client.8-IYWSBM.js","/_astro/client.asXjCW7l.js","/_astro/client.gSoe9Upx.js","/_astro/hoisted.rfglzoOR.js","/_astro/signals.module.UqJVjSsW.js","/index.html","/accomodation/index.html","/restaurants/index.html","/nightlife/index.html","/wellness/index.html","/contact/index.html","/coffee/index.html","/about/index.html","/guide/index.html","/hotel/index.html"]});

export { manifest };
