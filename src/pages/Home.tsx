import { Button, Skeleton } from 'antd';

import { DEFAULT_PAGE_SIZE } from 'constants/app';
import { DownOutlined } from '@ant-design/icons';
import LoginForm from 'components/Login/LoginForm';
import LoginModal from 'components/Login/LoginModal';
import MainLayout from 'components/Layout';
import { ProductApi } from 'apis/productApi';
import ProductCard from 'components/Card/ProductCard';
import { ProductTemplateQuery } from 'types';
import RegisterForm from 'components/Register/RegisterFrom';
import SkeletionProductCard from 'components/Card/SkeletionProductCard';
import updateQueryStringParameter from 'utils/updateQueryStringParameter';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import useQueryParam from 'hooks/useQueryPrams';

const HomePage = (): JSX.Element => {
  const queryParam = useQueryParam();
  const page = 1;
  const spz = Number(queryParam.get('spz')) || DEFAULT_PAGE_SIZE;
  const mpz = Number(queryParam.get('mpz') + '') || DEFAULT_PAGE_SIZE;

  const history = useHistory();

  const monitorParams: ProductTemplateQuery = { page, page_size: mpz, search: 'Màn hình' };
  const smartPhoneParams: ProductTemplateQuery = { page, page_size: spz, search: 'Điện thoại' };

  const monitorParam = JSON.parse(JSON.stringify(monitorParams));
  const smartPhoneParam = JSON.parse(JSON.stringify(smartPhoneParams));

  const { data: smartPhones, isLoading: smartPhoneLoading } = useQuery(['smartphones', smartPhoneParams], () =>
    ProductApi.getProducts(smartPhoneParam)
  );

  const { data: monitors, isLoading: monitorLoading } = useQuery(['monitors', monitorParams], () =>
    ProductApi.getProducts(monitorParam)
  );

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
              {!monitorLoading && <h5 className="font-bold leading-tight">Màn hình Máy tính</h5>}
              {monitorLoading && <Skeleton.Input active />}
            </div>
            <div className="grid grid-cols-6 gap-4">
              {!monitorLoading &&
                monitors?.data?.data?.map((product) => (
                  <ProductCard key={product.productTemplateId} product={product} />
                ))}

              {monitorLoading &&
                Array(mpz === DEFAULT_PAGE_SIZE ? mpz : mpz - DEFAULT_PAGE_SIZE)
                  .fill(1)
                  .map((i) => <SkeletionProductCard key={i} />)}
            </div>
          </div>
          <div className="col-start-3 col-span-8 mt-6 pb-6 mb-6">
            {!monitorLoading && monitors && monitors?.data?.total > mpz && (
              <Button
                shape="round"
                type="text"
                onClick={() =>
                  history.push({
                    pathname: location.pathname,
                    search: updateQueryStringParameter(location.search, {
                      mpz: mpz + DEFAULT_PAGE_SIZE,
                    }),
                  })
                }
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
              {!smartPhoneLoading && <h5 className="font-bold leading-tight">Điện thoại di động</h5>}
              {smartPhoneLoading && <Skeleton.Input active />}
            </div>
            <div className="grid grid-cols-6 gap-4">
              {!smartPhoneLoading &&
                smartPhones?.data?.data?.map((product) => (
                  <ProductCard key={product.productTemplateId} product={product} />
                ))}
              {smartPhoneLoading &&
                Array(spz === DEFAULT_PAGE_SIZE ? spz : spz - DEFAULT_PAGE_SIZE)
                  .fill(1)
                  .map((i) => <SkeletionProductCard key={i} />)}
            </div>
          </div>
          <div className="col-start-3 col-span-8 mt-6 pb-6 mb-6">
            {smartPhones && smartPhones?.data?.total > spz && (
              <Button
                shape="round"
                type="text"
                onClick={() =>
                  history.push({
                    pathname: location.pathname,
                    search: updateQueryStringParameter(location.search, {
                      spz: spz + DEFAULT_PAGE_SIZE,
                    }),
                  })
                }
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
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-4 bg-dark">
            <LoginForm />
          </div>
          <div className="col-start-8 col-span-4 bg-dark">
            <RegisterForm />
          </div>
        </div>
      </section> */}
    </MainLayout>
  );
};

export default HomePage;
