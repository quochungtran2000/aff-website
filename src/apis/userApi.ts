import axiosClient from './axiosClient';

type UserQuery = {
  username?: string;
  password?: string;
};

export const userApi = {
  getUsers: (params: UserQuery) => {
    const url = '/user';
    return axiosClient.get(url, { params });
  },
};
