"use client";

import React, { useState } from "react";

import { toast } from "react-toastify";
import clsx from "clsx";

import { useAppDispatch } from "@/lib/hooks";
import { addTaskThunk } from "@/lib/tasks/thunks";

import { Button } from "@/components/ui/Button/Button";

import { TaskStatus } from "@/types/status";
import { ITask } from "@/types/task";

export const AddTaskForm = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    const newTask: ITask = {
      id: "",
      title,
      status: TaskStatus.NOT_STARTED,
      created: new Date().toISOString(),
    };
    setIsLoading(true);

    try {
      await dispatch(addTaskThunk(newTask));
      setTitle("");
      setError("");

      toast.success("Task successfully created!");
    } catch (err) {
      console.error(err);
      setError("Failed to add task");
      toast.error("Failed to add task");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex flex-col"
    >
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onInput={() => setError("")}
        className={clsx(
          "border border-gray-300 rounded-lg p-2 w-full text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500",
          error && "border-red-600"
        )}
      />
      <div className="h-7 p-1">
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Task"}
      </Button>
    </form>
  );
};
