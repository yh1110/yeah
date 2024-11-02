import { AuthFormArea } from "@/components/organisms/auth/AuthFormArea";
import { useAppSelector } from "@/hooks/reduxHooks";
import { LoadingPage } from "../loading/LoadingPage";
import { Navigate } from "react-router-dom";

export const Signin = () => {
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
  const currentUser = useAppSelector((state) => state.user.user);
  if (isLoading) return <LoadingPage />;
  if (currentUser !== null) return <Navigate replace to="/" />; //トップページへ遷移
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <AuthFormArea isSignin={true} />
    </div>
  );
};
