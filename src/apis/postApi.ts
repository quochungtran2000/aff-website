import { AxiosResponse } from 'axios';
import { PagingResponse } from 'types';
import { Post } from 'types/post';
import axiosClient from './axiosClient';

type getPostVars = {
  page?: number;
  pageSize?: number;
};

type createPostVars = {
  postTitle: string;
  postThumbnail: string;
  postContent: string;
  postType: string;
};

type updatePostVars = {
  postId: number;
  postTitle: string;
  postThumbnail: string;
  postContent: string;
  postType: string;
};
const postApi = {
  // createPost: ()
  getPosts: (params?: getPostVars): Promise<AxiosResponse<PagingResponse<Post>>> => {
    const url = '/website/post';
    return axiosClient.get(url, { params });
  },
  getPost: (postId: number): Promise<AxiosResponse<Post>> => {
    const url = `/website/post/detail/${postId}`;
    return axiosClient.get(url);
  },
  createPost: (data: createPostVars) => {
    const url = '/website/post';
    return axiosClient.post(url, data);
  },
  updatePost: (data: updatePostVars) => {
    const url = '/website/post';
    return axiosClient.put(url, data);
  },
  deletePost: (postId: number) => {
    const url = `/website/post/${postId}`;
    return axiosClient.delete(url);
  },
  mySavePost: (): Promise<AxiosResponse<PagingResponse<Post>>> => {
    const url = `/website/post/save-post`;
    return axiosClient.get(url);
  },
  getMyPost: (): Promise<AxiosResponse<PagingResponse<Post>>> => {
    const url = `/website/post/my-posts`;
    return axiosClient.get(url);
  },
  savePost: (postId: number) => {
    const url = `/website/post/save/${postId}`;
    return axiosClient.post(url);
  },
};

export default Object.freeze(postApi);
