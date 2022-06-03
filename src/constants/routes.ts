import HomePage from 'pages/Home';
import NotFound from 'pages/NotFound';
import PostPage from 'pages/post';
import CreatePostPage from 'pages/post/CreatePost';
import MyPostPage from 'pages/post/MyPost';
import SavePostPage from 'pages/post/SavePost';
import UpdatePostPage from 'pages/post/UpdatePost';
import ProductDetailPage from 'pages/product/ProductDetailPage';
import ProductPage from 'pages/product/ProductPage';
import ProfilePage from 'pages/profile/ProfilePage';
import SaveProductPage from 'pages/profile/SaveProduct';

const routes = [
  { path: '/product', component: ProductPage, isPublic: true },
  { path: '/product/:slug', component: ProductDetailPage, isPublic: true },
  { path: '/profile', component: ProfilePage, isPublic: false },
  { path: '/post', component: PostPage, isPublic: true },
  { path: '/create-post', component: CreatePostPage, isPublic: true },
  { path: '/update-post/:postId', component: UpdatePostPage, isPublic: true },
  { path: '/my-save-product', component: SaveProductPage, isPublic: false },
  { path: '/my-post', component: MyPostPage, isPublic: false },
  { path: '/my-save-post', component: SavePostPage, isPublic: false },
  { path: '/', component: HomePage, isPublic: true },
  { path: '*', component: NotFound, isPublic: true },
];

export default routes;
