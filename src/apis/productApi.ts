import { PagingResponse, ProductTemplateDetailResponse, ProductTemplateQuery, ProductTemplateResponse } from 'types';

import { AxiosResponse } from 'axios';
import axiosClient from './axiosClient';
import { productPath } from '../constants/apiPaths';

export const ProductApi = {
  getProducts: (params: ProductTemplateQuery): Promise<AxiosResponse<PagingResponse<ProductTemplateResponse>>> => {
    const url = `/${productPath}`;
    return axiosClient.get(url, { params });
  },
  getProduct: (productId: string): Promise<AxiosResponse<ProductTemplateDetailResponse>> => {
    const url = `/${productPath}/${productId}`;
    return axiosClient.get(url);
  },
};
