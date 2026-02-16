"use client";

import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { createPortal } from "react-dom";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getTasksThunk } from "@/lib/tasks/thunks";
import { selectTasksWithFilters } from "@/lib/tasks/selectors";

import { AddTaskForm } from "@/components/common/AddTaskForm/AddTaskForm";
import { TasksList } from "@/components/common/TasksList/TasksList";
import { Filters } from "@/components/common/Filters/Filters";
import { Modal } from "@/components/ui/Modal/Modal";
import { Title } from "@/components/ui/Title/Title";

import { IFilter } from "@/types/filter";
import { TaskStatus } from "@/types/status";

export default function Page() {
  const dispatch = useAppDispatch();

  const [filters, setFilters] = useState<IFilter>({
    sort: "",
    status: TaskStatus.NONE,
    title: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tasks = useAppSelector((state) =>
    selectTasksWithFilters(state, filters)
  );

  useEffect(() => {
    dispatch(getTasksThunk());
  }, [dispatch]);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <div className="container min-h-screen flex flex-col gap-6 py-10">
      <Title>Tasks Management</Title>

      <Filters setFilters={setFilters} filters={filters} />
      <TasksList tasks={tasks} />
      <button
        onClick={toggleModal}
        aria-label="open modal create task"
        className="fixed bottom-6 right-6 p-4 bg-slate-400 text-white rounded-full shadow-lg transition hover:bg-slate-700"
      >
        <Plus />
      </button>

      {isModalOpen &&
        createPortal(
          <Modal onClose={toggleModal} title="Add task">
            <AddTaskForm />
          </Modal>,
          document.body
        )}
    </div>
  );
}
