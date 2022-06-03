import { Skeleton, Button } from 'antd';
import postApi from 'apis/postApi';
import { ProductApi } from 'apis/productApi';
import ProductCard from 'components/Card/ProductCard';
import SkeletionProductCard from 'components/Card/SkeletionProductCard';
import MainLayout from 'components/Layout';
import { DEFAULT_PAGE_SIZE } from 'constants/app';
import { useUser } from 'context/userContext';
import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductTemplateResponse } from 'types';
import { Empty } from 'antd';
import { Post } from 'types/post';
import PostPage from '.';
import PostCard from 'components/Card/PostCard';

export default function SavePostPage() {
  const { user, savePosts } = useUser();
  console.log({ user });

  // const [loading, setLoading] = useState<boolean>(false);
  // const [posts, setPosts] = useState<any[]>([]);
  const history = useHistory();

  // const refetch = useCallback(async () => {
  //   setLoading(true);
  //   try {
  //     const {
  //       data: { data },
  //     } = await postApi.mySavePost();
  //     setPosts(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   refetch();
  // }, [refetch]);

  // console.log({ products });

  return (
    <MainLayout>
      <section className={`bg-gray-100 w-full`}>
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            <div className="flex justify-between">
              <div className="space-y-2 pb-4">
                <h5 className="font-bold leading-tight">Bài viết đã lưu</h5>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {savePosts?.map((elm: Post, index: number) => (
                <PostCard data={elm} key={index} />
                // <a
                //   rel="noopener noreferrer"
                //   href="#"
                //   className="max-w-sm mx-auto group no-underline bg-white w-full"
                //   key={index}
                // >
                //   <img
                //     role="presentation"
                //     className="object-cover w-full rounded h-44 dark:bg-gray-500"
                //     src={elm?.postThumbnail}
                //   />
                //   <div className="p-6 space-y-2">
                //     <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                //       {elm?.postTitle}
                //     </h3>
                //     <span className="text-xs dark:text-gray-400">{new Date(elm?.createdAt).toLocaleString()}</span>
                //     <p>{elm?.postContent}</p>
                //   </div>
                // </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
