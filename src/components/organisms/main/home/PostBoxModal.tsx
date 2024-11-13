import { FormControl, ModalBody, Textarea } from "@yamada-ui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { post } from "@/slice/postItemsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { FunctionComponent } from "react";
import { PostBoxFooter } from "@/components/molecules/PostBoxFooter";
import { postRepository } from "@/api/post/post";

type PostType = {
  postArea: string;
};
type PostBoxModalProps = {
  onClose: () => void;
};
//widthで要素幅を調整
//w-fullで子要素の要素幅を合わせる
//box-borderで子要素の要素幅(paddingも含む)を合わせる

export const PostBoxModal: FunctionComponent<PostBoxModalProps> = ({ onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PostType>();

  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.user?.userName);
  const userId = useAppSelector((state) => state.user.user?.userData?.id);

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
    dispatch(post(postItems)); //グローバルステートに値を追加
    console.log(postItems);
  };

  return (
    <form
      className="bg-primary-300 rounded-lg shadow-md"
      onSubmit={handleSubmit(handlePostContent)}
    >
      <div>
        <ModalBody style={{ borderBottom: "1px solid #2f2f2f", margin: 0 }}>
          <FormControl isInvalid={!!errors.postArea} paddingX="xs" paddingY="lg">
            <Controller
              name="postArea"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea
                  color="white"
                  placeholder="気軽につぶやいてみよう！"
                  autosize={true}
                  minBoxSize="5rem"
                  border="hidden"
                  focusBorderColor="green.300"
                  variant="unstyled"
                  style={{ backgroundColor: "#171717" }}
                  {...field}
                />
              )}
            />
          </FormControl>
        </ModalBody>

        <ModalBody style={{ borderBottom: "1px solid #2f2f2f", margin: 0 }}>
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
        </ModalBody>

        <div className="px-4 py-4">
          <PostBoxFooter onClose={onClose} />
        </div>
      </div>
    </form>
  );
};
