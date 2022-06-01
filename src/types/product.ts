export type ProductVariant = {
  sku: string;
  productId: string;
  variantName: string;
  variantImageUrl: string;
  listPrice: number;
  salePrice: number;
  isSale: boolean;
  discountPercent: number;
  images?: string[];
};

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
  variants: ProductVariant[];
};

export type ProductTemplateResponse = {
  productTemplateId: number;
  productName: string;
  thumbnail: string;
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
  items: ProductResponse[];
};

export type ProductTemplateQuery = {
  page?: number;
  page_size?: number;
  search?: string;
  categoryId?: number;
};
