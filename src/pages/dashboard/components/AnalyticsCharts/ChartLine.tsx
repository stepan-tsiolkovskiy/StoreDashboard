import * as React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Legend
} from "recharts";
import { CombinedDateType, ProductCategory } from "../../../../types";
import colorConfigs from "../../../../configs/colorConfigs";
import sizeConfigs from "../../../../configs/sizeConfigs";

export const lineConfig = [
  { category: ProductCategory.Electronics, color: colorConfigs.charts.colors.electronics },
  { category: ProductCategory.Clothing, color: colorConfigs.charts.colors.clothings },
  { category: ProductCategory.HomeGoods, color: colorConfigs.charts.colors.homeGoods },
];

type ChartLineProps = {
  data: CombinedDateType[];
  metricType: 'revenue' | 'unitsSold' | 'profitMargin';
  selectedCategories: ProductCategory[];
};

export const ChartLine: React.FC<ChartLineProps> = (props) => {
  const { data, metricType, selectedCategories } = props;

  const filteredLineConfig = lineConfig.filter(config => selectedCategories.includes(config.category));

  return (
    <LineChart
      width={700}
      height={sizeConfigs.charts.line.height}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tickFormatter={(value) => value.slice(-2)} />
      <YAxis />
      <Tooltip />
      <Legend />

      {filteredLineConfig.map(config => {
        const categoryDataKey = `${config.category.toLowerCase()}Data`.replace(/\s+/g, '') as keyof CombinedDateType;
          return (
            <Line
              key={config.category}
              type="monotone"
              dataKey={categoryDataKey}
              stroke={config.color}
              name={`${config.category} - ${metricType}`}
            />
          );
        })}

      <YAxis yAxisId={0} label={{ value: metricType, angle: -90, position: 'insideLeft' }} />
    </LineChart>
  );
};