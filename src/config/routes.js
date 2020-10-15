import { Gallery, Home } from '../pages';

const routes = [
  {
    path: '/home',
    component: Home,
  },

  {
    path: '/gallery',
    component: Gallery,
  },

  {
    path: '/',
    component: Home,
  },
];

export default routes;
