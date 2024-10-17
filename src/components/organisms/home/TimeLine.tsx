import { Tab, TabPanel, Tabs } from "@yamada-ui/react";
import { PostItem } from "../../molecules/PostItem";
import { useAppSelector } from "@/hooks/reduxHooks";

export const TimeLine = () => {
  const postItems = useAppSelector((state) => state.postItems.post);
  return (
    <div className="bg-primary-300 rounded-lg shadow-md">
      <div className=" border-b border-border-300 ">
        <Tabs colorScheme="green" color="white">
          <Tab padding="20px" fontSize="0.875rem">
            フォロー中
          </Tab>
          <Tab padding="20px" fontSize="0.875rem">
            オープン
          </Tab>
          <TabPanel padding="0">
            {postItems.map((item) => (
              <PostItem
                userImageUrl={item.userImageUrl}
                userName={item.userName}
                postText={item.postText}
              />
            ))}
          </TabPanel>
          <TabPanel padding="0">
            {postItems.map((item) => (
              <PostItem
                userImageUrl={item.userImageUrl}
                userName={item.userName}
                postText={item.postText}
              />
            ))}
          </TabPanel>
          {/* <button className="text-secondary-300 font-semibold border-b-2 border-secondary-300 pb-2 mr-4">
            フォロー中
          </button>
          <button className="text-text-300 font-semibold pb-2">オープン</button> */}
        </Tabs>
      </div>
    </div>
  );
};
