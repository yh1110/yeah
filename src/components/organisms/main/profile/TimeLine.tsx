import { AlbumPreview } from "@/components/molecules/AlbumPreview";
import { PostItem } from "@/components/molecules/PostItem";
import { useAppSelector } from "@/hooks/reduxHooks";
import { FunctionComponent } from "react";

export const TimeLine: FunctionComponent = () => {
  const postItems = useAppSelector((state) => state.postItems.post);
  const userId = useAppSelector((state) => state.user.user?.userData?.id);
  return (
    <div className="bg-primary-300 rounded-lg shadow-md">
      <div className="border-b border-border-300">
        <AlbumPreview />
        {postItems.map((item) => {
          if (item.userId === userId) {
            return (
              <PostItem
                id={item.id}
                userImageUrl={item.userImageUrl}
                userName={item.userName}
                postText={item.postText}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
