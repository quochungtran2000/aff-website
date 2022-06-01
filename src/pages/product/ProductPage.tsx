import { PagingResponse, ProductTemplateQuery, ProductTemplateResponse } from 'types';
import { useEffect, useState } from 'react';

import { Button } from 'antd';
import { DEFAULT_PAGE_SIZE } from 'constants/app';
import { DownOutlined } from '@ant-design/icons';
import MainLayout from 'components/Layout';
import { ProductApi } from 'apis/productApi';
import ProductCard from 'components/Card/ProductCard';
import SkeletionProductCard from 'components/Card/SkeletionProductCard';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import useQueryParam from 'hooks/useQueryPrams';

export default function ProductPage() {
  // const [products, setProducts] = useState<PagingResponse<ProductTemplateResponse>>();
  const history = useHistory();
  const queryParam = useQueryParam();

  const search = queryParam.get('search') || '';
  const page_size = Number(queryParam.get('page_size') + '') || DEFAULT_PAGE_SIZE;

  const productParams: ProductTemplateQuery = {
    page_size,
    search,
  };

  const productParam = JSON.parse(JSON.stringify(productParams));

  const { data: products, isLoading: loading } = useQuery(['products', productParams], () =>
    ProductApi.getProducts(productParam)
  );

  // useEffect(() => {
  //   ProductApi.getProducts({ search, page_size: page_size }).then((data) => setProducts(data));
  // }, [search, page_size]);
  return (
    <MainLayout>
      <section className="bg-white w-full">
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            {search && (
              <div className="space-y-2 pb-4">
                <h5 className="font-bold leading-tight">{`Bạn đang tìm kiếm sản phẩm với từ khóa: ${search}`}</h5>
              </div>
            )}
            <div className="grid grid-cols-6 gap-4">
              {!loading &&
                products?.data?.data.map((product) => (
                  <ProductCard key={product.productTemplateId} product={product} />
                ))}
              {loading &&
                Array(page_size === DEFAULT_PAGE_SIZE ? page_size : page_size - DEFAULT_PAGE_SIZE)
                  .fill(1)
                  .map((i) => <SkeletionProductCard key={Math.random() * 1000000} />)}
            </div>
          </div>
          {/* <div className="col-start-3 col-span-8 mt-6 pb-6 mb-6">
            <Button shape="round" type="text" className="w-full" icon={<DownOutlined />}>
              Xem thêm
            </Button>
            <br />
          </div> */}
          <div className="col-start-3 col-span-8 mt-6 pb-6 mb-6">
            {products && products?.data.total > page_size && (
              <Button
                shape="round"
                type="text"
                onClick={() => history.push(`/product?page_size=${page_size + 12}`)}
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
    </MainLayout>
  );
}
