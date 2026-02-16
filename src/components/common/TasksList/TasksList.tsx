import { FC } from "react";

import { useAppSelector } from "@/lib/hooks";
import { selectStatus } from "@/lib/tasks/selectors";

import { TaskListItem } from "../TaskListItem/TaskListItem";

import { ITask } from "@/types/task";

interface ITaskListProps {
  tasks: ITask[];
}

export const TasksList: FC<ITaskListProps> = ({ tasks }) => {
  const status = useAppSelector(selectStatus);
  return (
    <div className="h-[800px] overflow-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 w-full mx-auto">
      {status === "loading" ? (
        <p className="text-gray-400 text-center mt-20">Loading...</p>
      ) : tasks.length > 0 && status !== "failed" ? (
        <ul className="">
          {tasks.map((task) => (
            <TaskListItem key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center mt-20">
          No tasks available yet.
        </p>
      )}
    </div>
  );
};
