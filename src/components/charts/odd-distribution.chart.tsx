"use client";

import { memo } from "react";
import {
  Bar,
  BarChart,
  Label,
  LabelList,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const oddsDistribution = [
  { range: "1.5-2.0", percentage: 35 },
  { range: "2.0-3.0", percentage: 45 },
  { range: "3.0-5.0", percentage: 15 },
  { range: "5.0+", percentage: 5 },
];

export const OddDistributionChart = () => {
  // const renderCustomizedLabel = (props: any) => {
  //   const { x, y, width, value } = props;
  //   const offset = 10;

  //   return (
  //     <g>
  //       <text
  //         x={x + width / 2}
  //         y={y - offset}
  //         fill="currentColor"
  //         textAnchor="middle"
  //         dominantBaseline="middle"
  //         className="text-foreground/50 text-xs md:text-base"
  //       >
  //         {value}%
  //       </text>
  //     </g>
  //   );
  // };

  return (
    <div className="relative size-full overflow-clip p-5 md:px-10">
      <div className="absolute right-0 left-0 text-center md:left-10 md:text-start">
        <h6 className="text-foreground/50 text-lg">Odds Distribution</h6>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={oddsDistribution}>
          <defs>
            <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3E9C35" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3E9C35" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey={"range"}
            axisLine={false}
            tickLine={false}
            tick={(props) => <AxisLabel {...props} />}
          />
          <Bar
            dataKey="percentage"
            fill="url(#gradientColor)"
            radius={[5, 5, 0, 0]}
          >
            <LabelList
              dataKey="percentage"
              position="top"
              formatter={(value: number) => `${value}%`}
              height={20}
              // content={(props) => <BarLabel {...props} />}
              className="fill-foreground/50 text-xs md:text-base"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const AxisLabel = memo(
  (props: { x: number; y: number; payload: { value: string } }) => {
    const {
      x,
      y,
      payload: { value },
    } = props;

    return (
      <g>
        <text
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-foreground/50 text-xs md:text-base"
        >
          {value}
        </text>
      </g>
    );
  },
);

AxisLabel.displayName = "AxisLabel";
