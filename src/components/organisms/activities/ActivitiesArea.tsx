import { NavigationTabs, tabsType } from "@/components/molecules/NavigationTabs";
import { useAppSelector } from "@/hooks/reduxHooks";
import { FunctionComponent } from "react";

export const ActivitiesArea: FunctionComponent = () => {
  const postItems = useAppSelector((state) => state.postItems.post);
  const tabs: tabsType = {
    type: "activities",
    tabinfo: [
      { name: "重要", content: postItems },
      { name: "お知らせ", content: postItems },
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
