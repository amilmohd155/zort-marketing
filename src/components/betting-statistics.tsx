import { numberToCurrency } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { Betting, Stats } from "@/data";

export default function BettingStatistics() {
  return (
    <div className="flex size-full flex-col gap-y-4 overflow-clip md:gap-y-0">
      <p className="text-foreground px-4 pt-4 text-center text-lg md:text-start">
        Statistics & Distribution
      </p>
      <div className="grid grow grid-rows-2 md:grid-cols-[1fr_1fr] md:grid-rows-1 md:items-center">
        <div className="col-span-1 grid grid-cols-2 grid-rows-2 gap-5 px-5">
          {Betting.stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>

        {/* <div className="mx-auto h-px w-1/2 bg-white/10 md:hidden" /> */}

        <Table className="grid-cols-1">
          <TableBody>
            {Betting.distributions.map((item) => (
              <TableRow key={item.label} className="">
                <TableCell className="font-medium md:text-lg">
                  {item.label}
                </TableCell>
                <TableCell className="">{`${item.value}%`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const StatItem = ({ label, value, type }: Stats) => {
  let formattedValue: string;

  switch (type) {
    case "number":
      formattedValue = value.toString();
      break;
    case "percentage":
      formattedValue = `${value}%`;
      break;
    case "currency":
      formattedValue = numberToCurrency(value);
      break;
  }

  return (
    <figure className="flex flex-col items-center">
      <p className="text-2xl font-bold lg:text-3xl">{formattedValue}</p>
      <figcaption className="text-xs">{label}</figcaption>
    </figure>
  );
};
