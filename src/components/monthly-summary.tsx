import { numberToCurrency } from "@/lib/utils";
import { MoveDown, MoveUp } from "lucide-react";
import { FaTrophy } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";

const summary = {
  totalProfit: 309.15,
  winRateInPercent: 32,
  biggestWin: 262.5,
  biggestLoss: -49.6,
  averageStake: 16.92,
  averageOdds: 71.11,
};

export const MonthlySummary = () => {
  return (
    <div className="flex size-full flex-col gap-y-2 overflow-clip p-5 md:px-10">
      <p className="text-foreground text-lg md:self-start">Jan 2025 Summary</p>
      <div className="flex grow flex-col items-center justify-center md:gap-y-3">
        {/* Biggest Win/Loss */}
        <Card label="Biggest Win / Worst Loss">
          <span>{numberToCurrency(summary.biggestWin)}</span>
          <span className="flex flex-row items-center">
            <MoveUp className="-me-1.5 size-5 -translate-y-0.5 text-green-800" />
            <MoveDown className="-ms-1.5 size-5 translate-y-0.5 text-red-800" />
          </span>
          <span>{numberToCurrency(summary.biggestLoss)}</span>
        </Card>
        <div className="mx-auto h-px w-1/3 bg-white/10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" />

        {/* Total Profit */}
        <Card label="Total Profit / Win Rate">
          <span>{numberToCurrency(summary.totalProfit)}</span>
          <FaTrophy className="text-yellow-300" />
          <span>{`${summary.winRateInPercent.toFixed(2)}%`}</span>
        </Card>

        <div className="mx-auto h-px w-1/3 bg-white/10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" />

        {/* Average Stake / Average Odds */}
        <Card label="Average Stake / Odds">
          <span>{numberToCurrency(summary.averageStake)}</span>
          <GiPayMoney className="text-green-600" />
          <span>{numberToCurrency(summary.averageOdds)}</span>
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-3 px-3 py-2 text-center">
      <p className="text-foreground/50 text-sm">{label}</p>

      <div className="flex flex-row items-center justify-around gap-x-3 text-xl">
        {children}
      </div>
    </div>
  );
};
