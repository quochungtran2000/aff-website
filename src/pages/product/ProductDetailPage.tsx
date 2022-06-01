import { ProductResponse, ProductTemplateDetailResponse, ProductTemplateResponse, ProductVariant } from 'types';
import { useEffect, useState } from 'react';

import { Button, Card, List, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import MainLayout from 'components/Layout';
import { ProductApi } from 'apis/productApi';
import ProductCard from 'components/Card/ProductCard';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Carousel, Comment } from 'antd';

const comments = [
  {
    customerName: 'Đoàn Linh',
    customerSatisfactionLevel: 'Cực kì hài lòng',
    content:
      'Tiki có hệ thống vận chuyển, shipper riêng nên khi đặt hành điện tử giá trị cao rất yên tâm. Không lo tráo hàng, nhận hàng phải có otp. Đặt hành lúc 22h khuya, hôm sau sáng 9h30 đã nhận được. Gói băng keo kỹ, sp được niêm phong thêm bằng keo của tiki, nếu đã bị gỡ là biết ngay. Nguyên seal, phụ kiện, bảo hành đầy đủ. Màu hồng trên thị trường hiếm với mắc hơn các màu còn lại tầm 1-2tr nhưng trên tiki same same nhau. Đã v trả góp không tốn đồng phí nào. Màu hồng siêu cưng luôn á mng, dùng được 2 tuần rồi, check máy chính hãng bảo hành đầy đủ nhe.',
    images: [
      'https://salt.tikicdn.com/ts/review/ba/bc/dc/039a82478e728552421fa65c55f3fb11.jpg',
      'https://salt.tikicdn.com/ts/review/4e/43/9f/37816f769165389917caa840817c563f.jpg',
      'https://salt.tikicdn.com/ts/review/de/5c/e3/84af064f70eb1f7c947132c2b41a3fc2.jpg',
      'https://salt.tikicdn.com/ts/review/12/a7/73/55c38b9824b0950fd1f9e6719b105264.jpg',
    ],
  },
  {
    customerName: 'Nguyen Le Cat Quynh',
    customerSatisfactionLevel: 'Cực kì hài lòng',
    content:
      'Tiki giao siêu tốc rất nhanh. Đặt lúc 9h thì tầm 11h nhận được hàng. Mã chuẩn VN/A\nGiá gốc 22,250k thêm voucher moca 1tr5 và shopback hoàn thêm 620k thì mình mua với giá tầm 20tr2 khá hời so với ở store. Đt mượn, pin lâu hết',
    images: [
      'https://salt.tikicdn.com/ts/review/de/38/4c/5dd70c96272c672961fa5c5d7441f6d3.jpg',
      'https://salt.tikicdn.com/ts/review/e7/5c/37/f7c02e872467a88c1155be8ebef68e7a.jpg',
      'https://salt.tikicdn.com/ts/review/ae/e2/7f/c4ea3c1f1bdee89cdfb6a00f2028dca7.jpg',
      'https://salt.tikicdn.com/ts/review/8a/17/e1/51da6397e5fba6ba6f4cd1134ea0f4e8.jpg',
    ],
  },
  {
    customerName: 'Nguyễn Đức Duy',
    customerSatisfactionLevel: 'Cực kì hài lòng',
    content:
      'Tiki giao hàng nhanh. Sản phẩm chính hãng vn/a. Giá tốt, có thêm chương trình giảm nhờ mua hàng qua thẻ tín dụng. Iphone 13 tốc độ nhanh, camera chụp đẹp, lựa chọn phù hợp túi tiền, đầy đủ công nghệ mới. Xứng đáng nâng cấp nếu đang dùng bản iPhone X hoặc cũ hơn.',
    images: [
      'https://salt.tikicdn.com/ts/review/ea/25/d4/69cb31eba39dc9756273dd1c2422ac82.jpg',
      'https://salt.tikicdn.com/ts/review/40/8d/89/0b5c59c7b24d41043b1ef44ded6c5077.jpg',
      'https://salt.tikicdn.com/ts/review/a8/4f/c5/bad86fc94901cd74655fa7545508bffc.jpg',
    ],
  },
  {
    customerName: 'LynLyn Le',
    customerSatisfactionLevel: 'Cực kì hài lòng',
    content:
      'Đặt trong 2h có ngay em nó lần đầu mua qua tiki quá là tiện luôn, thấy mọi người đánh giá tốt nên cũng khá yên tâm',
    images: [
      'https://salt.tikicdn.com/ts/review/32/e9/54/0b8e65da503d7e5af375a4c916a0443e.jpg',
      'https://salt.tikicdn.com/ts/review/5d/2e/e5/0bd3c20e2dd7459cec31f8068a4a0a05.jpg',
      'https://salt.tikicdn.com/ts/review/3e/76/87/0caa58cb69895a0af2c6981b100f33be.jpg',
      'https://salt.tikicdn.com/ts/review/5d/34/30/746f31e31b80600f73cf1ffece9aafd9.jpg',
      'https://salt.tikicdn.com/ts/review/eb/d3/2d/b22b4b4a5b718d734bd24245b70b18f4.jpg',
    ],
  },
  {
    customerName: 'Quang Thành',
    customerSatisfactionLevel: 'Cực kì hài lòng',
    content:
      'Màu hồng khá hiếm trên thị trường nên mình quyết định đặt Tiki. Mình đặt giá 24tr490 giảm Moca 1tr5 và dc hoàn tiền Shopback 3%(~690k) nên giá mua em nó khoảng 22tr3 (Giá cũng khá mềm trên thị trường đối với màu Pink). Check emei web apple thi cung ok. Giao hàng tầm 6 ngày, do mình đặt ở HCM giao từ HN. Nói chung khá hài lòng.',
    images: [
      'https://salt.tikicdn.com/ts/review/79/2b/82/1e75f2a288de51d051e6a44ce84fc409.jpg',
      'https://salt.tikicdn.com/ts/review/20/e9/16/342dc3e4a1757caff5d392d7861a60c4.jpg',
    ],
  },
];
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
                      <Button type="link">Tới nơi bán</Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 p-4">
                  <div className="space-y-2">
                    <h6 className="font-light leading-tight">Bình luận của người đã mua hàng</h6>
                  </div>
                  <List
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
