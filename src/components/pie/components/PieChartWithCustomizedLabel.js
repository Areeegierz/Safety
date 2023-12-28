import React, { Component } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
const data = [
  { name: "Line Walk", value: 100 },
  { name: "Safety Contact", value: 30 },
];

const COLORS = ["#00C49F", "#D6320F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class PieChartWithCustomizedLabel extends Component {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie
            dataKey="value"
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#003366"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default PieChartWithCustomizedLabel;
