import { BoxNavs } from "@/components/molecules/BoxNavs";
import { activityTabType } from "@/types/BoxNavsProps";
import { FunctionComponent } from "react";

export const ActivitiesArea: FunctionComponent = () => {
  const tabs: activityTabType = {
    type: "activities",
    tabinfo: [
      {
        name: "重要",
        content: [
          {
            id: 0,
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
            id: 0,
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
    <div className="bg-primary-300 rounded-lg shadow-md ">
      <div className=" border-b border-border-300 ">
        <BoxNavs tabs={tabs} />
      </div>
    </div>
  );
};
