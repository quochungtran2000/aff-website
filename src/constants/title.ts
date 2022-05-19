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
    path: '/product/:productId',
    param: 'productId',
    setTitle: (key) => `Chi tiết sản Phẩm ${key}`,
  },
  {
    path: '*',
    param: '',
    setTitle: () => 'Trang không tồn tại',
  },
];
