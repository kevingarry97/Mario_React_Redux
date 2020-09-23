import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "projects",
  initialState: {
    list: [],
  },
  reducers: {
    projectReceived: (projects, action) => {
      projects.list = action.payload;
    },
    projectCreated: (projects, action) => {
      projects.list.push(action.payload);
    },
  },
});

export const { projectCreated, projectReceived } = slice.actions;
export default slice.reducer;

const url = "project";

export const loadProjects = () =>
  apiCallBegan({
    url,
    onSuccess: projectReceived.type,
  });

export const addProject = (project) =>
  apiCallBegan({
    url,
    method: "post",
    data: project,
    onSuccess: projectCreated.type,
  });

export const getProjects = (state) => state.entities.projects.list;
