import { NavigationTabs } from "@/components/molecules/NavigationTabs";
import { activityTabType } from "@/types/NavigationTabProps";
import { FunctionComponent } from "react";

export const ActivitiesArea: FunctionComponent = () => {
  const tabs: activityTabType = {
    type: "activities",
    tabinfo: [
      {
        name: "重要",
        content: [
          {
            isActivies: true,
            userImageUrl: "string",
            userName: "string",
            userAction: "string",
            replyText: "string",
            postText: "string",
            actionDate: "string",
          },
        ],
      },
      {
        name: "お知らせ",
        content: [
          {
            isActivies: false,
            userImageUrl: "string",
            userName: "string",
            userAction: "string",
            replyText: "string",
            postText: "string",
            actionDate: "string",
          },
        ],
      },
    ],
  };
  return (
    <div className="bg-primary-300 rounded-lg shadow-md min-w-[600px]">
      <div className=" border-b border-border-300 ">
        <NavigationTabs tabs={tabs} />
      </div>
    </div>
  );
};
