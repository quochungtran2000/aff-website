import { ILoginResponse, ILoginVars, User } from 'types';
import axios, { AxiosPromise, AxiosResponse } from 'axios';

import { authPath } from '../constants/apiPaths';
import axiosClient from './axiosClient';

export const AuthApi = {
  login: (data: ILoginVars): Promise<AxiosResponse<ILoginResponse>> => {
    const url = `/${authPath}/login`;
    return axiosClient.post(url, data);
  },
  me: (): Promise<AxiosResponse<User>> => {
    const url = `/${authPath}/profile`;
    return axiosClient.get(url);
  },
};
