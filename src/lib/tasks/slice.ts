import { createSlice } from "@reduxjs/toolkit";

import {
  addTaskThunk,
  deleteTaskThunk,
  getTasksThunk,
  updateTaskThunk,
} from "./thunks";

import { ITaskState } from "@/types/task";

const initialState: ITaskState = {
  items: [],
  status: "loading",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasksThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTasksThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload ? Object.values(action.payload) : [];
      })
      .addCase(getTasksThunk.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addTaskThunk.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(updateTaskThunk.fulfilled, (state, action) => {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload };
          } else {
            return item;
          }
        });
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
