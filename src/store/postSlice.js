import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addpost: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { addpost } = postSlice.actions;

export default postSlice.reducer;
