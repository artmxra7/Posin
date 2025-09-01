import React from "react";

const ProgressCircle = ({
  value = 75,
  size = 80,
  strokeWidth = 8,
  color = "#F97316",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - value) / 100) * circumference;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      {/* Background Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#E5E7EB" // Tailwind gray-200
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      {/* Progress Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={progress}
        strokeLinecap="round"
        className="transition-all duration-700 ease-in-out"
      />
      {/* Text Tengah */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-gray-900 font-bold text-sm rotate-[90deg]"
      >
        {value}%
      </text>
    </svg>
  );
};

export default ProgressCircle;
