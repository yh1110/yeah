import { FunctionComponent } from "react";
import { ProfileInfoItem } from "../atoms/ProfileInfoItem";

export const PfofileInfo: FunctionComponent = () => {
  return (
    <div id="profileInfo" className=" w-full box-border mt-4 flex  text-sm text-text-300 gap-">
      <ProfileInfoItem itemName="投稿" itemAmounts="1,900" borderR="border-r-[1px]" />
      <ProfileInfoItem itemName="レター" itemAmounts="20" borderR="border-r-[1px]" />
      <ProfileInfoItem itemName="フォロワー" itemAmounts="70" borderR="border-r-[1px]" />
      <ProfileInfoItem itemName="フォロー中" itemAmounts="70" />
    </div>
  );
};
