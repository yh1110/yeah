import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    //現在のuser情報のグローバルステート
    setIsLoading: (state, action) => {
      console.log(action.payload);
      state.isLoading = action.payload;
      console.log(state.isLoading);
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
