"use client";

import { RecentTasksList } from "@/components/common/RecentTasksList/RecentTasksList";
import { StatisticsList } from "@/components/common/StatisticsList/StatisticsList";
import { Title } from "@/components/ui/Title/Title";

export default function Page() {
  return (
    <div className="p-10 space-y-8 min-h-screen">
      <Title>Dashboard</Title>
      <p className="text-gray-300 text-lg max-w-2xl">
        Here you can get an overview of your tasks: how many are still pending,
        which are in progress, and how many have been completed. Stay organized
        and boost your productivity!
      </p>
      <StatisticsList />
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Recently Added Tasks</h3>
        <RecentTasksList />
      </div>
    </div>
  );
}
