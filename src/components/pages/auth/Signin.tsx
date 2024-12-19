import { AuthFormArea } from "@/components/organisms/auth/AuthFormArea";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { LoadingPage } from "../loading/LoadingPage";
import { Navigate } from "react-router-dom";
import { authRepository } from "@/api/auth/auth";
import { setIsLoading } from "@/slice/loadingSlice";
import { getCurrentUser } from "@/slice/userSlice";
import { authFormType } from "@/components/molecules/AuthForm";
import { CircleX } from "lucide-react";
import { useState } from "react";

export const Signin = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
  const currentUser = useAppSelector((state) => state.user.user);

  if (currentUser) return <Navigate replace to="/" />; //トップページへ遷移 #TODO
  if (isLoading) return <LoadingPage />;

  const handleSubmitForm = async (data: authFormType) => {
    dispatch(setIsLoading(true));
    try {
      if (data) {
        const user = await authRepository.signin(data);

        if (user) {
          //セッションに登録
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(getCurrentUser(user));
        }
      } else {
        // zodで管理
      }
    } catch (e: unknown) {
      // Errorインスタンスか確認
      if (e instanceof Error) {
        //ログインに失敗
        setIsError(true);
        setErrorMsg(e.message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {isError ? (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2  text-text-300 py-2 px-6 rounded  animate-fade-out flex justify-center items-center w-full ">
          <CircleX className="text-red-800 mr-2" />
          <p className="text-text-300 font-semibold text-sm">{errorMsg}</p>
        </div>
      ) : null}
      <AuthFormArea isSignin={true} handleSubmitForm={handleSubmitForm} />
    </div>
  );
};
