import { StatisticsTableRangeWidget } from "./StatisticsTableRangeWidget";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  Chart,
  TooltipModel,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { enGB } from "date-fns/locale";
import { numberFormat } from "@/utils/numberFormat";
import { addDays, format } from "date-fns";
import { Icon } from "@/app/icons/Icon";
import { renderToString } from "react-dom/server";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function StatisticsTable() {
  const data = [];
  const now = new Date();

  for (let i = 0; i <= 180; i++) {
    data.push({
      x: format(addDays(now, i + 1), "yyyy-MM-dd"),
      y: Math.ceil(Math.random() * (6000 - 6500) + 6000),
    });
  }

  const externalTooltipHandler = (context: {
    chart: Chart;
    tooltip: TooltipModel<"line">;
  }) => {
    let tooltipEl = document.getElementById("chartjs-tooltip");
    const tooltipModel = context.tooltip;
    console.log(tooltipModel);

    // Create element on first render
    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.id = "chartjs-tooltip";
      tooltipEl.style.display = "flex";

      const nodeDiv = document.createElement("div");
      nodeDiv.id = "tooltipNode";
      nodeDiv.style.height = "10px";
      nodeDiv.style.width = "10px";
      nodeDiv.style.backgroundColor = tooltipModel.labelColors[0]
        .borderColor as string;
      nodeDiv.style.border = "2.5px solid white";
      nodeDiv.style.borderRadius = "100%";
      tooltipEl.appendChild(nodeDiv);

      const contentDiv = document.createElement("div");
      contentDiv.style.backgroundColor = "white";
      contentDiv.style.border = "2px solid lightgray";
      contentDiv.style.borderRadius = "10px";
      contentDiv.style.padding = "10px";
      contentDiv.style.margin = "0 0 0 30px";
      contentDiv.style.display = "flex";
      contentDiv.style.gap = "10px";
      contentDiv.innerHTML = `<div style="color: ${
        tooltipModel.labelColors[0].borderColor as string
      };">${renderToString(
        <Icon name="node" size="small" />
      )}</div><div id='tooltipContent'></div>`;
      tooltipEl.appendChild(contentDiv);

      document.body.appendChild(tooltipEl);
    }

    // Hide if no tooltip

    if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = "0";
      return;
    }

    // Set caret Position
    tooltipEl.classList.remove("above", "below", "no-transform");
    if (tooltipModel.yAlign) {
      tooltipEl.classList.add(tooltipModel.yAlign);
    } else {
      tooltipEl.classList.add("no-transform");
    }

    // Set Text
    if (tooltipModel.body) {
      const title = tooltipModel.title[0] || [];
      const body = tooltipModel.body[0].lines[0];

      let innerHtml = "";

      const amount = '<span style="font-weight: bold;">$' + body + "</span>";
      const balanceText = '<span style="color: gray;"> balance</span>';
      innerHtml += "<p>" + amount + balanceText + "</p>";
      innerHtml += "<p style='font-size: 12px; color: gray;'>" + title + "</p>";

      const tooltipContent = tooltipEl.querySelector("#tooltipContent");

      if (tooltipContent) {
        tooltipContent.innerHTML = innerHtml;
      }
    }

    const position = context.chart.canvas.getBoundingClientRect();

    // Display, position tooltip
    tooltipEl.style.opacity = "1";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.left = position.left + tooltipModel.caretX - 5 + "px";
    tooltipEl.style.top = position.top + tooltipModel.caretY - 5 + "px";
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.display = "flex";
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg">Statistics</h4>
        <StatisticsTableRangeWidget />
      </div>
      <Line
        data={{
          datasets: [
            {
              label: "",
              data,
              borderColor: "green",
              backgroundColor: (context) => {
                if (!context.chart.chartArea) {
                  return;
                }
                const {
                  ctx,
                  chartArea: { top, bottom },
                } = context.chart;

                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0, "rgba(0, 255, 0, 0.3)");
                gradientBg.addColorStop(1, "transparent");
                return gradientBg;
              },
              fill: true,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
              position: "nearest",
              external: externalTooltipHandler,
            },
          },
          elements: {
            point: {
              pointStyle: false,
            },
          },
          interaction: {
            mode: "nearest",
          },
          scales: {
            y: {
              beginAtZero: true,
              type: "linear",
              max: 10000,
              border: {
                display: false,
                dash: [6, 6],
              },
              ticks: {
                callback: (value) => {
                  return "$" + numberFormat.format(value as number);
                },
                stepSize: 2000,
              },
              grid: {
                drawTicks: false,
              },
            },
            x: {
              type: "time",
              min: "2025-03-30",
              time: {
                unit: "month",
                displayFormats: {
                  month: "MMM yy",
                },
                tooltipFormat: "MMM dd, yyyy",
              },
              adapters: {
                date: {
                  locale: enGB,
                },
              },
              grid: {
                drawOnChartArea: false,
              },
            },
          },
        }}
      />
    </div>
  );
}
