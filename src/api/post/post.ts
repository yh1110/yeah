import { post } from "@/slice/postItemsSlice";
import { supabase } from "../client";

export const postRepository = {
  async create(content: string, userId: string) {
    const { data, error } = await supabase
      .from("posts")
      .insert([{ content, user_id: userId }])
      .select("id");

    if (error) throw new Error(error.message);

    console.log(data);

    return data[0];
  },

  async view(): Promise<post[]> {
    const { data, error } = await supabase
      .from("posts_view")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);

    console.log(data);

    return data.map((post) => {
      return {
        id: post.id,
        userId: post.user_id,
        userImageUrl: "https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD",
        userName: post.user_metadata.name,
        postText: post.content,
        isActivateHeart: false,
      };
    });
  },
};
