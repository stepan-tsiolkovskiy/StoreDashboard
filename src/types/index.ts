export type ProductType = {
  id: number;
  date: string;
  productCategory: string;
  revenue: number;
  unitsSold: number;
  profitMargin: number;
};

export type DataType = {
  electronics: ProductType[];
  homeGoods: ProductType[];
  clothing: ProductType[];
};

export interface TableDataType {
  id: number;
  date: string;
  productCategory: string;
  revenue: number;
  unitsSold: number;
  profitMargin: number;
}

export enum TableColumns {
  DATE = "Date",
  PRODUCT = 'Product Type',
  REVENUE = 'Revenue',
  UNITS = 'Units Sold',
  PROFIT = 'Profit Margins'
}

export enum ProductCategory {
  Electronics = 'Electronics',
  Clothing = 'Clothing',
  HomeGoods = 'Home Goods',
}

export enum FilterByProductType {
  DEFAULT = '',
  ELECTRONICS = ProductCategory.Electronics,
  HOMEGOODS = ProductCategory.HomeGoods,
  CLOTHING = ProductCategory.Clothing
}

export enum SortByValue {
  DEFAULT = '',
  REVENUE = 'revenue',
  UNITS_SOLD = 'units sold',
  PROFIT_MARGINS = 'profit margins',
}

export enum ChartMetrics {
  UNITS_SOLD = "unitsSold",
  REVENUE = "revenue",
  PROFIT_MARGINS = "profitMargin",
}

export type ChartPieDataType = {
  name: string,
  value: number
}

export type CombinedDateType = {
  date: string;
  electronicsData: number;
  homegoodsData: number;
  clothingData: number;
}
