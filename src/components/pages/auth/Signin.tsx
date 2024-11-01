import { AuthFormArea } from "@/components/organisms/auth/AuthFormArea";

export const Signin = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <AuthFormArea isSignin={true} />
    </div>
  );
};
