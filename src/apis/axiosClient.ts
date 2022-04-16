import axios, { AxiosInstance } from 'axios';
import queryString from 'query-string';

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3333/api/v1',
  paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config: any) => {
  const token = localStorage.getItem('token');

  if (token) config.headers.Authorization = token ? `Bearer ${token}` : '';
  config.headers['x-private-key'] = 'MasdhaMASHF@adfn%sad';
  config.headers['x-application-name'] = 'AFF-WEBSITE';

  return config;
});

axiosClient.interceptors.response.use((response) => {
  return response.data;
});

export default axiosClient;
