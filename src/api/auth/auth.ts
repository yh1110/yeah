import { authFormType } from "@/components/molecules/AuthForm";
import { supabase } from "../client";
import { User } from "@supabase/supabase-js";
import { type EmailOtpType } from "@supabase/supabase-js";

export interface authUser {
  userData: User | null;
  userName: string;
}

export const authRepository = {
  async signup(userData: authFormType): Promise<authUser | null> {
    const { username, email, password } = userData;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name: username } },
    });
    if (error) {
      console.error("signupError:", error.message);
      throw new Error(error.message);
    }

    return { userData: data.user, userName: data.user?.user_metadata?.name };
  },

  async signin(userData: authFormType): Promise<authUser | null> {
    const { email, password } = userData;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("signinError:", error.message);
      throw new Error(error.message);
    }

    return { userData: data.user, userName: data.user.user_metadata?.name };
  },

  //メールが認証されたかの判別 #TODO
  async isEmailConfirmed(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:5173/",
      },
    });

    if (error) throw new Error(error.message);
    return data;
  },

  //トークンで認証 #TODO
  async verifyOtp(type: EmailOtpType, token_hash: string) {
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (error) throw new Error(error.message);
  },

  async getCurrentUser(): Promise<authUser | null> {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw new Error(error.message);
    if (!data.session) return null;

    return {
      userData: data.session.user,
      userName: data.session.user.user_metadata.name,
    };
  },

  async signout() {
    const { error } = await supabase.auth.signOut();
    if (error != null) throw new Error(error.message);
    return true;
  },
};
