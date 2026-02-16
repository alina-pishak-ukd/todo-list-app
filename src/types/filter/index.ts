import { TaskStatus } from "../status";

export interface IFilter {
  sort: string;
  status: TaskStatus;
  title: string;
}
