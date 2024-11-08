import { Button } from "../ui/button";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthFormInput } from "../atoms/AuthFormInput";
import { FunctionComponent } from "react";
// import { useAppDispatch } from "@/hooks/reduxHooks";
// import { getCurrentUser } from "@/slice/userSlice";
// import { setIsLoading } from "@/slice/loadingSlice";
// import { authRepository } from "@/api/auth/auth";

export type authFormType = {
  username?: string;
  email: string;
  password: string;
};

type AuthFormProps = {
  isSignin: boolean;
  handleSubmitForm: SubmitHandler<authFormType>;
};

export const AuthForm: FunctionComponent<AuthFormProps> = ({ isSignin, handleSubmitForm }) => {
  // const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<authFormType>();

  //ボタンでイベント発火
  // const handleSubmitForm: SubmitHandler<authFormType> = async (data) => {
  //   //#TODO API叩く ユーザーネームがフォームに含まれているかで条件分岐
  //   dispatch(setIsLoading(true));
  //   try {
  //     if (data) {
  //       if (isSignin) {
  //         const user = await authRepository.signin(data);
  //         console.log(user);
  //         if (user) dispatch(getCurrentUser(user));
  //       } else {
  //         const user = await authRepository.signup(data);
  //         console.log(user);
  //         if (user) dispatch(getCurrentUser(user));
  //       }
  //     } else {
  //       console.log("データが入力されていない");
  //     }
  //   } catch (error: unknown) {
  //     // Errorインスタンスか確認
  //     if (error instanceof Error) {
  //       //ログインに失敗
  //       console.error(error.name, error.message);
  //       console.log("サインイン、サインアップエラー");
  //     } else {
  //       console.error("An unknown error occurred"); // 不明なエラーの場合
  //       console.log("不明なエラー");
  //     }
  //   }
  //   // await new Promise((resolve) => setTimeout(resolve, 1000));
  //   dispatch(setIsLoading(false));
  // };

  return (
    <div className="space-y-4">
      <form className="space-y-4" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="space-y-2">
          {isSignin ? null : (
            <AuthFormInput
              isInavlid={!!errors.username}
              label="ユーザーネーム"
              formType="username"
              control={control}
              placeholder="yeah"
            />
          )}
        </div>
        <div className="space-y-2">
          <AuthFormInput
            isInavlid={!!errors.email}
            label="メールアドレス"
            formType="email"
            control={control}
            placeholder="example@yeah.com"
          />
        </div>
        <div className="space-y-2 pb-4">
          <AuthFormInput
            isInavlid={!!errors.email}
            label="パスワード"
            formType="password"
            control={control}
            placeholder={undefined}
          />
        </div>
        {isSignin ? (
          <Button className="w-full bg-secondary-100 hover:bg-secondary-200 text-white">
            ログイン
          </Button>
        ) : (
          <Button className="w-full bg-secondary-100 hover:bg-secondary-200 text-white">
            新規登録
          </Button>
        )}
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-zinc-900 px-2 text-zinc-400">または</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button
          // variant="outline"
          className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white"
        >
          <FaSquareXTwitter className="mr-2 h-4 w-4" />
          X（Twitter）
        </Button>
        <Button
          // variant="outline"
          className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white"
        >
          <FcGoogle className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
    </div>
  );
};
