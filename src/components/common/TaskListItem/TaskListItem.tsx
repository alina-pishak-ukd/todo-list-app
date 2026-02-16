import React, { FC } from "react";

import clsx from "clsx";
import { Trash } from "lucide-react";

import { useAppDispatch } from "@/lib/hooks";
import { deleteTaskThunk, updateTaskThunk } from "@/lib/tasks/thunks";

import { TaskStatus } from "@/types/status";
import { ITask, ITaskBodyOptional } from "@/types/task";

interface ITaskListItemProps {
  task: ITask;
}

const statusColors: Record<TaskStatus, string> = {
  [TaskStatus.NONE]: "bg-grey-500",
  [TaskStatus.COMPLETED]: "bg-green-500",
  [TaskStatus.NOT_STARTED]: "bg-red-500",
  [TaskStatus.IN_PROGRESS]: "bg-yellow-500",
};

export const TaskListItem: FC<ITaskListItemProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const handleDeleteTask = async (id: string) => {
    await dispatch(deleteTaskThunk(id));
  };

  const handleChangeStatus = async (body: ITaskBodyOptional) => {
    await dispatch(updateTaskThunk(body));
  };

  return (
    <li
      className={clsx(
        "flex flex-col sm:flex-row sm:items-center justify-between bg-gray-700 transition-opacity duration-300 p-4 rounded-lg shadow-md mb-4 hover:bg-gray-700 gap-3 sm:gap-0",
        task.status === TaskStatus.COMPLETED && "opacity-50"
      )}
    >
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <span className={`w-3 h-3 rounded-full ${statusColors[task.status]}`} />

        <h2 className="text-lg font-semibold text-white truncate">
          {task.title}
        </h2>
      </div>

      <div className="flex items-center justify-between w-full sm:w-auto gap-3">
        <select
          value={task.status}
          onChange={(e) =>
            handleChangeStatus({
              id: task.id,
              status: e.target.value as TaskStatus,
            })
          }
          className="bg-gray-600 text-white rounded-md py-2 px-3 hover:bg-gray-600 transition-colors w-full sm:w-auto"
        >
          <option value={TaskStatus.COMPLETED}>Completed</option>
          <option value={TaskStatus.NOT_STARTED}>Not Started</option>
          <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
        </select>

        <button
          type="button"
          aria-label={`Delete task: ${task.title}`}
          onClick={() => handleDeleteTask(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-all transform hover:scale-105 flex items-center justify-center"
        >
          <Trash size={18} />
        </button>
      </div>
    </li>
  );
};
