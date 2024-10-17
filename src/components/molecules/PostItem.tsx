import { CornerUpLeft, Heart } from "lucide-react";
import React from "react";

type PostItemProps = {
  userImageUrl: string;
  userName: string;
  postText: string;
};

export const PostItem: React.FC<PostItemProps> = ({ userImageUrl, userName, postText }) => {
  return (
    <div className="p-6 border-b border-border-300 ">
      <div className="flex items-start space-x-3">
        <img src={userImageUrl} alt="User avatar" className="w-10 h-10 rounded-full" />
        <div>
          <div className="flex items-center mb-3">
            <h3 className="font-semibold text-text-100">{userName}</h3>
          </div>
          <p className="text-text-200 mb-4 w-full break-all">{postText}</p>
          <div className="flex space-x-6">
            <CornerUpLeft className=" text-primary-100 size-5 cursor-pointer" />
            <Heart className=" text-primary-100 size-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
