import { useMemo } from "react";
import { Announce } from "../organisms/Announce";
import { GroupList } from "../organisms/GroupList";
import { PostBox } from "../organisms/PostBox";
import { TimeLine } from "../organisms/TimeLine";
import { HomeHeaderTemplate } from "../templates/HomeHeaderTemplate";
import { Breadcrumb, BreadcrumbGenerateItem } from "@yamada-ui/react";

export const Home = () => {
  const items = useMemo<BreadcrumbGenerateItem[]>(
    () => [
      { href: "/", name: "ホーム" },
      { href: "/", name: "フォロー中のタイムライン", isCurrentPage: true },
    ],
    []
  );
  return (
    <HomeHeaderTemplate>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb items={items} color="gray" marginBottom="0.5rem" paddingX="1" fontSize="xs" />
        <div className="flex space-x-8">
          <div className="w-2/3">
            <PostBox />
            <TimeLine />
          </div>
          <div className="w-1/3">
            <Announce />
            <GroupList />
          </div>
        </div>
      </main>
    </HomeHeaderTemplate>
  );
};
