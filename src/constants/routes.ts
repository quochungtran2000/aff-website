import HomePage from 'pages/Home';
import NotFound from 'pages/NotFound';
import PostPage from 'pages/post';
import ProductDetailPage from 'pages/product/ProductDetailPage';
import ProductPage from 'pages/product/ProductPage';
import ProfilePage from 'pages/profile/ProfilePage';

const routes = [
  { path: '/product', component: ProductPage, isPublic: true },
  { path: '/product/:slug', component: ProductDetailPage, isPublic: true },
  { path: '/profile', component: ProfilePage, isPublic: false },
  { path: '/post', component: PostPage, isPublic: true },
  { path: '/', component: HomePage, isPublic: true },
  { path: '*', component: NotFound, isPublic: true },
];

export default routes;
