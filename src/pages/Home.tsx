import { Button, Skeleton } from 'antd';
import { DEFAULT_PAGE_SIZE } from 'constants/app';
import MainLayout from 'components/Layout';
import { ProductApi } from 'apis/productApi';
import ProductCard from 'components/Card/ProductCard';
import SkeletionProductCard from 'components/Card/SkeletionProductCard';
import { useUser } from 'context/userContext';
import { Category } from 'types/category';
import { useCallback, useEffect, useState } from 'react';
import { ProductTemplateResponse } from 'types';
import { useHistory } from 'react-router-dom';

const bannerUrl =
  'https://thumbs.dreamstime.com/z/airport-security-police-department-screening-traveler-metal-detectors-millimeter-wave-scanner-protection-passenger-143607189.jpg';

type IProps = {
  category: Category;
  index: number;
};
const RenderSession = (props: IProps) => {
  const { category, index } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setPRoducts] = useState<ProductTemplateResponse[]>([]);
  const history = useHistory();

  const refetch = useCallback(async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await ProductApi.getProducts({ categoryId: category.categoryId });
      setPRoducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!category) return;
    refetch();
  }, [category, refetch]);

  return (
    <section className={`bg-${index % 2 === 0 ? 'white' : 'gray-100'} w-full`} key={index}>
      <div className="grid grid-cols-12 gap-4 py-6">
        <div className="col-start-3 col-span-8">
          <div className="flex justify-between">
            <div className="space-y-2 pb-4">
              {!loading && <h5 className="font-bold leading-tight">{category.title}</h5>}
              {loading && <Skeleton.Input active />}
            </div>
            <div className="space-y-2 pb-4">
              {!loading && (
                <Button
                  type="text"
                  className="leading-tight"
                  onClick={() => history.push(`/product?categoryId=${category.categoryId}`)}
                >
                  Xem Thêm
                </Button>
              )}
              {loading && <Skeleton.Input active />}
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {!loading && products?.map((product) => <ProductCard key={product.productTemplateId} product={product} />)}

            {loading &&
              Array(DEFAULT_PAGE_SIZE)
                .fill(1)
                .map(() => <SkeletionProductCard key={Math.random() * 100000000} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = (): JSX.Element => {
  const { category } = useUser();

  return (
    <MainLayout>
      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-20 text-center md:py-40 md:px-10 lg:px-32 relative">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl z-20 text-rose-600 opacity-0">
            SSG
            {/* <span className="dark:text-violet-400">laborum doloribus</span>delectus */}
          </h1>
          <p className="px-16 mt-8 mb-12 text-lg z-20 text-rose-600 opacity-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia aliquid dolores perferendis
            debitis ea?
          </p>
          <div
            className="absolute bottom-0 left-0 top-0 right-0 z-0"
            style={{
              backgroundImage: `url(${bannerUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'fill',
              backgroundPosition: 'center center',
            }}
          ></div>
        </div>
      </section>
      {category.length && category?.map((cate, index) => RenderSession({ category: cate, index }))}
    </MainLayout>
  );
};

export default HomePage;
