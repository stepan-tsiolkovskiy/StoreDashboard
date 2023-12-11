import React from "react";
import { Cell, Pie, PieChart, Legend } from "recharts";

type PieFieldProps = {
  name: string;
  value: number;
};

type ChartPieProps = {
  data: PieFieldProps[];
};

const colors = ["#8884d8", "#82ca9d", "#ffc658"];

export const ChartPie: React.FC<ChartPieProps> = (props) => {
  const { data } = props;

  return (
    <>
      <PieChart width={680} height={400}>
        <Legend verticalAlign="bottom" height={36} />
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={180}
          label
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};
