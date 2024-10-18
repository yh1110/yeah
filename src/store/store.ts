import postItems from "@/slice/postItemsSlice";
import breadcrumbItems from "@/slice/breadcrumbSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    postItems,
    breadcrumbItems,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

type ExtractNested<T> = T extends { postItems: { post: infer U } } ? U : never;
export type postItemsType = ExtractNested<RootState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
