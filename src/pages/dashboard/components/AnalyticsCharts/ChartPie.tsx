import React from "react";
import { Cell, Pie, PieChart, Legend } from "recharts";
import colorConfigs from "../../../../configs/colorConfigs";
import sizeConfigs from "../../../../configs/sizeConfigs";

type PieFieldProps = {
  name: string;
  value: number;
};

type ChartPieProps = {
  data: PieFieldProps[];
};

const colors = [
  colorConfigs.charts.colors.electronics,
  colorConfigs.charts.colors.clothings,
  colorConfigs.charts.colors.homeGoods,
];

export const ChartPie: React.FC<ChartPieProps> = (props) => {
  const { data } = props;

  return (
    <>
      <PieChart width={sizeConfigs.charts.pie.width} height={sizeConfigs.charts.pie.height}>
        <Legend verticalAlign="bottom" height={25}/>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={sizeConfigs.charts.pie.radius}
          label
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]}/>
          ))}
        </Pie>
      </PieChart>
    </>
  );
};
