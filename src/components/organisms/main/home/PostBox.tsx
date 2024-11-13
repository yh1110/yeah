import { FormControl, Textarea } from "@yamada-ui/react";
import { PostBoxFooter } from "../../../molecules/PostBoxFooter";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { post } from "@/slice/postItemsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { postRepository } from "@/api/post/post";

type PostType = {
  postArea: string;
};
//widthで要素幅を調整
//w-fullで子要素の要素幅を合わせる
//box-borderで子要素の要素幅(paddingも含む)を合わせる

export const PostBox = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PostType>();

  const userName = useAppSelector((state) => state.user.user?.userName);
  const userId = useAppSelector((state) => state.user.user?.userData?.id);
  const dispatch = useAppDispatch();

  //投稿ボタンで発火
  const handlePostContent: SubmitHandler<PostType> = async (data: PostType) => {
    const { id } = await postRepository.create(data.postArea, userId ?? "");
    const postItems = {
      id,
      userImageUrl: "https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD",
      userName,
      postText: data.postArea,
      isActivateHeart: false,
    };

    console.log(postItems);

    dispatch(post(postItems)); //グローバルステートに値を追加
  };

  return (
    <form
      className="bg-primary-300 rounded-lg shadow-md p-6 hidden dt:block"
      onSubmit={handleSubmit(handlePostContent)}
    >
      <div className="px-3">
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
          <div className="flex flex-wrap  mb-4">
            {[
              "Aa",
              "Aa",
              "Aa",
              "Aa",
              "Aa",
              "Aa",
              "Aa",
              "Aa",
              "Aa",
              "Aa",
              "Aa",
              "Aa",
              "Aa",
              "Aa",
            ].map((text, index) => (
              // #TODO
              <a
                key={index}
                //#TODO 後々修正(左詰め)
                className={`px-3 py-1  text-sm cursor-pointer ${
                  index === 0 ? " border-blue-500 text-blue-500" : " text-text-300"
                }`}
              >
                {text}
              </a>
            ))}
          </div>
        </div>

        <PostBoxFooter />
      </div>
    </form>
  );
};
