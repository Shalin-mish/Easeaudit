import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ClientSatisfactionChart({ metrics = [] }) {
  const total = metrics.reduce((acc, m) => acc + m.value, 0);

  const data = {
    labels: ["Happy", "Neutral", "Unhappy"],
    datasets: [
      {
        data: [
          total * 0.6, // happy
          total * 0.3, // neutral
          total * 0.1, // unhappy
        ],
        backgroundColor: ["#0A6CFF", "#FFC107", "#FF4D4D"],
      },
    ],
  };

  return <Pie data={data} />;
}
