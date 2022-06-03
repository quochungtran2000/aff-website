export const titles: {
  path: string;
  param: string;
  setTitle: (key?: string | number) => string;
}[] = [
  {
    path: '/',
    param: '',
    setTitle: () => 'Trang Chủ',
  },
  {
    path: '/product',
    param: '',
    setTitle: () => 'Danh sách sản phẩm',
  },
  {
    path: '/product/:slug',
    param: 'slug',
    setTitle: (key) => `Chi tiết sản Phẩm ${key}`,
  },
  {
    path: '/profile',
    param: '',
    setTitle: () => `Thông tin tài khoản`,
  },
  {
    path: '/post',
    param: '',
    setTitle: () => `Danh sách bài viết`,
  },
  {
    path: '/create-post',
    param: '',
    setTitle: () => `Đăng bài viết`,
  },
  {
    path: '/update-post/:postId',
    param: '',
    setTitle: () => `Cập nhật bài viết`,
  },
  {
    path: '/my-save-product',
    param: '',
    setTitle: () => `Danh sách sản phẩm đã lưu`,
  },
  {
    path: '/my-save-post',
    param: '',
    setTitle: () => `Danh sách bài viết đã lưu`,
  },
  {
    path: '/my-post',
    param: '',
    setTitle: () => `Bài viết của tôi`,
  },
  {
    path: '*',
    param: '',
    setTitle: () => 'Trang không tồn tại',
  },
];
