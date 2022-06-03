import { Skeleton, Button } from 'antd';
import { ProductApi } from 'apis/productApi';
import ProductCard from 'components/Card/ProductCard';
import SkeletionProductCard from 'components/Card/SkeletionProductCard';
import MainLayout from 'components/Layout';
import { DEFAULT_PAGE_SIZE } from 'constants/app';
import { useUser } from 'context/userContext';
import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductTemplateResponse } from 'types';

export default function SaveProductPage() {
  const { user } = useUser();
  console.log({ user });

  const [loading, setLoading] = useState<boolean>(false);
  const [products, setPRoducts] = useState<ProductTemplateResponse[]>([]);
  const history = useHistory();

  const refetch = useCallback(async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await ProductApi.getMySaveProduct();
      setPRoducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  console.log({ products });

  const imageUrl = 'https://joeschmoe.io/api/v1/user';
  return (
    <MainLayout>
      <section className={`bg-gray-100 w-full`}>
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            <div className="flex justify-between">
              <div className="space-y-2 pb-4">
                {!loading && <h5 className="font-bold leading-tight">Sản phẩm đã lưu</h5>}
                {loading && <Skeleton.Input active />}
              </div>
              {/* <div className="space-y-2 pb-4">
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
              </div> */}
            </div>

            <div className="grid grid-cols-6 gap-4">
              {!loading &&
                products?.map((product) => <ProductCard key={product.productTemplateId} product={product} />)}

              {loading &&
                Array(DEFAULT_PAGE_SIZE)
                  .fill(1)
                  .map(() => <SkeletionProductCard key={Math.random() * 100000000} />)}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
