import { authRepository } from "@/api/auth/auth";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setIsLoading } from "@/slice/loadingSlice";
import { getCurrentUser } from "@/slice/userSlice";
import { Button, FormControl, PinInput } from "@yamada-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { LoadingPage } from "../loading/LoadingPage";
import { CircleCheck } from "lucide-react";

type EmailVerifiedModal = {
  email: string;
};
type Data = { pinInput: string };

export const EmailVerifiedModal: FunctionComponent<EmailVerifiedModal> = ({ email }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false); // 表示を終了
      }, 2500); // 3秒後に自動で非表示
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  //認証
  const verifyOtp: SubmitHandler<Data> = async (data) => {
    try {
      dispatch(setIsLoading(true));
      const user = await authRepository.verifyOtp(email, data.pinInput);
      if (user) {
        console.log(user);
        dispatch(getCurrentUser(user));
        setIsEmailVerified(true);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.name, e.message);
      } else {
        console.error("不明なエラー");
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  if (isEmailVerified) return <Navigate replace to="/" />;
  if (isLoading) return <LoadingPage />; //ローディング画面

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-300">
      {isVisible ? (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2  text-text-200 py-2 px-6 rounded shadow-md animate-fade-out flex ">
          <CircleCheck className="text-secondary-300 mr-2" />
          <p className="text-text-200 font-semibold ">メールを送信しました</p>
        </div>
      ) : null}
      <div className="w-full max-w-sm mx-auto space-y-6">
        <div className="space-y-2 text-center  ">
          <h2 className="text-3xl font-bold text-text-200">認証コードを入力</h2>
          <div className=" w-3/4 mx-auto">
            <p className="text-sm text-muted-foreground text-text-300 break-word">
              メールに記載されている6桁の認証コードを入力してください
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(verifyOtp)} className="space-y-4">
          <FormControl isInvalid={!!errors.pinInput}>
            <div className="mb-8">
              <label htmlFor="auth-code-input-0" className="sr-only">
                認証コード
              </label>
              <div className="flex justify-center">
                <Controller
                  name="pinInput"
                  control={control}
                  rules={{
                    required: { value: true, message: "必須項目です" },
                  }}
                  render={({ field }) => (
                    <PinInput {...field} items={6} style={{ color: "#F3F3F3" }} />
                  )}
                />
              </div>
            </div>
            <div className="flex justify-center text-text-200">
              <Button
                type="submit"
                style={{ width: "75%", backgroundColor: "#287150", color: "#F3F3F3" }}
              >
                認証
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    </div>
  );
};
