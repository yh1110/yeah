import { createSlice } from "@reduxjs/toolkit";

export type post = {
  id: number;
  userImageUrl: string;
  userName: string;
  postText: string;
  isActivateHeart: boolean;
};

type postItem = {
  post: post[];
};

const initialState: postItem = {
  post: [
    {
      id: 0,
      userImageUrl: "https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD",
      userName: "neon",
      postText: "",
      isActivateHeart: false,
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
    handleHeart: (state, action) => {
      console.log(action.payload);
      const { key, value } = action.payload;
      const targetPost = state.post.find((post) => post.id === key);
      if (targetPost) {
        targetPost.isActivateHeart = value;
      }
    },
  },
});

export const { get, post, handleHeart } = postItemsSlice.actions;
export default postItemsSlice.reducer;
