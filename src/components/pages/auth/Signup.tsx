import { AuthFormArea } from "@/components/organisms/auth/AuthFormArea";

export const Signup = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <AuthFormArea isSignin={false} />
    </div>
  );
};
