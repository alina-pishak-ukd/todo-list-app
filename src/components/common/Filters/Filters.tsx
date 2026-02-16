import React, { FC, ChangeEvent } from "react";

import { Button } from "@/components/ui/Button/Button";

import { IFilter } from "@/types/filter";
import { TaskStatus } from "@/types/status";

interface IFiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<IFilter>>;
  filters: IFilter;
}

export const Filters: FC<IFiltersProps> = ({ setFilters, filters }) => {
  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, sort: e.target.value }));
  };
  const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, status: e.target.value as TaskStatus }));
  };
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, title: e.target.value }));
  };
  const handleResetFilters = () => {
    setFilters({ sort: "", status: TaskStatus.NONE, title: "" });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 w-full mx-auto">
      {/* Title Input */}
      <div>
        <label htmlFor="title" className="block text-white text-sm mb-2">
          Task Title
        </label>
        <input
          id="title"
          type="text"
          value={filters.title}
          onChange={handleChangeTitle}
          className="w-full bg-gray-700 text-white rounded-md py-2 px-4 hover:bg-gray-600 transition-colors"
          placeholder="Search by title..."
        />
      </div>
      {/* Sort Dropdown */}
      <div>
        <label htmlFor="sort" className="block text-white text-sm mb-2">
          Sort by
        </label>
        <select
          id="sort"
          value={filters.sort}
          onChange={handleChangeSort}
          className="w-full bg-gray-700 text-white rounded-md py-2 px-4 hover:bg-gray-600 transition-colors"
        >
          <option value="">Sort</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Status Dropdown */}
      <div>
        <label htmlFor="status" className="block text-white text-sm mb-2">
          Status
        </label>
        <select
          id="status"
          value={filters.status}
          onChange={handleChangeStatus}
          className="w-full bg-gray-700 text-white rounded-md py-2 px-4 hover:bg-gray-600 transition-colors"
        >
          <option value={TaskStatus.NONE}>All tasks</option>
          <option value={TaskStatus.COMPLETED}>Completed</option>
          <option value={TaskStatus.NOT_STARTED}>Not Started</option>
          <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
        </select>
      </div>

      {/* Reset Button */}
      <Button
        onClick={handleResetFilters}
        className="w-full border border-blue-950 md:w-56"
      >
        Reset
      </Button>
    </div>
  );
};
