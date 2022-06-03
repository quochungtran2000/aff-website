import postApi from 'apis/postApi';
import MainLayout from 'components/Layout';
import { useUser } from 'context/userContext';
import { useState, useCallback, useEffect } from 'react';
import { Empty } from 'antd';
import PostCard from 'components/Card/PostCard';

export default function MyPostPage() {
  const { user } = useUser();
  console.log({ user });

  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<any[]>([]);

  const refetch = useCallback(async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await postApi.getMyPost();
      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <MainLayout isLoading={loading}>
      <section className={`bg-gray-100 w-full`}>
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-start-3 col-span-8 bg-dark">
            <div className="flex justify-between">
              <div className="space-y-2 pb-4">
                <h5 className="font-bold leading-tight">Bài viết của tôi</h5>
              </div>
            </div>
            {posts?.length && (
              <div className="grid grid-cols-4 gap-4">
                {posts?.map((elm, index) => (
                  <PostCard data={elm} key={index} showAction={true} refetch={refetch} />
                ))}
              </div>
            )}
            {!posts?.length && <Empty />}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
