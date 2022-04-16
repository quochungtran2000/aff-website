import { Button } from 'antd';
import { ProductApi } from 'apis/productApi';
import ProductCard from 'components/Card/ProductCard';
import MainLayout from 'components/Layout';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductResponse, ProductTemplateDetailResponse, ProductTemplateResponse } from 'types';
import { DownOutlined } from '@ant-design/icons';

export default function ProductDetailPage() {
  const [product, setProduct] = useState<ProductTemplateDetailResponse>();
  const [products, setProducts] = useState<ProductTemplateResponse[]>([]);

  const [thumbnail, setThumbnail] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const { productId }: { productId: string } = useParams();

  useEffect(() => {
    ProductApi.getProduct(+productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);
  useEffect(() => {
    ProductApi.getProducts({ page: 3 }).then(({ data }) => setProducts(data));
  }, []);

  useEffect(() => {
    if (!product) return;
    setThumbnail(product.thumbnail);
    setProductName(product.productName);
    setPrice(product.price);
  }, [product]);

  const handleItemClick = (value: ProductResponse) => {
    setThumbnail(value.thumbnail);
    setProductName(value.productName);
    setPrice(value.salePrice);
  };

  return (
    <MainLayout>
      <section className="bg-white w-full">
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-start-1 col-span-3 bg-dark">
                <div className="space-y-2 pb-4">
                  <img className="rounded-t-lg w-full" src={thumbnail} alt="product image" />
                </div>
              </div>
              <div className="col-start-4 col-span-4 bg-dark py-10">
                <div className="space-y-2">
                  <h6 className="font-h6old leading-tight ">{productName}</h6>
                </div>
                <div className="text-xs font-light tracking-tight mt-1.5">{`${
                  price?.toLocaleString('de-De') || 0
                } ₫`}</div>
              </div>
              <div className="col-start-8 col-span-4 bg-dark py-10">
                <div className="space-y-2 pb-4">
                  <h6 className="font-bold leading-tight">Các lựa chọn khác</h6>
                </div>

                {product?.products?.map((elmelemt) => {
                  return (
                    <div
                      key={elmelemt.productId}
                      className="flex flex-row  gap-3 align-center justify-between"
                      onClick={() => handleItemClick(elmelemt)}
                    >
                      <div className="flex flex-col py-4 max-w-xs min-w-xs">
                        <div className="text-xs font-semibold tracking-tight text-gray-900 pb-2">
                          {elmelemt.productName}
                        </div>
                        <div className="text-xs font-light tracking-tight">{`${
                          elmelemt.salePrice?.toLocaleString('de-De') || 0
                        } ₫`}</div>
                      </div>
                      <div className="py-4">
                        <a href={elmelemt.productUrl} target="_blank" rel="noreferrer">
                          <Button>Visit</Button>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white w-full">
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            <div className="space-y-2 pb-4">
              <h6 className="font-bold leading-tight">Các sản phẩm liên quan</h6>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {products.map((product) => (
                <ProductCard key={product.productTemplateId} product={product} />
              ))}
            </div>
          </div>
          <div className="col-start-3 col-span-8 mt-6 pb-6 mb-6">
            <Button shape="round" type="text" className="w-full" icon={<DownOutlined />}>
              Xem thêm
            </Button>
            <br />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
