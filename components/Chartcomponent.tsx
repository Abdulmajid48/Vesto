"use client";

import { Label, Pie, PieChart } from "recharts";

import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";

export const description = "A donut chart";

const chartData = [
  { browser: "Acme Canada", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Acme US, Inc ", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Acme Mexico, SA", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "Acme Italia S.p.A", visitors: 173, fill: "var(--color-edge)" },
  // { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

function Chartcomponent() {
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}

const Chartlist = () => {
  interface Content {
    name: string;
    color: string;
  }
  return (
    <div className="sm:m-0 text-[#2E2E27] text-xs">
      <ul className="flex flex-col gap-1 sm:gap-4">
        {Chartlistcontent.map((content, index) => {
          const { name, color }: Content = content;
          return (
            <li
              className="flex flex-row justify-start items-center gap-1"
              key={index}
            >
              <div className={`h-3 w-3 ${color} rounded-full`}></div>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Chartlistcontent = [
  {
    name: "Acme Canada",
    color: "bg-[#0f766e]",
  },
  {
    name: "Acme US, Inc",
    color: "bg-[#f97316]",
  },
  {
    name: "Acme Mexico, SA",
    color: "bg-[#111827]",
  },
  {
    name: "Acme Italia S.p.A",
    color: "bg-[#eab308]",
  },
];

export default Chartcomponent;
export { Chartlist };
