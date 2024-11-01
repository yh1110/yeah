import { Image, List, Smile, Type, Video } from "lucide-react";
import { PostOptionBase } from "../atoms/PostOption";

export const PostBoxFooter = () => {
  return (
    // #TODO
    <div className="flex items-center justify-between">
      <div className="flex space-x-2">
        <PostOptionBase>
          <Image className="h-5 w-5" />
        </PostOptionBase>

        <PostOptionBase>
          <List className="h-5 w-5" />
        </PostOptionBase>

        <PostOptionBase>
          <Type className="h-5 w-5" />
        </PostOptionBase>

        <PostOptionBase>
          <Video className="h-5 w-5" />
        </PostOptionBase>

        <PostOptionBase>
          <Smile className="h-5 w-5" />
        </PostOptionBase>
      </div>

      <button
        className="px-4 py-2 bg-secondary-100 text-text-100 rounded-full hover:bg-secondary-200 focus:outline-none  "
        type="submit"
      >
        投稿
      </button>
    </div>
  );
};
