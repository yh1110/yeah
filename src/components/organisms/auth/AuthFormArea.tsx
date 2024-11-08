import { AuthForm, authFormType } from "@/components/molecules/AuthForm";
import { Card, CardBody, CardFooter, CardHeader } from "@yamada-ui/react";
import { FunctionComponent } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type AuthFormAreaProps = {
  isSignin: boolean;
  handleSubmitForm: SubmitHandler<authFormType>;
};
export const AuthFormArea: FunctionComponent<AuthFormAreaProps> = ({
  isSignin,
  handleSubmitForm,
}) => {
  return (
    <Card
      className=" max-w-md "
      w="full"
      maxW="lg"
      variant="elevated"
      style={{ backgroundColor: "#171717" }}
      alignItems="center"
    >
      <CardHeader className="space-y-3 text-center" alignItems="center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter bg-secondary-300 text-transparent bg-clip-text">
            Yeah!
          </h1>
          <p className="text-zinc-400 text-sm">色がオシャレなSNS</p>
        </div>
      </CardHeader>
      <CardBody>
        {/* フォーム */}
        <AuthForm isSignin={isSignin} handleSubmitForm={handleSubmitForm} />
      </CardBody>
      {isSignin ? (
        <CardFooter className="flex flex-col space-y-4 mt-2">
          <div className="text-sm text-zinc-400 text-center">
            アカウントをお持ちでない方は
            <Link to="/signup" className="text-emerald-400 hover:text-emerald-300 ml-1">
              新規登録
            </Link>
          </div>
          <div className="text-xs text-zinc-500 text-center">
            <a href="#" className="hover:text-zinc-400">
              パスワードをお忘れの方
            </a>
          </div>
        </CardFooter>
      ) : (
        <CardFooter className="flex flex-col space-y-4 mt-2">
          <div className="text-sm text-zinc-400 text-center mb-4">
            アカウントをお持ちの方は
            <Link to="/signin" className="text-emerald-400 hover:text-emerald-300 ml-1">
              こちら
            </Link>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
