import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { TaskStatus } from "@/types/status";
import { IFilter } from "@/types/filter";

export const selectTasksWithFilters = createSelector(
  [(state) => state.tasks.items, (_, filters: IFilter) => filters],
  (tasks, filters) => {
    const sortedTasks = [...tasks];

    if (filters.sort === "newest") {
      sortedTasks.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
    } else if (filters.sort === "oldest") {
      sortedTasks.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
    }

    return sortedTasks.filter((task) => {
      const matchesTitle =
        !filters.title ||
        task.title.toLowerCase().includes(filters.title.toLowerCase());
      const matchesCompleted =
        !filters.status || task.status === filters.status;

      return matchesTitle && matchesCompleted;
    });
  }
);

export const selectTasks = (state: RootState) => {
  return state.tasks.items;
};

export const selectStatus = (state: RootState) => {
  return state.tasks.status;
};

export const selectStatistics = (state: RootState) => {
  const tasks = state.tasks.items;
  const statistics = {
    [TaskStatus.NOT_STARTED]: tasks.filter(
      (task) => task.status === TaskStatus.NOT_STARTED
    ).length,
    [TaskStatus.IN_PROGRESS]: tasks.filter(
      (task) => task.status === TaskStatus.IN_PROGRESS
    ).length,
    [TaskStatus.COMPLETED]: tasks.filter(
      (task) => task.status === TaskStatus.COMPLETED
    ).length,
  };
  return [
    { title: "Not Started", count: statistics[TaskStatus.NOT_STARTED] },
    { title: "In Progress", count: statistics[TaskStatus.IN_PROGRESS] },
    { title: "Completed", count: statistics[TaskStatus.COMPLETED] },
  ];
};
