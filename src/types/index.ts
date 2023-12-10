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
/*
export interface DailySalesFigure {
  id: number, 
  date: string, 
  productCategory: string, 
  revenue: number, 
  unitsSold: number, 
  profitMargin: number 
}

export enum ProductCategory {
  Electronics = 'Electronics',
  Clothing = 'Clothing',
  HomeGoods = 'Home Goods',
}

export enum DataFields {
  DATE = "Date",
  PRODUCT = 'Product Type',
  REVENUE = 'Revenue',
  UNITS = 'Units Sold',
  PROFIT = 'Profit Margins'
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
}*/