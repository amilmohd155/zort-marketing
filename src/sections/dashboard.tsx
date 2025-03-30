import {
  DailySummary,
  MonthlySummary,
  OddDistributionChart,
  Slider,
  TotalBalanceChart,
} from "@/components";

export const Dashboard = () => {
  return (
    <section>
      <div className="container mx-auto max-h-screen max-w-screen-xl">
        <div className="space-y-5 px-4 py-12 md:py-24">
          <div className="flex items-center justify-center">
            <h2 className="max-w-xl bg-linear-120 from-[#5f5f60] via-[#9a9a9a] to-[#d8d8d8] bg-clip-text text-center text-3xl font-semibold text-transparent md:text-5xl">
              Real-Time Analytics Dashboards
            </h2>
          </div>
          <Slider className="h-[50vh] rounded-xl border">
            <TotalBalanceChart />
            <OddDistributionChart />
            <DailySummary />
            <MonthlySummary />
          </Slider>
        </div>
      </div>
    </section>
  );
};
