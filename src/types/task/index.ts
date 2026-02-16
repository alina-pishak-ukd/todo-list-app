import { TaskStatus } from "../status";

export interface ITask {
  id: string;
  title: string;
  status: TaskStatus;
  created: string;
}

export interface ITaskState {
  items: ITask[];
  status: "idle" | "loading" | "failed";
}

export interface ITaskBodyOptional {
  id: string;
  title?: string;
  status?: TaskStatus;
  created?: string;
}
