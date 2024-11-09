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
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
