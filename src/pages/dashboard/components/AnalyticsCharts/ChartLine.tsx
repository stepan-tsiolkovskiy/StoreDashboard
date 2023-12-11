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

export const lineConfig = [
  { category: ProductCategory.Electronics, color: "#82ca9d" },
  { category: ProductCategory.Clothing, color: "#8884d8" },
  { category: ProductCategory.HomeGoods, color: "#ffc658" },
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
      width={680}
      height={400}
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