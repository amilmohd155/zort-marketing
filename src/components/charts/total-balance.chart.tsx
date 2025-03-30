"use client";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const data = [
  { balance: 15.2 },
  { balance: 45.8 },
  { balance: 78.4 },
  { balance: 120.1 },
  { balance: 170.5 },
  { balance: 240.9 },
  { balance: 310.3 },
  { balance: 400.7 },
  { balance: 530.2 },
  { balance: 680.6 },
];

export const TotalBalanceChart = () => {
  return (
    <div className="relative size-full overflow-clip p-5 md:px-10">
      <div className="absolute">
        <h6 className="text-foreground/50 text-lg">Total Balance</h6>
        <h3 className="text-primary text-4xl md:text-6xl">{`£${data[data.length - 1].balance.toFixed(2)}`}</h3>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3E9C35" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3E9C35" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="linear"
            dataKey="balance"
            stroke="#3E9C35"
            fillOpacity={1}
            fill="url(#colorBalance)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
