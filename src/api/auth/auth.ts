import { authFormType } from "@/components/molecules/AuthForm";
import { supabase } from "../client";

export const authRepository = {
  async signup(userData: authFormType) {
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
    console.log("signup");

    return { ...data.user, userName: data.user?.user_metadata?.name };
  },

  async signin(userData: authFormType) {
    const { email, password } = userData;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("signin");

    if (error) {
      console.error("signinError:", error.message);

      throw new Error(error.message);
    }

    return { ...data.user, userName: data.user.user_metadata?.name };
  },

  async getCurrentUser() {
    const { data, error } = await supabase.auth.getSession();
    if (error != null) throw new Error(error.message);
    if (data.session == null) return;

    return {
      ...data.session.user,
      userName: data.session.user.user_metadata.name,
    };
  },

  async signout() {
    const { error } = await supabase.auth.signOut();
    if (error != null) throw new Error(error.message);
    return true;
  },
};
