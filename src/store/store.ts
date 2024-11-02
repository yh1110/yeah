import postItems from "@/slice/postItemsSlice";
import breadcrumbItems from "@/slice/breadcrumbSlice";
import user from "@/slice/userSlice";
import isLoading from "@/slice/loadingSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    postItems,
    breadcrumbItems,
    user,
    isLoading,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type ExtractNested<T> = T extends { postItems: { post: infer U } } ? U : never;
export type postItemsType = ExtractNested<RootState>;
export type AppDispatch = typeof store.dispatch;
