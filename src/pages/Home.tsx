import { Col, Divider, Row, Typography } from 'antd';
import { ProductApi } from 'apis/productApi';
import { BusinessIcon, BusinessUrl } from 'assets/svg';
import ProductCard from 'components/Card/ProductCard';
import MainLayout from 'components/Layout';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PagingResponse, ProductTemplateResponse } from 'types';
import logo from '../assets/svg/business.svg';
import { Button, Radio } from 'antd';
import { DownloadOutlined, DownOutlined } from '@ant-design/icons';
import LoginForm from 'components/Login/LoginForm';
import RegisterForm from 'components/Register/RegisterFrom';

const { Text } = Typography;

const HomePage = (): JSX.Element => {
  const DEFAULT_PAGE_SIZE = 12;
  const [smartPhone, setSmartPhone] = useState<PagingResponse<ProductTemplateResponse>>();
  const [monitor, setMonitor] = useState<PagingResponse<ProductTemplateResponse>>();
  const [takeMonitor, setTakeMonitor] = useState<number>(DEFAULT_PAGE_SIZE);
  const [takeSmartPhone, setTakeSmartPhone] = useState<number>(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    ProductApi.getProducts({ search: 'Điện thoại', page_size: takeSmartPhone }).then((data) => setSmartPhone(data));
  }, [takeSmartPhone]);

  useEffect(() => {
    ProductApi.getProducts({ search: 'Màn hình', page_size: takeMonitor }).then((data) => setMonitor(data));
  }, [takeMonitor]);
  return (
    <MainLayout>
      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            SSG
            {/* <span className="dark:text-violet-400">laborum doloribus</span>delectus */}
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia aliquid dolores perferendis
            debitis ea?
          </p>
          {/* <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">
              Get started
            </button>
            <button className="px-8 py-3 m-2 text-lg border rounded dark:text-coolGray-50 dark:border-coolGray-700">
              Learn more
            </button>
          </div> */}
        </div>
      </section>
      <section className="bg-white w-full">
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            <div className="space-y-2 pb-4">
              <h5 className="font-bold leading-tight">Màn hình Máy tính</h5>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {monitor?.data?.map((product) => (
                <ProductCard key={product.productTemplateId} product={product} />
              ))}
            </div>
          </div>
          <div className="col-start-3 col-span-8 mt-6 pb-6 mb-6">
            {monitor && monitor?.total > takeMonitor && (
              <Button
                shape="round"
                type="text"
                onClick={() => setTakeMonitor(takeMonitor + DEFAULT_PAGE_SIZE)}
                className="w-full"
                icon={<DownOutlined />}
              >
                Xem thêm
              </Button>
            )}
            <br />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 w-full">
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            <div className="space-y-2 pb-4">
              <h5 className="font-bold leading-tight">Điện thoại di động</h5>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {smartPhone?.data?.map((product) => (
                <ProductCard key={product.productTemplateId} product={product} />
              ))}
            </div>
          </div>
          <div className="col-start-3 col-span-8 mt-6 pb-6 mb-6">
            {smartPhone && smartPhone?.total > takeSmartPhone && (
              <Button
                shape="round"
                type="text"
                onClick={() => setTakeSmartPhone(takeSmartPhone + DEFAULT_PAGE_SIZE)}
                className="w-full hover:bg-white"
                icon={<DownOutlined />}
              >
                Xem thêm
              </Button>
            )}
            <br />
          </div>
        </div>
      </section>
      {/* <section className="bg-white w-full">
        <div className="w-full" style={{ height: 400, backgroundColor: 'red' }}></div>
      </section> */}
      <section className="bg-white w-full">
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-4 bg-dark">
            <LoginForm />
          </div>
          <div className="col-start-8 col-span-4 bg-dark">
            <RegisterForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
