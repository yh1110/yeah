import { UserIcon } from "@/components/atoms/UserIcon";
import { FunctionComponent, useState } from "react";
import { TimeLine } from "./TimeLine";
import { ProfileInfoItem } from "@/components/atoms/ProfileInfoItem";

export const UserProfile: FunctionComponent = () => {
  const [displayComponents, setDisplayComponents] = useState("");
  return (
    <div className="w-full">
      <div className="  w-full box-border bg-primary-300 rounded-lg shadow-md mb-8">
        <div className=" w-full box-border ">
          <div className=" w-full box-border bg-primary-300 shadow rounded-lg overflow-hidden">
            {/* ヘッダー画像 */}
            <div className=" w-full box-border h-40 bg-gradient-to-r from-secondary-100 to-secondary-200"></div>
            {/* ユーザー情報 */}
            <div className=" w-full box-border px-4 py-5 sm:p-6">
              <div className=" w-full box-border flex flex-col items-center">
                {/* アイコン */}
                <UserIcon
                  imageUrl="https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD"
                  alt="neon"
                />
                {/* ユーザーネーム */}
                <h2 className="  mt-4 text-2xl font-bold text-text-200">neon</h2>
                {/* プロフィール編集 */}
                <div className=" my-6">
                  <button className="text-secondary-300 text-sm">プロフィール編集</button>
                </div>
                {/* プロフィール情報 */}
                <div
                  id="profileInfo"
                  className=" w-full box-border mt-4 flex  text-sm text-text-300 gap-"
                >
                  <div className="w-full" onClick={() => setDisplayComponents("post")}>
                    <ProfileInfoItem itemName="投稿" itemAmounts="1,900" borderR="border-r-[1px]" />
                  </div>
                  <div className="w-full" onClick={() => setDisplayComponents("letter")}>
                    <ProfileInfoItem itemName="レター" itemAmounts="20" borderR="border-r-[1px]" />
                  </div>
                  <div className="w-full" onClick={() => setDisplayComponents("follower")}>
                    <ProfileInfoItem
                      itemName="フォロワー"
                      itemAmounts="70"
                      borderR="border-r-[1px]"
                    />
                  </div>
                  <div className="w-full" onClick={() => setDisplayComponents("follow")}>
                    <ProfileInfoItem itemName="フォロー中" itemAmounts="70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 出し分け */}
      {(() => {
        switch (displayComponents) {
          case "post":
            return <TimeLine />;
            break;
          case "letter":
            return <TimeLine />;
            break;
          case "follower":
            return <TimeLine />;
            break;
          case "follow":
            return <TimeLine />;
            break;
          default:
            return <TimeLine />;
            break;
        }
      })()}
    </div>
  );
};
