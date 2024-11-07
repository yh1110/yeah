import { PostItem } from "@/components/molecules/PostItem";
import { TabletAlbumPreview } from "@/components/molecules/tablet/TabletAlbumPreview";
import { useAppSelector } from "@/hooks/reduxHooks";
import { FunctionComponent } from "react";

export const TabletTimeLine: FunctionComponent = () => {
  const postItems = useAppSelector((state) => state.postItems.post);
  return (
    <div className="bg-primary-300 rounded-lg shadow-md">
      <div className="border-b border-border-300">
        <TabletAlbumPreview />
        {postItems.map((item) => (
          <PostItem
            id={item.id}
            userImageUrl={item.userImageUrl}
            userName={item.userName}
            postText={item.postText}
          />
        ))}
      </div>
    </div>
  );
};
