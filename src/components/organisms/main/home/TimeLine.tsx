import { useAppSelector } from "@/hooks/reduxHooks";
import { BoxNavs } from "@/components/molecules/BoxNavs";
import { homeTabsType } from "@/types/BoxNavsProps";

export const TimeLine = () => {
  const postItems = useAppSelector((state) => state.postItems.post);
  const tabs: homeTabsType = {
    type: "timeline",
    tabinfo: [
      { name: "フォロー中", content: postItems },
      { name: "オープン", content: postItems },
    ],
  };
  return (
    <div className="bg-primary-300 rounded-lg shadow-md mt-8">
      <div className=" border-b border-border-300 ">
        <BoxNavs tabs={tabs} />
      </div>
    </div>
  );
};
