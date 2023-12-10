import { DataType } from "../types";

const electronicsData = [
  { id: 1, date: '2023-12-01', productCategory: 'Electronics', revenue: 5000, unitsSold: 50, profitMargin: 20 },
  { id: 2, date: '2023-12-02', productCategory: 'Electronics', revenue: 3000, unitsSold: 30, profitMargin: 25 },
  { id: 3, date: '2023-12-03', productCategory: 'Electronics', revenue: 2000, unitsSold: 25, profitMargin: 18 },
  { id: 4, date: '2023-12-04', productCategory: 'Electronics', revenue: 5500, unitsSold: 55, profitMargin: 22 },
  { id: 5, date: '2023-12-05', productCategory: 'Electronics', revenue: 3200, unitsSold: 32, profitMargin: 24 },
  { id: 6, date: '2023-12-06', productCategory: 'Electronics', revenue: 2100, unitsSold: 26, profitMargin: 19 },
  { id: 7, date: '2023-12-07', productCategory: 'Electronics', revenue: 5000, unitsSold: 50, profitMargin: 20 },
  { id: 8, date: '2023-12-08', productCategory: 'Electronics', revenue: 3000, unitsSold: 30, profitMargin: 25 },
  { id: 9, date: '2023-12-09', productCategory: 'Electronics', revenue: 2000, unitsSold: 25, profitMargin: 18 },
  { id: 10, date: '2023-12-10', productCategory: 'Electronics', revenue: 5500, unitsSold: 55, profitMargin: 22 },
  { id: 11, date: '2023-12-11', productCategory: 'Electronics', revenue: 3200, unitsSold: 32, profitMargin: 24 },
  { id: 12, date: '2023-12-12', productCategory: 'Electronics', revenue: 2100, unitsSold: 36, profitMargin: 19 },
  { id: 13, date: '2023-12-13', productCategory: 'Electronics', revenue: 5000, unitsSold: 20, profitMargin: 20 },
  { id: 14, date: '2023-12-14', productCategory: 'Electronics', revenue: 3000, unitsSold: 33, profitMargin: 25 },
  { id: 15, date: '2023-12-15', productCategory: 'Electronics', revenue: 2000, unitsSold: 15, profitMargin: 18 },
  { id: 16, date: '2023-12-16', productCategory: 'Electronics', revenue: 5500, unitsSold: 25, profitMargin: 22 },
  { id: 17, date: '2023-12-17', productCategory: 'Electronics', revenue: 3200, unitsSold: 42, profitMargin: 24 },
  { id: 18, date: '2023-12-18', productCategory: 'Electronics', revenue: 2100, unitsSold: 16, profitMargin: 19 },
  { id: 19, date: '2023-12-19', productCategory: 'Electronics', revenue: 5000, unitsSold: 70, profitMargin: 20 },
  { id: 20, date: '2023-12-20', productCategory: 'Electronics', revenue: 3000, unitsSold: 30, profitMargin: 25 },
  { id: 21, date: '2023-12-21', productCategory: 'Electronics', revenue: 2000, unitsSold: 25, profitMargin: 18 },
  { id: 22, date: '2023-12-22', productCategory: 'Electronics', revenue: 5500, unitsSold: 55, profitMargin: 22 },
  { id: 23, date: '2023-12-23', productCategory: 'Electronics', revenue: 3200, unitsSold: 32, profitMargin: 24 },
  { id: 24, date: '2023-12-24', productCategory: 'Electronics', revenue: 2100, unitsSold: 26, profitMargin: 19 },
  { id: 25, date: '2023-12-25', productCategory: 'Electronics', revenue: 5000, unitsSold: 10, profitMargin: 20 },
  { id: 26, date: '2023-12-26', productCategory: 'Electronics', revenue: 3000, unitsSold: 30, profitMargin: 25 },
  { id: 27, date: '2023-12-27', productCategory: 'Electronics', revenue: 2000, unitsSold: 25, profitMargin: 18 },
  { id: 28, date: '2023-12-28', productCategory: 'Electronics', revenue: 5500, unitsSold: 55, profitMargin: 22 },
  { id: 29, date: '2023-12-29', productCategory: 'Electronics', revenue: 3200, unitsSold: 32, profitMargin: 24 },
  { id: 30, date: '2023-12-30', productCategory: 'Electronics', revenue: 2100, unitsSold: 26, profitMargin: 19 },
];

