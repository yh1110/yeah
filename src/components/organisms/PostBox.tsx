import { FormControl, Textarea } from "@yamada-ui/react";
import { PostBoxFooter } from "../molecules/PostBoxFooter";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { post } from "@/slice/postItemsSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";

type PostType = {
  postArea: string;
};

export const PostBox = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PostType>();

  const dispatch = useAppDispatch();

  const postContent: SubmitHandler<PostType> = async (data: PostType) => {
    const postItems = {
      userImageUrl: "https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD",
      userName: "neon",
      postText: data.postArea,
    };
    dispatch(post(postItems));
    console.log(data);
  };

  return (
    <form
      className="bg-primary-300 rounded-lg shadow-md p-6 mb-8"
      onSubmit={handleSubmit(postContent)}
    >
      <FormControl isInvalid={!!errors.postArea}>
        <Controller
          name="postArea"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Textarea
              color="white"
              placeholder="気軽につぶやいてみよう！"
              autosize={true}
              minBoxSize="9rem"
              border="hidden"
              focusBorderColor="green.300"
              variant="filled"
              style={{ backgroundColor: "#2f2f2f" }}
              {...field}
            />
          )}
        />
      </FormControl>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {["Aa", "Aa", "Aa", "Aa", "Aa", "Aa", "Aa", "Aa", "Aa", "Aa", "Aa", "Aa", "Aa", "Aa"].map(
            (text, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-full text-sm ${
                  index === 0 ? "border border-blue-500 text-blue-500" : "border text-text-300"
                }`}
              >
                {text}
              </button>
            )
          )}
        </div>
      </div>

      <PostBoxFooter />
    </form>
  );
};
