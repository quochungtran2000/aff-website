import { ProductComment, ProductResponse, ProductVariant } from 'types';
import { useCallback, useEffect, useState } from 'react';
import { Button, List, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import MainLayout from 'components/Layout';
import { ProductApi } from 'apis/productApi';
import ProductCard from 'components/Card/ProductCard';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Carousel, Comment } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '256px',
  width: '256px',
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: 'white',
};
export default function ProductDetailPage() {
  const [variant, setVariant] = useState<ProductVariant | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<ProductResponse | undefined>(undefined);
  const [comments, setComments] = useState<ProductComment[]>([]);
  const [commentLoading, setCommentLoading] = useState<boolean>(false);

  const { slug }: { slug: string } = useParams();
  const productId = slug.replace('.html', '').split('-').pop()?.replace('p', '') + '';

  const { data: product } = useQuery([`get-product-detail-${productId}`], () => ProductApi.getProduct(productId), {
    onSuccess: (data) => {
      document.title = data.data.productName;
      setSelectedProduct(data.data.items?.[0]);
      setVariant(data.data.items?.[0].variants?.[0]);
    },
  });

  const { data: relatedProducts } = useQuery(['get-relative-product'], () => ProductApi.getProducts({}));

  // const { data: productComments } = useQuery(
  //   ['get-product-comment', selectedProduct.productId],
  //   () => ProductApi.getProductComments(selectedProduct.productId),
  //   { enabled: selectedProduct && selectedProduct.productId }
  // );

  const refetch = useCallback(async () => {
    setCommentLoading(true);
    try {
      if (!selectedProduct?.productId) return;
      const { data } = await ProductApi.getProductComments(selectedProduct?.productId);
      setComments(data);
    } catch (error) {
      console.log(error);
    } finally {
      setCommentLoading(false);
    }
  }, [selectedProduct?.productId]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (!selectedProduct || !selectedProduct?.productId) return;
    refetch();
  }, [refetch, selectedProduct]);

  return (
    <MainLayout>
      <section className="bg-white w-full py-8">
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-start-1 col-span-9 bg-dark">
                <div className="space-y-2 pb-4">
                  {product && <h6 className="font-light leading-tight">{product.data.productName}</h6>}
                </div>
                <div className="grid grid-cols-12 gap-4 bg-white rounded-lg shadow-md p-4 mb-4">
                  <div className="col-start-1 col-span-4 bg-dark">
                    <div className="space-y-2 pb-4">
                      {variant && (
                        <Carousel autoplay dots className="shadow-lg shadow-indigo-500/40-lg">
                          <div key={1231231}>
                            <h3 style={contentStyle} className={'text-black relative'}>
                              <img
                                src={product?.data.thumbnail}
                                width="100%"
                                height="100%"
                                alt={product?.data.productName}
                              />
                            </h3>
                          </div>
                          {variant?.images?.map((vari, index) => (
                            <div key={index}>
                              <h3 style={contentStyle} className={'text-black relative'}>
                                <img src={vari} width="100%" height="100%" alt={product?.data.productName} />
                              </h3>
                            </div>
                          ))}
                        </Carousel>
                      )}
                      {/* <img className="rounded-t-lg w-full" src={thumbnail} alt="product image" /> */}
                    </div>
                  </div>
                  <div className="col-start-5 col-span-8 bg-dark">
                    {/* <div className="space-y-2">
                  <h6 className="font-h6old leading-tight ">{productName}</h6>
                </div> */}
                    <p
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 4,
                        overflow: 'hidden',
                      }}
                    >
                      <b>Tổng quan về sản phẩm: </b>
                      {selectedProduct?.description}
                    </p>
                    <br />
                    <p className="py-1">
                      <span>
                        <b>Nơi bán: </b> {selectedProduct?.merchant}
                      </span>
                      <span className="px-2">|</span>
                      <span>
                        <b>Giá bán: </b>
                        {`${variant?.salePrice?.toLocaleString('de-De') || 0} ₫`}
                      </span>
                    </p>
                    <div>
                      <p className="py-1">
                        <b>{`Lựa chọn: `}</b> {variant?.variantName}
                      </p>
                      <div className="inline-block">
                        {selectedProduct &&
                          selectedProduct?.variants?.map((variant) => (
                            <div
                              className="inline-block mr-2 cursor-pointer"
                              style={{ width: '40px', height: '40px' }}
                              key={variant.sku}
                              onClick={() => setVariant(variant)}
                            >
                              <img
                                alt={variant.variantName}
                                src={variant?.variantImageUrl}
                                style={{ height: '40px', width: '40px' }}
                              ></img>
                            </div>
                            // <Button key={variant.sku} onClick={() => setVariant(variant)}>
                            //   {variant.variantName}
                            // </Button>
                          ))}
                      </div>
                    </div>
                    <div className="py-2 px-auto">
                      <Button type="link" onClick={() => location.replace(selectedProduct?.originalUrl as string)}>
                        Tới nơi bán
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 p-4">
                  <div className="space-y-2">
                    <h6 className="font-light leading-tight">Bình luận của người đã mua hàng</h6>
                  </div>
                  <List
                    loading={commentLoading}
                    className="comment-list"
                    // header={`Bình luận về sản phẩm: ${comments?.length || 0} bình luận`}
                    itemLayout="horizontal"
                    dataSource={comments}
                    renderItem={(item) => (
                      <li>
                        <Comment
                          author={item?.customerName}
                          avatar={'https://joeschmoe.io/api/v1/random'}
                          content={item?.content}
                          datetime={
                            <Tooltip title={item?.customerSatisfactionLevel}>
                              <span>{item?.customerSatisfactionLevel}</span>
                            </Tooltip>
                          }
                        />
                      </li>
                    )}
                  />
                </div>
              </div>

              <div className="col-start-10 col-span-3 bg-dark">
                <div className="space-y-2 pb-4">
                  <h6 className="font-light leading-tight">Các lựa chọn khác</h6>
                </div>
                {product?.data.items?.map((crawlProduct) => (
                  <div
                    key={crawlProduct.productId}
                    className="flex px-1 mb-2 bg-gray-100"
                    onClick={() => setSelectedProduct(crawlProduct)}
                  >
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                      src={crawlProduct.thumbnail}
                    />
                    <div className="flex flex-col flex-grow">
                      <a
                        rel="noopener noreferrer"
                        href={crawlProduct.originalUrl}
                        className="font-serif hover:underline text-medium"
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                          overflow: 'hidden',
                        }}
                      >
                        {crawlProduct.name}
                      </a>
                      <p className="mt-auto text-medium dark:text-gray-400">
                        {crawlProduct.merchant} - {`${variant?.salePrice?.toLocaleString('de-De') || 0} ₫`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-start-3 col-span-8 bg-dark"></div>
        </div>
      </section>

      <section className="bg-coolGray-800 w-full">
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            <div className="space-y-2 pb-4">
              <h6 className="font-bold leading-tight">Các sản phẩm liên quan</h6>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {relatedProducts?.data?.data?.map((product) => (
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
