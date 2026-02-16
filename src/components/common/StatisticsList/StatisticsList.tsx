import React from "react";

import { useAppSelector } from "@/lib/hooks";
import { selectStatistics } from "@/lib/tasks/selectors";

interface IStatistics {
  title: string;
  count: number;
}

export const StatisticsList = () => {
  const statistics: IStatistics[] = useAppSelector(selectStatistics);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statistics.map((statistic, index) => (
        <li
          key={index}
          className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-xl font-semibold mb-1">{statistic.title}</h2>
          <p className="text-4xl font-bold">{statistic.count}</p>
        </li>
      ))}
    </ul>
  );
};
