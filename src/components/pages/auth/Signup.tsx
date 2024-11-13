import { AuthFormArea } from "@/components/organisms/auth/AuthFormArea";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { LoadingPage } from "../loading/LoadingPage";
import { setIsLoading } from "@/slice/loadingSlice";
import { authRepository } from "@/api/auth/auth";
import { authFormType } from "@/components/molecules/AuthForm";
import { EmailVerifiedModal } from "../modal/EmailVerifiedModal";
import { useState } from "react";

export const Signup = () => {
  const [isDisplayEmailVerified, setIsDisplayEmailVerified] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);

  if (isDisplayEmailVerified) return <EmailVerifiedModal email={userEmail} />;
  if (isLoading) return <LoadingPage />; //ローディング画面

  const handleSubmitForm = async (data: authFormType) => {
    dispatch(setIsLoading(true));
    try {
      console.log("try");
      if (data) {
        const user = await authRepository.signup(data);
        if (user) {
          //正常終了時(トークン送信)
          setUserEmail(data.email);
          setIsDisplayEmailVerified(true); //認証画面表示フラグ
          // localStorage.setItem("user", JSON.stringify(user));
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
        console.log("サインイン、サインアップエラー");
      } else {
        // 不明なエラーの場合
        console.log("不明なエラー");
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  console.log("SignUp", isDisplayEmailVerified);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <AuthFormArea isSignin={false} handleSubmitForm={handleSubmitForm} />
    </div>
  );
};
