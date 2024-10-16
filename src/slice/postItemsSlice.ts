import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [
    {
      userImageUrl: "https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD",
      userName: "neon",
      postText: "",
    },
  ],
};

const postItemsSlice = createSlice({
  name: "postItems",
  initialState,
  reducers: {
    get: (state, action) => {
      state.post = action.payload;
    },
    post: (state, action) => {
      state.post.unshift(action.payload);
    },
  },
});

export const { get, post } = postItemsSlice.actions;
export default postItemsSlice.reducer;
