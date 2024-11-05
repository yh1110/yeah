import { post } from "@/slice/postItemsSlice";
import { FunctionComponent } from "react";

//Home Timeline
export declare type homePostType = post;
declare interface homeTabInfo {
  name: string;
  content: homePostType[];
}
export declare interface homeTabsType {
  type: string;
  tabinfo: homeTabInfo[];
}
declare interface homeTabProps {
  tabs: homeTabsType;
}

//Activity ActivityArea
//reduxに記述した際の型情報(仮実装)
export declare type activityItemType = {
  id: number;
  isActivies: boolean;
  userImageUrl: string;
  userName: string;
  userAction: string;
  replyText: string;
  postText: string;
  actionDate: string;
};
declare interface activityTabInfo {
  name: string;
  content: activityItemType[];
}
export declare interface activityTabType {
  type: string;
  tabinfo: activityTabInfo[];
}
declare interface activityTabProps {
  tabs: activityTabType;
}

//BoxNavsPropsのタイプ

export declare type BoxNavsProps = FunctionComponent<homeTabProps | activityTabProps>;
