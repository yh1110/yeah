import { Tab, TabPanel, Tabs } from "@yamada-ui/react";
import { FunctionComponent } from "react";
import { PostItem } from "./PostItem";
import { postItemsType } from "@/store/store";

type tabinfo = {
  name: string;
  content: postItemsType;
};

export type tabsType = {
  type: string;
  tabinfo: tabinfo[];
};

type NavigationTabsProps = {
  tabs: tabsType;
};

export const NavigationTabs: FunctionComponent<NavigationTabsProps> = ({ tabs }) => {
  {
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
              {info.content.map((item) => (
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

          <TabPanel padding="0" position="relative">
            {/* コンポーネント分割 */}
            <div className="p-6 border-b border-border-300 flex justify-between ">
              <div className="flex items-start space-x-3">
                <img
                  src={`https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD`}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="flex items-center mb-3 text-sm text-text-200">
                    <span className="font-semibold text-text-100">neon</span>
                    があなたの投稿に返信しました
                  </p>
                  <p className="text-text-200 mb-4 w-full break-all text-sm">返信内容</p>
                  <div className="flex space-x-6">
                    <p className="text-xs text-text-300 break-all ">
                      投稿内容aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-300 min-w-[60px] text-right">12時間前</p>
            </div>
          </TabPanel>

          <TabPanel padding="0">
            {/* コンポーネント分割 */}
            <div className="p-6 border-b border-border-300 flex justify-between ">
              <div className="flex items-start space-x-3">
                <img
                  src={`https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD`}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="flex items-center mb-3 text-sm text-text-200">
                    <span className="font-semibold text-text-100">{`neon`}</span>
                    があなたの投稿にいいね！しました
                  </p>
                  {/* <p className="text-text-200 mb-4 w-full break-all">{`postText`}</p> */}
                  <div className="flex space-x-6">
                    <p className="text-xs text-text-300 break-all ">投稿内容</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-300 min-w-[60px] text-right">9時間前</p>
            </div>
          </TabPanel>
        </Tabs>
      );
    }
  }
};
