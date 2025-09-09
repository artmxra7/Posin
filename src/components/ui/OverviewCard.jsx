import { useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import SelectBar from "./SelectBar";
import iconCurrency from "../../assets/images/svg/icon-currency.svg";
import IconImpression from "../../assets/images/svg/icon-impression.svg";
import IconOrderBag from "../../assets/images/svg/icon-order-bag.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const OverviewCard = () => {
  const [active, setActive] = useState("profit");
  const [mode, setMode] = useState("monthly");
  const optionsSelect = [
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
    { value: "annually", label: "Annually" },
  ];

  // Dataset chart per mode + per card
  const datasets = {
    monthly: {
      profit: [250, 320, 300, 360, 340, 420, 380, 470, 400, 480, 360, 580],
      order: [40, 60, 55, 50, 70, 65, 80, 90, 85, 95, 70, 100],
      impression: [200, 250, 230, 270, 260, 310, 300, 340, 320, 360, 310, 400],
      labels: [
        "01 Jun",
        "02 Jun",
        "03 Jun",
        "04 Jun",
        "05 Jun",
        "06 Jun",
        "07 Jun",
        "08 Jun",
        "09 Jun",
        "10 Jun",
        "11 Jun",
        "12 Jun",
      ],
    },
    yearly: {
      profit: [
        3200, 3400, 3000, 3600, 4200, 3800, 4700, 4400, 4600, 5000, 5200, 6100,
      ],
      order: [600, 720, 690, 710, 780, 800, 820, 850, 870, 890, 910, 950],
      impression: [
        2800, 3000, 2900, 3100, 3300, 3500, 3400, 3600, 3800, 4000, 4200, 4500,
      ],
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    annually: {
      profit: [18000, 19500, 21000, 25000, 27000],
      order: [1200, 1300, 1500, 1600, 1750],
      impression: [8000, 9000, 10000, 12000, 14000],
      labels: ["2019", "2020", "2021", "2022", "2023"],
    },
  };

  const chartData = useMemo(() => {
    if (!datasets[mode]) return { labels: [], datasets: [] }; // guard biar aman

    return {
      labels: datasets[mode].labels,
      datasets: [
        {
          label: active,
          data: datasets[mode][active],
          borderColor: "#3B82F6",
          backgroundColor: "rgba(59,130,246,0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    };
  }, [mode, active]);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: false, // penting
      },
    },
    animation: {
      duration: 800,
      easing: "easeInOutQuart",
    },
  };

  // Card data
  const cardsData = {
    monthly: [
      {
        id: "profit",
        title: "Total profit",
        value: "$82,373.21",
        percent: "+3.4%",
        trend: "success",
        icon: iconCurrency,
        style:
          "flex items-center justify-center size-12 rounded-full bg-purple-200 text-gray-900 text-2xl",
      },
      {
        id: "order",
        title: "Total order",
        value: "7.238",
        percent: "-2.4%",
        trend: "error",
        icon: IconOrderBag,
        style:
          "flex items-center justify-center size-12 rounded-full bg-emerald-200 text-gray-900 text-2xl",
      },
      {
        id: "impression",
        title: "Impression",
        value: "3.1M",
        percent: "+4.8%",
        trend: "success",
        icon: IconImpression,
        style:
          "flex items-center justify-center size-12 rounded-full bg-purple-200 text-gray-900 text-2xl",
      },
    ],
    yearly: [
      {
        id: "profit",
        title: "Total profit",
        value: "$980,000.00",
        percent: "+6.2%",
        trend: "success",
        icon: iconCurrency,
        style:
          "flex items-center justify-center size-12 rounded-full bg-purple-200 text-gray-900 text-2xl",
      },
      {
        id: "order",
        title: "Total order",
        value: "92.438",
        percent: "-1.8%",
        trend: "error",
        icon: IconOrderBag,
        style:
          "flex items-center justify-center size-12 rounded-full bg-emerald-200 text-gray-900 text-2xl",
      },
      {
        id: "impression",
        title: "Impression",
        value: "42M",
        percent: "+7.1%",
        trend: "success",
        icon: IconImpression,
        style:
          "flex items-center justify-center size-12 rounded-full bg-purple-200 text-gray-900 text-2xl",
      },
    ],
    annually: [
      {
        id: "profit",
        title: "Total profit",
        value: "$4,500,000.00",
        percent: "+15.3%",
        trend: "success",
        icon: iconCurrency,
        style:
          "flex items-center justify-center size-12 rounded-full bg-purple-200 text-gray-900 text-2xl",
      },
      {
        id: "order",
        title: "Total order",
        value: "410.238",
        percent: "+4.5%",
        trend: "success",
        icon: IconOrderBag,
        style:
          "flex items-center justify-center size-12 rounded-full bg-emerald-200 text-gray-900 text-2xl",
      },
      {
        id: "impression",
        title: "Impression",
        value: "210M",
        percent: "-3.2%",
        trend: "error",
        icon: IconImpression,
        style:
          "flex items-center justify-center size-12 rounded-full bg-purple-200 text-gray-900 text-2xl",
      },
    ],
  };

  return (
    <div className="card card-border">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h4>Overview</h4>
          <SelectBar
            options={optionsSelect}
            defaultValue={optionsSelect[0]}
            onChange={(opt) => setMode(opt.value)}
          />
        </div>
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl p-3 bg-gray-100 dark:bg-gray-700 mt-4">
          {cardsData[mode].map((card) => (
            <button
              key={card.id}
              onClick={() => setActive(card.id)}
              className={`p-4 rounded-2xl cursor-pointer text-left transition duration-150 outline-hidden ${
                active === card.id
                  ? "bg-white shadow-md"
                  : "bg-transparent hover:bg-gray-200/40"
              }`}
            >
              <div className="flex gap-2  justify-between relative">
                <div>
                  <div className="mb-4 text-sm font-semibold">{card.title}</div>
                  <h3 className="mb-1">{card.value}</h3>
                  <div className="inline-flex items-center flex-wrap gap-1">
                    <span
                      className={`flex items-center font-bold text-${card.trend}`}
                    >
                      <span>{card.percent.startsWith("+") ? "+" : "-"}</span>
                      <span>
                        {card.percent.replace("+", "").replace("-", "")}
                      </span>
                    </span>
                    <span>from last month</span>
                  </div>
                </div>
                <div className={card.style}>
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Line Chart */}
        <div className="chartRef">
          <div className=" mt-4">
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
