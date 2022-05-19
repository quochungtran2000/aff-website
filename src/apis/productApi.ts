import { PagingResponse, ProductTemplateDetailResponse, ProductTemplateQuery, ProductTemplateResponse } from 'types';
import { productPath } from '../constants/apiPaths';
import axiosClient from './axiosClient';

export const ProductApi = {
  getProducts: (params: ProductTemplateQuery): Promise<PagingResponse<ProductTemplateResponse>> => {
    const url = `/${productPath}`;
    return axiosClient.get(url, { params });
  },
  getProduct: (productId: string): Promise<ProductTemplateDetailResponse> => {
    const url = `/${productPath}/${productId}`;
    return axiosClient.get(url);
  },
};
