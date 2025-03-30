"use client";

import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis } from "recharts";

const oddsDistribution = [
  { range: "1.5-2.0", percentage: 35 },
  { range: "2.0-3.0", percentage: 45 },
  { range: "3.0-5.0", percentage: 15 },
  { range: "5.0+", percentage: 5 },
];

export const OddDistributionChart = () => {
  const renderLabel = (props: any) => {
    return <p className="text-sm text-blue-500">{props.value}</p>;
  };
  return (
    <div className="relative size-full overflow-clip p-5 md:px-10">
      <div className="absolute">
        <h6 className="text-lg">Odds Distribution</h6>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={oddsDistribution}>
          <defs>
            <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3E9C35" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3E9C35" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey={"range"} axisLine={false} tickLine={false} />
          <Bar
            dataKey="percentage"
            fill="url(#gradientColor)"
            radius={[5, 5, 0, 0]}
            label={{
              position: "top",
              formatter: (value: number) => `${value}%`,
            }}
          >
            {/* <LabelList
              dataKey="percentage"
              position="top"
              // formatter={(value: number) => `${value}%`}
              content={(props) => {
                return <p className="text-sm text-blue-500">{props.value}</p>;
              }}
            /> */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
