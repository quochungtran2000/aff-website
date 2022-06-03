import postApi from 'apis/postApi';
import MainLayout from 'components/Layout';
import { useQuery } from 'react-query';
import PostCard from 'components/Card/PostCard';

export default function PostPage() {
  const { data: posts, isLoading: loading } = useQuery(['products'], () => postApi.getPosts({ page: 1, pageSize: 13 }));

  function createMarkup(data: string) {
    return {
      __html: data,
    };
  }
  return (
    <MainLayout isLoading={loading}>
      <section className="">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {posts?.data?.data?.length && (
            <article className="flex flex-row bg-white">
              <a rel="noopener noreferrer" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="object-cover w-full h-80" src={posts?.data?.data?.[0]?.postThumbnail} />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" className="text-xs tracking-wider uppercase hover:underline">
                  {posts?.data?.data?.[0]?.postType}
                </a>
                <h3 className="flex py-2 text-base font-semibold leading-snug">{posts?.data?.data?.[0]?.postTitle}</h3>
                <div className="flex-1  flex-wrap justify-between pt-3 space-x-2 text-xs">
                  <div dangerouslySetInnerHTML={createMarkup(posts?.data?.data?.[0]?.postContent)} />
                </div>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                  <span>{new Date(posts?.data?.data?.[0]?.createdAt).toLocaleDateString()}</span>
                  <span>{posts?.data?.data?.[0]?.totalView} views</span>
                </div>
              </div>
            </article>
          )}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {posts?.data?.data?.slice(1)?.map((elm, index) => (
              <PostCard data={elm} key={index} />
            ))}
          </div>
          <div className="flex justify-center">
            <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-white">
              Xem thêm
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
