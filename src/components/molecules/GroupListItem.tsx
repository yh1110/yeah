import { CircleDot } from "lucide-react";
import React from "react";

type GroupListItemProps = {
  groupImageUrl: string;
  name: string;
  time: number;
  category: string;
  members: string;
  posts: string;
};

export const GroupListItem: React.FC<GroupListItemProps> = ({
  groupImageUrl,
  name,
  time,
  category,
  members,
  posts,
}) => {
  return (
    <li className="flex items-start space-x-4 cursor-pointer">
      <img src={groupImageUrl} alt="Circle avatar" className="w-10 h-10 rounded-full" />
      <div>
        <h3 className="font-semibold text-text-200">{name}</h3>
        <p className="text-sm text-text-300">最終更新:{time}分前</p>
        <div className="flex items-center text-xs text-text-300 mt-1">
          <CircleDot color="#3ECF8E" size="10px" />
          <span className=" text-tag-100 px-1 py-1 rounded mr-2">{category}</span>
          <span>{members}人</span>
          <span className="mx-1">•</span>
          <span>{posts}投稿</span>
        </div>
      </div>
    </li>
  );
};
