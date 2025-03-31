"use client";
import { cn, numberToCurrency } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data: {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  amount: number;
}[] = [
  {
    day: "Mon",
    amount: 45,
  },
  {
    day: "Tue",
    amount: -20,
  },
  {
    day: "Wed",
    amount: 65,
  },
  {
    day: "Thu",
    amount: 30,
  },
  {
    day: "Fri",
    amount: -15,
  },
];

export const DailySummary = () => {
  const largestAmount = useMemo(() => {
    return Math.max(...data.map((item) => item.amount));
  }, []);

  const smallestAmount = useMemo(() => {
    return Math.min(...data.map((item) => item.amount));
  }, []);

  return (
    <div className="relative size-full overflow-clip p-5 md:px-10">
      {/* <div className="absolute">
        <h6 className="text-foreground/50 text-lg">
          Daily Profit/Loss Summary
        </h6>
      </div> */}
      <div className="grid h-full grid-rows-1 gap-y-5 md:grid-cols-2">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="row-span-1 md:col-span-1"
        >
          <BarChart data={data} barCategoryGap={"5%"} compact>
            <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
              <LabelList
                dataKey="amount"
                position="top"
                className="text-foreground fill-current text-xs font-semibold md:text-base lg:text-xl"
                formatter={(value: number) => numberToCurrency(value)}
              />
              <LabelList
                dataKey="day"
                position="centerBottom"
                textAnchor="middle"
                angle={-90}
                className="text-foreground/70 fill-current text-xs font-bold uppercase lg:text-xl"
              />
              {data.map((item, index) => (
                <Cell
                  cursor="pointer"
                  className={cn(
                    "cursor-grab active:cursor-grabbing",
                    item.amount > 0 ? "fill-[#18ffaf]/70" : "fill-[#18ffaf]/30",
                  )}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
            <ReferenceLine y={0} stroke="currentColor" />
          </BarChart>
        </ResponsiveContainer>
        <div className="row-span-1 flex flex-row justify-between md:col-span-1 md:flex-col md:justify-around">
          <DailySummaryItem amount={largestAmount} label={"Best day"} />
          <DailySummaryItem amount={smallestAmount} label={"Worst day"} />
        </div>
      </div>
    </div>
  );
};
function DailySummaryItem({
  amount,
  label,
}: {
  amount: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p
        className={cn(
          "flex flex-row items-center gap-x-2 text-xl font-semibold md:flex-col md:text-5xl",
        )}
      >
        <span className={cn(amount > 0 ? "text-green-800" : "text-red-800")}>
          {amount > 0 ? <TrendingUp /> : <TrendingDown />}
        </span>
        <span>{numberToCurrency(amount)}</span>
      </p>
      <span className="text-foreground/50 text-xs md:text-base">{label}</span>
    </div>
  );
}
