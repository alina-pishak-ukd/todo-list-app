import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getTasksThunk } from "@/lib/tasks/thunks";
import { selectStatus, selectTasksWithFilters } from "@/lib/tasks/selectors";

import { TaskStatus } from "@/types/status";

export const RecentTasksList = () => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectStatus);
  const tasks = useAppSelector((state) =>
    selectTasksWithFilters(state, {
      sort: "newest",
      status: TaskStatus.NONE,
      title: "",
    })
  );

  useEffect(() => {
    dispatch(getTasksThunk());
  }, [dispatch]);

  return status === "loading" ? (
    <p className="text-gray-400 text-center mt-20">Loading...</p>
  ) : tasks.length > 0 ? (
    <ul className="space-y-2">
      {tasks.slice(0, 5).map((task) => (
        <li key={task.id} className="border-b border-gray-700 pb-2">
          {task.title}
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-400">No tasks available yet.</p>
  );
};
