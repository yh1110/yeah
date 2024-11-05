import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { handleHeart } from "@/slice/postItemsSlice";
import { CornerUpLeft, Heart } from "lucide-react";
import React, { memo, useState } from "react";

type PostItemProps = {
  id: number;
  userImageUrl: string;
  userName: string;
  postText: string;
};

//#NOTE レンダリング回数多いのが気になるのでAPI実装の際に修正
export const PostItem: React.FC<PostItemProps> = memo(
  ({ id, userImageUrl, userName, postText }) => {
    const dispatch = useAppDispatch();
    const [isActivateHeart, setIsActivateHeart] = useState(false);
    const targetPost = useAppSelector((state) =>
      state.postItems.post.find((post) => post.id === id)
    );
    const value = targetPost?.isActivateHeart;

    const post = useAppSelector((state) => state.postItems.post);
    console.log(post);

    console.log(isActivateHeart);
    return postText ? (
      <div className="p-6 border-b border-border-300 " key={id}>
        <div className="flex items-start space-x-3">
          <img src={userImageUrl} alt="User avatar" className="w-10 h-10 rounded-full" />
          <div>
            <div className="flex items-center mb-3">
              <h3 className="font-semibold text-text-100">{userName}</h3>
            </div>
            <p className="text-text-200 mb-4 w-full break-all">{postText}</p>
            <div className="flex space-x-6">
              <CornerUpLeft className=" text-primary-100 size-5 cursor-pointer" />
              <Heart
                className={`text-primary-100 size-5 cursor-pointer ${value ? "text-pink-500" : ""}`}
                onClick={() => {
                  setIsActivateHeart(!isActivateHeart); //API叩く際に必要
                  dispatch(handleHeart({ key: id, value: !value }));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    );
  }
);
