import { AuthFormArea } from "@/components/organisms/auth/AuthFormArea";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { LoadingPage } from "../loading/LoadingPage";
import { Navigate } from "react-router-dom";
import { authRepository } from "@/api/auth/auth";
import { setIsLoading } from "@/slice/loadingSlice";
import { getCurrentUser } from "@/slice/userSlice";
import { authFormType } from "@/components/molecules/AuthForm";

export const Signin = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
  const currentUser = useAppSelector((state) => state.user.user);

  if (currentUser) return <Navigate replace to="/" />; //トップページへ遷移
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
        console.log("データが入力されていない");
      }
    } catch (error: unknown) {
      // Errorインスタンスか確認
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
    // await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <AuthFormArea isSignin={true} handleSubmitForm={handleSubmitForm} />
    </div>
  );
};
