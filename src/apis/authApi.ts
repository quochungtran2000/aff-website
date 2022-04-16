import axios, { AxiosPromise } from 'axios';
import { ILoginVars, ILoginResponse } from 'types';
import { authPath } from '../constants/apiPaths';

export const AuthApi = {
  login: (data: ILoginVars): Promise<AxiosPromise<ILoginResponse>> => {
    const url = `/${authPath}/login`;
    return axios.post(url, data);
  },
};
