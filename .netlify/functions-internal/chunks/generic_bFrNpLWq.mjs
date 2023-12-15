export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_M4baSRN-.mjs').then(n => n.g);

export { page };
