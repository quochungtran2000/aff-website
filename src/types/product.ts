export type ProductResponse = {
  productId: string;
  name: string;
  originalUrl: string;
  thumbnail: string;
  average: number;
  sold: number;
  description: string;
  merchant: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  lastestCrawlAt: Date;
};

export type ProductTemplateResponse = {
  productTemplateId: number;
  productName: string;
  thumbnail: string;
  price: number;
  average: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductTemplateDetailResponse = {
  productTemplateId: number;
  productName: string;
  thumbnail: string;
  price: number;
  average: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  products: ProductResponse[];
};

export type ProductTemplateQuery = {
  page?: number;
  page_size?: number;
  search?: string;
};
