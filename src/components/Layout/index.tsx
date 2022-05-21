import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Input, Layout, Menu, Spin } from 'antd';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { ReactNode, useState } from 'react';
import { avatar, logo } from 'assets/images';

import CustomerFooter from './Footer';
import LoginModal from 'components/Login/LoginModal';
import MenuItem from 'antd/lib/menu/MenuItem';
import React from 'react';
import RegisterModal from 'components/Register/RegisterModal';
import notification from 'utils/notification';
import sidebarMenu from 'constants/menu';

type IProps = {
  children: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
};

const { Search } = Input;
const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

export default function MainLayout(props: IProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const [registerVisible, setRegisterVisible] = useState<boolean>(false);
  const { children, isLoading = false, isError, error } = props;
  const onSearch = (value: string) => console.log(value);
  const history = useHistory();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const openItem = sidebarMenu.find((m) => {
    return m.submenu ? m.submenu.some((s) => s.key === location.pathname) : m.key === location.pathname;
  });
  const openKey = openItem ? openItem.key : '/';

  const [search, setSearch] = useState<string>('');

  const onInputChange = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onInputEnter = (e: any) => {
    e.preventDefault();
    // if (!search) return;
    if (e.key === 'Enter' || e.keyCode === 13) {
      // Do something return (
      if (!search) history.push(`/product`);
      else history.push(`/product?search=${search}`);
    }
  };

  const onLoginClick = () => {
    setRegisterVisible(false);
    setLoginVisible(true);
  };

  const onRegisterClick = () => {
    setLoginVisible(false);
    setRegisterVisible(true);
  };
  // const history = useHistory();

  return (
    <Spin size="large" spinning={isLoading}>
      <Layout className="min-h-screen">
        {/* <SideBar /> */}
        <Header className="bg-white h-12 flex items-center justify-between fixed z-10 w-full border-b-1 shadow-2xl ">
          {/* <img src={logo} alt="logo" className="cursor-pointer" /> */}
          <div className="flex flex-row h-full items-center gap-x-3">
            {/* <Link to="/"> */}
            <h4 className="cursor-pointer" onClick={() => history.push('/')}>
              SSG SHOP
            </h4>
            {/* </Link> */}

            <span onClick={() => history.push('/product')}>Sản phẩm</span>
            <span onClick={() => history.push('/post')}>Bài Viết</span>
          </div>
          {/* <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 500 }}
            className="rounded"
          /> */}

          {/* <div className="pt-2 relative mx-auto text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                // style="enable-background:new 0 0 56.966 56.966;"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div> */}
          <div className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                style={{ borderRadius: '2rem', width: 500 }}
                onChange={(e) => onInputChange(e)}
                onKeyUp={(e) => onInputEnter(e)}
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <SearchOutlined className="text-black mr-4" />
            <QuestionCircleOutlined className="text-black mr-4" />
            <BellOutlined className="text-black mr-4" />
            <Button type="text" onClick={() => setLoginVisible(true)}>
              Đăng nhập
            </Button>
            <Button onClick={() => setRegisterVisible(true)}>Đăng kí</Button>
            {/* <Dropdown
              overlay={
                <Menu className="p-2">
                  <Menu.Item>Sign out</Menu.Item>
                </Menu>
              }
              placement="bottomRight"
            >
              <div className="flex items-center cursor-default">
                <div className="w-8 h-8 rounded-full flex justify-center items-center overflow-hidden mr-2">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="para-3 text-white">Hung</div>
              </div>
            </Dropdown> */}
          </div>
        </Header>
        {/* <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="dark"
          className="overflow-auto h-screen fixed l-0 mt-12"
        >
          <Menu mode="inline" theme="light" defaultSelectedKeys={[location.pathname]} defaultOpenKeys={[openKey]}>
            {sidebarMenu.map((item) => (
              <>
                {item.submenu ? (
                  <SubMenu key={item.key} icon={<item.icon />} title={item.title}>
                    {item.submenu.map((m) => (
                      <MenuItem key={m.key}>
                        {m.title}
                        <Link to={m.key} />
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem key={item.key} icon={<item.icon />}>
                    {item.title}
                    <Link to={item.key} />
                  </MenuItem>
                )}
              </>
            ))}
          </Menu>
          <Button onClick={toggleCollapsed} className="absolute bottom-0 w-full drop-shadow-sidebar-button">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
        </Sider> */}
        <Layout className="bg-white">
          <Content className="pt-12 m-0 bg-neutral-95">{children}</Content>
          {/* <Footer> */}
          <CustomerFooter />
          {/* </Footer>/ */}
        </Layout>
      </Layout>
      <LoginModal
        onRegisterClick={onRegisterClick}
        isModalVisible={loginVisible}
        onCancel={() => setLoginVisible(false)}
      />
      <RegisterModal
        isModalVisible={registerVisible}
        onCancel={() => setRegisterVisible(false)}
        onLoginClick={onLoginClick}
      />
    </Spin>
  );
}
