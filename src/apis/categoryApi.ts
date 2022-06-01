import { PagingResponse, ProductTemplateDetailResponse, ProductTemplateQuery, ProductTemplateResponse } from 'types';

import { AxiosResponse } from 'axios';
import axiosClient from './axiosClient';
import { productPath } from '../constants/apiPaths';
import { Category } from 'types/category';

export const CategoryApi = {
  getCategory: (): Promise<AxiosResponse<Category[]>> => {
    const url = '/website/category';
    return axiosClient.get(url);
  },
};