const homeGoodsData = [
  { id: 31, date: '2023-12-01', productCategory: 'Home Goods', revenue: 3000, unitsSold: 30, profitMargin: 15 },
  { id: 32, date: '2023-12-02', productCategory: 'Home Goods', revenue: 2500, unitsSold: 25, profitMargin: 12 },
  { id: 33, date: '2023-12-03', productCategory: 'Home Goods', revenue: 2000, unitsSold: 20, profitMargin: 10 },
  { id: 34, date: '2023-12-04', productCategory: 'Home Goods', revenue: 3200, unitsSold: 32, profitMargin: 18 },
  { id: 35, date: '2023-12-05', productCategory: 'Home Goods', revenue: 2800, unitsSold: 28, profitMargin: 14 },
  { id: 36, date: '2023-12-06', productCategory: 'Home Goods', revenue: 3500, unitsSold: 35, profitMargin: 20 },
  { id: 37, date: '2023-12-07', productCategory: 'Home Goods', revenue: 4000, unitsSold: 40, profitMargin: 22 },
  { id: 38, date: '2023-12-08', productCategory: 'Home Goods', revenue: 4200, unitsSold: 42, profitMargin: 25 },
  { id: 39, date: '2023-12-09', productCategory: 'Home Goods', revenue: 3800, unitsSold: 38, profitMargin: 20 },
  { id: 40, date: '2023-12-10', productCategory: 'Home Goods', revenue: 4500, unitsSold: 45, profitMargin: 18 },
  { id: 41, date: '2023-12-11', productCategory: 'Home Goods', revenue: 4100, unitsSold: 41, profitMargin: 15 },
  { id: 42, date: '2023-12-12', productCategory: 'Home Goods', revenue: 4800, unitsSold: 48, profitMargin: 22 },
  { id: 43, date: '2023-12-13', productCategory: 'Home Goods', revenue: 5000, unitsSold: 50, profitMargin: 24 },
  { id: 44, date: '2023-12-14', productCategory: 'Home Goods', revenue: 5200, unitsSold: 52, profitMargin: 20 },
  { id: 45, date: '2023-12-15', productCategory: 'Home Goods', revenue: 4800, unitsSold: 48, profitMargin: 18 },
  { id: 46, date: '2023-12-16', productCategory: 'Home Goods', revenue: 5500, unitsSold: 55, profitMargin: 25 },
  { id: 47, date: '2023-12-17', productCategory: 'Home Goods', revenue: 5100, unitsSold: 51, profitMargin: 22 },
  { id: 48, date: '2023-12-18', productCategory: 'Home Goods', revenue: 5800, unitsSold: 58, profitMargin: 28 },
  { id: 49, date: '2023-12-19', productCategory: 'Home Goods', revenue: 6000, unitsSold: 60, profitMargin: 30 },
  { id: 50, date: '2023-12-20', productCategory: 'Home Goods', revenue: 6200, unitsSold: 62, profitMargin: 32 },
  { id: 51, date: '2023-12-21', productCategory: 'Home Goods', revenue: 5800, unitsSold: 58, profitMargin: 28 },
  { id: 52, date: '2023-12-22', productCategory: 'Home Goods', revenue: 6500, unitsSold: 65, profitMargin: 35 },
  { id: 53, date: '2023-12-23', productCategory: 'Home Goods', revenue: 6100, unitsSold: 61, profitMargin: 30 },
  { id: 54, date: '2023-12-24', productCategory: 'Home Goods', revenue: 6800, unitsSold: 68, profitMargin: 32 },
  { id: 55, date: '2023-12-25', productCategory: 'Home Goods', revenue: 7000, unitsSold: 70, profitMargin: 34 },
  { id: 56, date: '2023-12-26', productCategory: 'Home Goods', revenue: 7200, unitsSold: 72, profitMargin: 36 },
  { id: 57, date: '2023-12-27', productCategory: 'Home Goods', revenue: 6800, unitsSold: 68, profitMargin: 33 },
  { id: 58, date: '2023-12-28', productCategory: 'Home Goods', revenue: 7500, unitsSold: 75, profitMargin: 40 },
  { id: 59, date: '2023-12-29', productCategory: 'Home Goods', revenue: 7700, unitsSold: 77, profitMargin: 38 },
  { id: 60, date: '2023-12-30', productCategory: 'Home Goods', revenue: 7900, unitsSold: 79, profitMargin: 35 },
];

