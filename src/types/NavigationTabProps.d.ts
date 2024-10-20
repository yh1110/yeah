import { post } from "@/slice/postItemsSlice";
import { FunctionComponent } from "react";

//Home Timeline
declare type homePostType = post;
declare interface homeTabInfo {
  name: string;
  content: homePostType[];
}
declare interface homeTabsType {
  type: string;
  tabinfo: homeTabinfo[];
}
declare interface homeTabProps {
  tabs: homeTabsType;
}

//Activity ActivityArea
//reduxに記述した際の型情報(仮実装)
declare type activityItemType = {
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
declare interface activityTabType {
  type: string;
  tabinfo: activityTabInfo[];
}
declare interface activityTabProps {
  tabs: activityTabType;
}

//NavigationTabのタイプ

export declare type NavigationTabProps = FunctionComponent<homeTabProps | activityTabProps>;
