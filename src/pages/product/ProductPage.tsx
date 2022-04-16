import { Button } from 'antd';
import { ProductApi } from 'apis/productApi';
import ProductCard from 'components/Card/ProductCard';
import MainLayout from 'components/Layout';
import useQueryParam from 'hooks/useQueryPrams';
import React, { useEffect, useState } from 'react';
import { PagingResponse, ProductTemplateResponse } from 'types';
import { DownloadOutlined, DownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

export default function ProductPage() {
  const [products, setProducts] = useState<PagingResponse<ProductTemplateResponse>>();
  // const [take, setTake] = useState<number>(12);

  const history = useHistory();

  const queryParam = useQueryParam();

  const search = queryParam.get('search') || '';
  const page_size = Number(queryParam.get('page_size') + '') || 12;

  useEffect(() => {
    ProductApi.getProducts({ search, page_size: page_size }).then((data) => setProducts(data));
  }, [search, page_size]);
  return (
    <MainLayout>
      <section className="bg-white w-full">
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            {/* <div className="space-y-2 pb-4">
              <h5 className="font-bold leading-tight">Màn hình Máy tính</h5>
            </div> */}
            <div className="grid grid-cols-6 gap-4">
              {products?.data.map((product) => (
                <ProductCard key={product.productTemplateId} product={product} />
              ))}
            </div>
          </div>
          {/* <div className="col-start-3 col-span-8 mt-6 pb-6 mb-6">
            <Button shape="round" type="text" className="w-full" icon={<DownOutlined />}>
              Xem thêm
            </Button>
            <br />
          </div> */}
          <div className="col-start-3 col-span-8 mt-6 pb-6 mb-6">
            {products && products?.total > page_size && (
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
