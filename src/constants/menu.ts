import { FormOutlined, ProfileOutlined, TableOutlined, CheckCircleOutlined } from '@ant-design/icons';

const date = new Date().toLocaleDateString('fr-CA');

const sidebarMenu = [
  {
    key: 'gi',
    title: 'Quản lý vận đơn',
    icon: FormOutlined,
    submenu: [
      {
        title: 'Danh sách vận đơn',
        key: `/gi?toDate=${date}&fromDate=${date}`,
      },
      { title: 'Điều chỉnh phiếu xuất', key: '/edit-gi' },
    ],
  },
  {
    key: '/shipment',
    title: 'Chi tiết chuyến hàng',
    icon: ProfileOutlined,
  },
  {
    key: '/route',
    title: 'Quản lý tuyến đường',
    icon: CheckCircleOutlined,
  },
  {
    key: 'user',
    title: 'Quản lý user',
    icon: FormOutlined,
    submenu: [
      {
        title: 'Phân quyền user',
        key: '/role-based-auth',
      },
      {
        title: 'Group user',
        key: '/groups',
      },
      {
        title: 'Functions',
        key: '/functions',
      },
    ],
  },
  {
    key: '/transport-management',
    title: 'Quản lý PTGT',
    icon: ProfileOutlined,
  },
  {
    key: 'client',
    title: 'Quản lý Clients',
    icon: TableOutlined,
    submenu: [
      {
        key: '/clients-management',
        title: 'Danh sách clients',
      },
      {
        key: '/clients-management/new-client',
        title: 'Tạo mới clients',
      },
      {
        key: '/clients-management/edit-client',
        title: 'Chỉnh sửa Clients',
      },
    ],
  },
  {
    key: '/plant',
    title: 'Quản lý plant',
    icon: FormOutlined,
  },
  //   {
  //     key: 'billlading',
  //     title: 'Quản lý vận đơn',
  //     icon: FormOutlined,
  //     submenu: [
  //       {
  //         title: 'Danh sách vận đơn',
  //         key: '/bill-of-lading',
  //       },
  //     ],
  //   },
];

export default sidebarMenu;
