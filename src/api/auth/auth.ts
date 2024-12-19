import { authFormType } from "@/components/molecules/AuthForm";
import { supabase } from "../client";
import { User } from "@supabase/supabase-js";

export interface authUser {
  userData: User | null;
  userName: string;
}

export const authRepository = {
  //サインアップ(新規登録)
  async signup(userData: authFormType): Promise<authUser | null> {
    const { username, email, password } = userData;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name: username } },
    });

    if (error) {
      if (error.status === 422) {
        throw new Error("パスワードは6文字以上で入力してください");
      } else if (error.status === 429) {
        throw new Error("しばらく間隔をあけて再度お試しください");
      } else {
        throw new Error("不明なエラー");
      }
    }

    return { userData: data.user, userName: data.user?.user_metadata?.name };
  },

  //サインイン
  //# returnはtrueかfalse
  async signin(userData: authFormType): Promise<authUser | null> {
    const { email, password } = userData;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.status === 400) {
        throw new Error("ユーザーが存在しない、またはパスワードが異なります");
      } else {
        throw new Error("不明なエラー");
      }
    }

    return { userData: data.user, userName: data.user.user_metadata?.name };
  },

  //otpトークンで認証
  async verifyOtp(email: string, token: string): Promise<authUser | null> {
    //#TODO 確かオプションで何かつける必要あり
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });

    if (error) {
      if (error.status === 403) {
        throw new Error("認証コードが一致しません");
      } else {
        throw new Error("不明なエラー");
      }
    }

    return { userData: data.user, userName: data.user?.user_metadata.name };
  },

  //現在のユーザーを取得(セッション取得)
  async getCurrentUser(): Promise<authUser | null> {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw new Error(error.message);
    if (!data.session) return null;

    return {
      userData: data.session.user,
      userName: data.session.user.user_metadata.name,
    };
  },

  //サインアウト
  async signout() {
    const { error } = await supabase.auth.signOut();
    localStorage.removeItem("user");
    if (error != null) throw new Error(error.message);
    return true;
  },
};
