export type Stats = {
  label: string;
  value: number;
  type: "number" | "percentage" | "currency";
};

const stats: Stats[] = [
  {
    label: "Total Bets",
    value: 47,
    type: "number",
  },
  {
    label: "Win Rate",
    value: 15.7,
    type: "percentage",
  },
  {
    label: "Biggest Win",
    value: 145.5,
    type: "currency",
  },
  {
    label: "Worst Loss",
    value: -50,
    type: "currency",
  },
];

const distributions = [
  {
    label: "Football",
    value: 45,
  },
  {
    label: "Basketball",
    value: 30,
  },
  {
    label: "F1",
    value: 25,
  },
];

export const Betting = { stats, distributions };
