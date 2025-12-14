import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function AuditsChart() {
  const data = [
    { month: "Oct", Financial: 12, Internal: 10, External: 14, Compliance: 9, IT: 6 },
    { month: "Nov", Financial: 30, Internal: 29, External: 31, Compliance: 28, IT: 10 },
    { month: "Dec", Financial: 21, Internal: 23, External: 20, Compliance: 22, IT: 11 },
    { month: "Jan", Financial: 33, Internal: 38, External: 26, Compliance: 22, IT: 12 },
    { month: "Feb", Financial: 18, Internal: 20, External: 16, Compliance: 19, IT: 6 },
    { month: "Mar", Financial: 25, Internal: 26, External: 18, Compliance: 17, IT: 16 },
  ];

  return (
    <div className="w-full h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Financial" fill="#0A6CFF" />
          <Bar dataKey="Internal" fill="#003A8C" />
          <Bar dataKey="External" fill="#4F83FF" />
          <Bar dataKey="Compliance" fill="#9BB8FF" />
          <Bar dataKey="IT" fill="#BFD4FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
