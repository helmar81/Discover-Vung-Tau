export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_KjVsLSYs.mjs').then(n => n.w);

export { page };
