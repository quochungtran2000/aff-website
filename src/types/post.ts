export type Post = {
  postId: number;
  postTitle: string;
  postThumbnail: string;
  postType: string;
  postContent: string;
  author: PostAuthor;
  totalView: number;
  createdAt: Date;
  updatedAt: Date;
};

export type PostAuthor = {
  userId: number;
  username: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
};
