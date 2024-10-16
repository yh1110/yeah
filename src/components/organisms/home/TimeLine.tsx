import { useAppSelector } from "@/hooks/reduxHooks";
import { NavigationTabs, tabsType } from "@/components/molecules/NavigationTabs";

export const TimeLine = () => {
  const postItems = useAppSelector((state) => state.postItems.post);
  const tabs: tabsType = {
    type: "timeline",
    tabinfo: [
      { name: "フォロー中", content: postItems },
      { name: "オープン", content: postItems },
    ],
  };
  return (
    <div className="bg-primary-300 rounded-lg shadow-md">
      <div className=" border-b border-border-300 ">
        <NavigationTabs tabs={tabs} />
      </div>
    </div>
  );
};
