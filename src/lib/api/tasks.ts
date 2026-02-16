import { ITask, ITaskBodyOptional } from "@/types/task";

const url = process.env.NEXT_PUBLIC_BASE_URL;
const key = process.env.NEXT_PUBLIC_API_KEY;

export const getTasks = async () => {
  const res = await fetch(`${url}/tasks.json?key=${key}`);
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return await res.json();
};

export const addTask = async (body: ITask) => {
  const res = await fetch(`${url}/tasks.json?key=${key}`, {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
  return await res.json();
};

export const updateTaskById = async (name: string, body: ITaskBodyOptional) => {
  const res = await fetch(`${url}/tasks/${name}.json?key=${key}`, {
    method: "PATCH",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
  return await res.json();
};

export const deleteTask = async (id: string) => {
  const res = await fetch(`${url}/tasks/${id}.json?key=${key}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
  return await res.json();
};
