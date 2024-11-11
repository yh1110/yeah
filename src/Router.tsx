import { Home } from "./components/pages/main/Home";
import { Profile } from "./components/pages/main/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Activities } from "./components/pages/main/Activities";
import { Signin } from "./components/pages/auth/Signin";
import { Signup } from "./components/pages/auth/Signup";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { useEffect } from "react";
import { setIsLoading } from "./slice/loadingSlice";
// import { authRepository } from "./api/auth/auth";
import { getCurrentUser } from "./slice/userSlice";
import { LoadingPage } from "./components/pages/loading/LoadingPage";

export const Router = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);

  //ユーザー情報取得
  useEffect(() => {
    dispatch(setIsLoading(true));
    const setSession = async () => {
      try {
        //セッションからユーザー情報を取得
        const session = localStorage.getItem("user");
        if (session) {
          //セッションからユーザー情報を取得できた場合
          const user = JSON.parse(session);
          console.log(user);

          dispatch(getCurrentUser(user));
        }
      } catch (error) {
        if (error instanceof Error) {
          //ログインに失敗
          console.error(error.name, error.message);
          console.log("サインイン、サインアップエラー");
        } else {
          console.error("An unknown error occurred"); // 不明なエラーの場合
          console.log("不明なエラー");
        }
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    setSession();
  }, [dispatch]);

  if (isLoading) return <LoadingPage />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
};