const clothingData = [
  { id: 61, date: '2023-12-01', productCategory: 'Clothing', revenue: 4000, unitsSold: 40, profitMargin: 18 },
  { id: 62, date: '2023-12-02', productCategory: 'Clothing', revenue: 3500, unitsSold: 35, profitMargin: 15 },
  { id: 63, date: '2023-12-03', productCategory: 'Clothing', revenue: 3000, unitsSold: 30, profitMargin: 12 },
  { id: 64, date: '2023-02-04', productCategory: 'Clothing', revenue: 4200, unitsSold: 42, profitMargin: 20 },
  { id: 65, date: '2023-12-05', productCategory: 'Clothing', revenue: 3800, unitsSold: 38, profitMargin: 16 },
  { id: 66, date: '2023-12-06', productCategory: 'Clothing', revenue: 4500, unitsSold: 45, profitMargin: 22 },
  { id: 67, date: '2023-12-07', productCategory: 'Clothing', revenue: 5000, unitsSold: 50, profitMargin: 25 },
  { id: 68, date: '2023-12-08', productCategory: 'Clothing', revenue: 5200, unitsSold: 52, profitMargin: 28 },
  { id: 69, date: '2023-12-09', productCategory: 'Clothing', revenue: 4800, unitsSold: 48, profitMargin: 24 },
  { id: 70, date: '2023-12-10', productCategory: 'Clothing', revenue: 5500, unitsSold: 55, profitMargin: 20 },
  { id: 71, date: '2023-12-11', productCategory: 'Clothing', revenue: 5100, unitsSold: 51, profitMargin: 18 },
  { id: 72, date: '2023-12-12', productCategory: 'Clothing', revenue: 5800, unitsSold: 58, profitMargin: 25 },
  { id: 73, date: '2023-12-13', productCategory: 'Clothing', revenue: 6000, unitsSold: 60, profitMargin: 28 },
  { id: 74, date: '2023-12-14', productCategory: 'Clothing', revenue: 6200, unitsSold: 62, profitMargin: 24 },
  { id: 75, date: '2023-12-15', productCategory: 'Clothing', revenue: 5800, unitsSold: 58, profitMargin: 22 },
  { id: 76, date: '2023-12-16', productCategory: 'Clothing', revenue: 6500, unitsSold: 65, profitMargin: 30 },
  { id: 77, date: '2023-12-17', productCategory: 'Clothing', revenue: 6100, unitsSold: 61, profitMargin: 26 },
  { id: 78, date: '2023-12-18', productCategory: 'Clothing', revenue: 6800, unitsSold: 68, profitMargin: 32 },
  { id: 79, date: '2023-12-19', productCategory: 'Clothing', revenue: 7000, unitsSold: 70, profitMargin: 35 },
  { id: 80, date: '2023-12-20', productCategory: 'Clothing', revenue: 7200, unitsSold: 72, profitMargin: 38 },
  { id: 81, date: '2023-12-21', productCategory: 'Clothing', revenue: 6800, unitsSold: 68, profitMargin: 34 },
  { id: 82, date: '2023-12-22', productCategory: 'Clothing', revenue: 7500, unitsSold: 75, profitMargin: 40 },
  { id: 83, date: '2023-12-23', productCategory: 'Clothing', revenue: 7100, unitsSold: 71, profitMargin: 36 },
  { id: 84, date: '2023-12-24', productCategory: 'Clothing', revenue: 7800, unitsSold: 78, profitMargin: 42 },
  { id: 85, date: '2023-12-25', productCategory: 'Clothing', revenue: 8000, unitsSold: 80, profitMargin: 45 },
  { id: 86, date: '2023-12-26', productCategory: 'Clothing', revenue: 8200, unitsSold: 82, profitMargin: 48 },
  { id: 87, date: '2023-12-27', productCategory: 'Clothing', revenue: 7800, unitsSold: 78, profitMargin: 44 },
  { id: 88, date: '2023-12-28', productCategory: 'Clothing', revenue: 8500, unitsSold: 85, profitMargin: 50 },
  { id: 89, date: '2023-12-29', productCategory: 'Clothing', revenue: 8700, unitsSold: 87, profitMargin: 52 },
  { id: 90, date: '2023-12-30', productCategory: 'Clothing', revenue: 8900, unitsSold: 89, profitMargin: 55 },
];

/*
export const lineConfig = [
  { category: ProductCategory.Electronics, color: "#82ca9d" },
  { category: ProductCategory.Clothing, color: "#8884d8" },
  { category: ProductCategory.HomeGoods, color: "#ffc658" },
]*/


export const fetchData = (): Promise<{ data: DataType }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          electronics: electronicsData,
          homeGoods: homeGoodsData,
          clothing: clothingData,
        },
      });
    }, 1000); // Simulate a delay of 1000 milliseconds
  });
};
