import { Tab, TabPanel, Tabs } from "@yamada-ui/react";
import { PostItem } from "./PostItem";
import { ActivityItems } from "./ActivityItems";
import { activityItemType, homePostType, NavigationTabProps } from "@/types/NavigationTabProps";

export const NavigationTabs: NavigationTabProps = ({ tabs }) => {
  if (tabs.type === "timeline") {
    return (
      <Tabs colorScheme="green" color="white">
        {tabs.tabinfo.map((info) => (
          <Tab padding="20px" fontSize="0.875rem">
            {info.name}
          </Tab>
        ))}

        {tabs.tabinfo.map((info) => (
          <TabPanel padding="0">
            {info.content.map((item: homePostType) => (
              <PostItem
                userImageUrl={item.userImageUrl}
                userName={item.userName}
                postText={item.postText}
              />
            ))}
          </TabPanel>
        ))}
      </Tabs>
    );
  } else if (tabs.type === "activities") {
    return (
      <Tabs colorScheme="green" color="white">
        {tabs.tabinfo.map((info) => (
          <Tab padding="20px" fontSize="0.875rem">
            {info.name}
          </Tab>
        ))}

        {/* コンポーネント分割 */}
        {tabs.tabinfo.map((info) => (
          <TabPanel padding="0" position="relative">
            {info.content.map((item: activityItemType) => (
              <ActivityItems
                isActivies={item.isActivies}
                userImageUrl={item.userImageUrl}
                userName={item.userName}
                userAction={item.userAction}
                replyText={item.replyText}
                postText={item.postText}
                actionDate={item.actionDate}
              />
            ))}
          </TabPanel>
        ))}
      </Tabs>
    );
  }
};
