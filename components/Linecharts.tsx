"use client";

import { CartesianGrid, LabelList, Line, LineChart } from "recharts";

import {
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with a custom label";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-2))",
  },
  chrome: {
    label: "Canada",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "US",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Mexico",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Italia",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const Linecharts = () => {
  return (
    <>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="visitors"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="visitors"
              type="natural"
              stroke="var(--color-visitors)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-visitors)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                dataKey="browser"
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </>
  );
};
export default Linecharts;
