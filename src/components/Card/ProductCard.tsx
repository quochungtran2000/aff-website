import { Button } from 'antd';
import { ProductTemplateResponse } from 'types';
import { useHistory } from 'react-router-dom';
import { HeartOutlined } from '@ant-design/icons';
import postApi from 'apis/postApi';
import notification from 'utils/notification';
import { useUser } from 'context/userContext';
type IProps = {
  product: ProductTemplateResponse;
};

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="red" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

export default function ProductCard({ product }: IProps) {
  const { productName, thumbnail, productTemplateId, slug } = product;
  const productSlug = `${slug}-p${productTemplateId}.html`;
  const history = useHistory();
  const { user, refetchSaveProduct, saveProducts } = useUser();
  const like = saveProducts.some((elm) => elm.productTemplateId === productTemplateId);

  const onSave = (postId: number) => {
    if (!user) return notification('error', 'Vui lòng đăng nhập để thực hiện thao tác này');
    postApi
      .savePost(postId)
      .then(({ data }) => {
        notification('success', data.message);
        refetchSaveProduct();
      })
      .catch((error) => notification('error', error.response?.data?.message[0]));
  };

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md flex flex-col">
      {/* <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"></div> */}
      <a href={`/product/${productSlug}`} target="_blank" rel="noreferrer" className="flex-1">
        <img className="p-2 rounded-t-lg" src={thumbnail} alt="product image" />
      </a>
      <div className="px-2 pb-2">
        <a href={`/product/${productSlug}`} target="_blank" rel="noreferrer">
          <h5
            className="text-xs font-semibold tracking-tight text-gray-900"
            style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden' }}
          >
            {/* <h5 className="text-xs font-semibold tracking-tight text-gray-900 dark:text-white"> */}
            {productName?.split('-')[0]}
          </h5>
        </a>
        {/* <div className="font-normal text-rose-500 text-xs mt-1.5">{`${price?.toLocaleString('de-De') || 0} ₫`}</div>
        <div className="flex items-center mt-1 mb-1">
          <svg
            className="w-3 h-3 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            className="w-3 h-3 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            className="w-3 h-3 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            className="w-3 h-3 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            className="w-3 h-3 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-1 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-1">
            5.0
          </span>
          <span className="text-xs font-light">{`Đã bán ${sold}`}</span>
          <span className="text-xs font-light">{`Đã bán ${sold}`}</span> 
        </div>*/}
        {/* <div className="font-normal  text-xs mt-1.5">{`Nơi bán: ${merchant}`}</div> */}
      </div>
      <div className="py-2 mx-auto flex justify-between items-center">
        <Button
          type="text"
          shape="round"
          className="text-black"
          onClick={() => history.push(`/product/${productSlug}`)}
        >
          So Sánh
        </Button>
        {like ? (
          <span onClick={() => onSave(productTemplateId)} className="cursor-pointer">
            <HeartSvg />
          </span>
        ) : (
          <HeartOutlined onClick={() => onSave(productTemplateId)} />
        )}
      </div>
    </div>
  );
}
