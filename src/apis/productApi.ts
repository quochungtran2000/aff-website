import {
  PagingResponse,
  ProductComment,
  ProductTemplateDetailResponse,
  ProductTemplateQuery,
  ProductTemplateResponse,
} from 'types';

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
  getMySaveProduct: (): Promise<AxiosResponse<PagingResponse<ProductTemplateResponse>>> => {
    const url = `/website/user/save-product`;
    return axiosClient.get(url);
  },
  getProductComments: (productId: string): Promise<AxiosResponse<ProductComment[]>> => {
    const url = `/website/comment/ecommerce-product/${productId}`;
    return axiosClient.get(url);
  },
};
