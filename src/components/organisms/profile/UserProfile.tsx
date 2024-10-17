import { UserIcon } from "@/components/atoms/UserIcon";
import { PfofileInfo } from "@/components/molecules/PfofileInfo";
import { FunctionComponent } from "react";

export const UserProfile: FunctionComponent = () => {
  return (
    <div className="  w-full box-border bg-primary-300 rounded-lg shadow-md mb-8">
      <div className=" w-full box-border ">
        <div className=" w-full box-border bg-primary-300 shadow rounded-lg overflow-hidden">
          {/* ヘッダー画像 */}
          <div className=" w-full box-border h-40 bg-gradient-to-r from-blue-400 to-purple-500"></div>
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
              <PfofileInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
