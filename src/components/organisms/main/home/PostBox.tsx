import { FormControl, Textarea } from "@yamada-ui/react";
import { PostBoxFooter } from "../../../molecules/PostBoxFooter";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { post } from "@/slice/postItemsSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";

type PostType = {
  postArea: string;
};
//widthで要素幅を調整
//w-fullで子要素の要素幅を合わせる
//box-borderで子要素の要素幅(paddingも含む)を合わせる
let num = 0;

export const PostBox = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PostType>();

  const dispatch = useAppDispatch();

  //投稿ボタンで発火
  const handlePostContent: SubmitHandler<PostType> = async (data: PostType) => {
    num++;
    const postItems = {
      id: num,
      userImageUrl: "https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD",
      userName: "neon",
      postText: data.postArea,
      isActivateHeart: false,
    };
    dispatch(post(postItems)); //グローバルステートに値を追加
    console.log(postItems);
  };
  // console.log(num);

  return (
    <form
      className="bg-primary-300 rounded-lg shadow-md p-6 mb-8"
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
