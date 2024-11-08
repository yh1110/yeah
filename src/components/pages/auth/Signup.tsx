import { AuthFormArea } from "@/components/organisms/auth/AuthFormArea";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { LoadingPage } from "../loading/LoadingPage";
import { Navigate } from "react-router-dom";
import { setIsLoading } from "@/slice/loadingSlice";
import { authRepository } from "@/api/auth/auth";
import { getCurrentUser } from "@/slice/userSlice";
import { authFormType } from "@/components/molecules/AuthForm";
import { setIsEmailVerified } from "@/slice/isEmailVerified";

export const Signup = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
  const currentUser = useAppSelector((state) => state.user.user);

  const handleSubmitForm = async (data: authFormType) => {
    dispatch(setIsLoading(true));
    try {
      if (data) {
        const user = await authRepository.signup(data);
        console.log(user);
        if (user) {
          //正常終了時
          dispatch(getCurrentUser(user));
          dispatch(setIsEmailVerified(false)); //認証画面表示フラグ
        } else {
          console.log("ユーザー情報無し");
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
    }
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(setIsLoading(false));
  };

  if (isLoading) return <LoadingPage />; //ローディング画面
  if (currentUser) return <Navigate replace to="/" />; //トップページへ遷移

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <AuthFormArea isSignin={false} handleSubmitForm={handleSubmitForm} />
    </div>
  );
};
