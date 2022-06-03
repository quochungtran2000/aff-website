import { DeleteOutlined, EditOutlined, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import postApi from 'apis/postApi';
import { useUser } from 'context/userContext';
import { useHistory } from 'react-router-dom';
import { Post } from 'types/post';
import notification from 'utils/notification';

type Props = {
  data: Post;
  showAction?: boolean;
  refetch?: () => void;
};

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="red" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

export default function PostCard({ data, showAction = false, refetch }: Props) {
  const { savePosts, user, refetchSavePost } = useUser();
  const history = useHistory();
  const { postThumbnail, postType, postTitle, totalView, createdAt, postId } = data;
  const like = savePosts?.some((elm) => elm.postId === postId);
  let action = false;
  if (user) {
    if (data.author.userId === user.userId) action = true;
  }

  const onDelete = (postId: number) => {
    postApi
      .deletePost(postId)
      .then(({ data }) => {
        notification('success', data.message);
        if (refetch) refetch();
      })
      .catch((error) => notification('error', error.response?.data?.message[0]));
  };

  const onSave = (postId: number) => {
    if (!user) return notification('error', 'Vui lòng đăng nhập để thực hiện thao tác này');
    postApi
      .savePost(postId)
      .then(({ data }) => {
        notification('success', data.message);
        refetchSavePost();
      })
      .catch((error) => notification('error', error.response?.data?.message[0]));
  };
  return (
    <article className="flex flex-col bg-white">
      <a rel="noopener noreferrer" aria-label="Te nulla oportere reprimique his dolorum">
        <img alt="" className="object-cover w-full h-40" src={postThumbnail} />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a rel="noopener noreferrer" aria-label="Te nulla oportere reprimique his dolorum"></a>
        <div className="flex justify-between">
          <a rel="noopener noreferrer" className="text-xs tracking-wider uppercase hover:underline">
            {postType}
          </a>
          {like ? (
            <span onClick={() => onSave(postId)} className="cursor-pointer">
              <HeartSvg />
            </span>
          ) : (
            <HeartOutlined onClick={() => onSave(postId)} />
          )}
        </div>

        <h3 className="flex-1 py-2 text-base font-semibold leading-snug">{postTitle}</h3>
        <div className="flex flex-wrap justify-between space-x-2 text-xs">
          <span>{new Date(createdAt).toLocaleDateString()}</span>
          <span>{totalView} views</span>
        </div>

        {showAction && action && (
          <div className="flex flex-wrap justify-center space-x-2 text-xs pt-4">
            <Button type="text" icon={<EditOutlined />} onClick={() => history.push(`/update-post/${postId}`)}></Button>
            <Button danger type="link" icon={<DeleteOutlined />} onClick={() => onDelete(postId)}></Button>
          </div>
        )}
      </div>
    </article>
  );
}
