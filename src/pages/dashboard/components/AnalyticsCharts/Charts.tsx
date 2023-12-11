import { Box, Card, CardContent, Grid } from "@mui/material";
import { ProductCategory, ProductType } from "../../../../types";
import { FC, useEffect, useState } from "react";
import { ChartLine } from "./ChartLine";
import { ChartPie } from "./ChartPie";
import { useAppSelector } from "../../../../redux/hooks";

export type ChartPieDataType = {
  name: string;
  value: number;
};

export type CombinedDateType = {
  date: string;
  electronicsData: number;
  homegoodsData: number;
  clothingData: number;
};

const initialSelectedCategory = [
  ProductCategory.Electronics,
  ProductCategory.Clothing,
  ProductCategory.HomeGoods,
];

const countUnitsSoldSum = (value: ProductType[]) => {
  return value.map((el) => el.unitsSold).reduce((el1, el2) => el1 + el2, 0);
};

const combineDataForPieChart = (
  electronics: ProductType[],
  homeGoods: ProductType[],
  clothing: ProductType[]
) => {
  return [
    {
      name: "electronics",
      value: countUnitsSoldSum(electronics),
    },
    {
      name: "clothing",
      value: countUnitsSoldSum(clothing),
    },
    {
      name: "homeGoods",
      value: countUnitsSoldSum(homeGoods),
    },
  ];
};

type ChartsProps = {
  selectedCategoriesToCompare: ProductCategory[];
};

export const Charts: FC<ChartsProps> = (props) => {
  const { selectedCategoriesToCompare } = props;
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>(
    initialSelectedCategory
  );

  const { products } = useAppSelector((state) => state.products);

  const combineProductData = (
    electronics: ProductType[],
    homeGoods: ProductType[],
    clothing: ProductType[]
  ) => {
    const data = electronics.map((el) => {
      const homeGoodsFindedRow = homeGoods.find((homeGood) => homeGood.date === el.date);
      const clothingFindedRow = clothing.find((closeGood) => closeGood.date === el.date);

      return {
        date: el.date,
        electronicsData: el.revenue,
        homegoodsData: homeGoodsFindedRow?.revenue || 0,
        clothingData: clothingFindedRow?.revenue || 0,
      };
    });

    return data;
  };

  const combinedData = combineProductData(
    products.electronics,
    products.clothing,
    products.homeGoods
  );
  const combineDataChartPie = combineDataForPieChart(
    products.electronics,
    products.clothing,
    products.homeGoods
  );

  useEffect(() => {
    selectedCategoriesToCompare.length > 0
      ? setSelectedCategories(
          initialSelectedCategory.filter((category) =>
            selectedCategoriesToCompare.includes(category)
          )
        )
      : setSelectedCategories(initialSelectedCategory);
  }, [selectedCategoriesToCompare]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <ChartLine
                data={combinedData}
                metricType="revenue"
                selectedCategories={selectedCategories}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ display: "flex", justifyContent: 'center'}}>
              <ChartPie 
                data={combineDataChartPie} 
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
