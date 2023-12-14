export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/coffee_CnzKKYaF.mjs').then(n => n.c);

export { page };
