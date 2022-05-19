import HomePage from 'pages/Home';
import ProductDetailPage from 'pages/product/ProductDetailPage';
import ProductPage from 'pages/product/ProductPage';

const routes = [
  { path: '/product', component: ProductPage, isPublic: true },
  { path: '/product/:slug', component: ProductDetailPage, isPublic: true },
  { path: '/', component: HomePage, isPublic: true },
];

export default routes;
