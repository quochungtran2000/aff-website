export type PagingResponse<T> = {
  total: number;
  data: T[];
};

export type PagingQueryVars = {
  page?: number;
  page_size?: number;
};
