import { AuthFormArea } from "@/components/organisms/auth/AuthFormArea";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { LoadingPage } from "../loading/LoadingPage";
import { setIsLoading } from "@/slice/loadingSlice";
import { authRepository } from "@/api/auth/auth";
import { authFormType } from "@/components/molecules/AuthForm";
import { EmailVerifiedModal } from "../modal/EmailVerifiedModal";
import { useState } from "react";
import { CircleX } from "lucide-react";

export const Signup = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isDisplayEmailVerified, setIsDisplayEmailVerified] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);

  if (isDisplayEmailVerified) return <EmailVerifiedModal email={userEmail} />;
  if (isLoading) return <LoadingPage />; //ローディング画面

  const handleSubmitForm = async (data: authFormType) => {
    dispatch(setIsLoading(true));
    try {
      if (data) {
        const user = await authRepository.signup(data);

        if (user) {
          //正常終了時(トークン送信)
          setUserEmail(data.email);
          setIsDisplayEmailVerified(true); //認証画面表示フラグ
          // localStorage.setItem("user", JSON.stringify(user));
        }
      } else {
        // zodで管理
      }
    } catch (e: unknown) {
      // Errorインスタンスか確認
      if (e instanceof Error) {
        //新規登録に失敗
        setIsError(true);
        setErrorMsg(e.message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  console.log("SignUp", isDisplayEmailVerified);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {isError ? (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2  text-text-300 py-2 px-6 rounded  animate-fade-out flex justify-center items-center w-full ">
          <CircleX className="text-red-800 mr-2" />
          <p className="text-text-300 font-semibold text-sm">{errorMsg}</p>
        </div>
      ) : null}
      <AuthFormArea isSignin={false} handleSubmitForm={handleSubmitForm} />
    </div>
  );
};
