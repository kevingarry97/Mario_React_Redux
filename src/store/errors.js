import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    msg: {},
    status: null,
    id: null,
  },
  reducers: {
    errorRecieved: (state, action) => {
      state.msg = action.payload.msg;
      state.status = action.payload.status;
      state.id = action.payload.id;
    },
    errorCleared: (state, action) => {
      state.msg = {};
      state.status = null;
      state.id = null;
    },
  },
});

export const { errorRecieved } = slice.actions;
export default slice.reducer;
