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
    path: '/plant/:id',
    param: 'id',
    setTitle: (key) => `Cập nhật plant ${key}`,
  },
  {
    path: '*',
    param: '',
    setTitle: () => 'Trang không tồn tại',
  },
];
