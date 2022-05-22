import HomePage from 'pages/Home';
import ProductDetailPage from 'pages/product/ProductDetailPage';
import ProductPage from 'pages/product/ProductPage';
import ProfilePage from 'pages/profile/ProfilePage';

const routes = [
  { path: '/product', component: ProductPage, isPublic: true },
  { path: '/product/:slug', component: ProductDetailPage, isPublic: true },
  { path: '/', component: HomePage, isPublic: true },
  { path: '/profile', component: ProfilePage, isPublic: true },
];

export default routes;
