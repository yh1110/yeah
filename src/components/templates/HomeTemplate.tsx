import { Box, VStack } from "@yamada-ui/react";
import { HomeHeader } from "../organisms/main/home/HomeHeader";
import React from "react";
import { useMemo } from "react";
import { Announce } from "../organisms/main/home/Announce";
import { GroupList } from "../organisms/main/home/GroupList";
import { Breadcrumb, BreadcrumbGenerateItem } from "@yamada-ui/react";
import { useAppSelector } from "@/hooks/reduxHooks";

type HomeTemplatePros = {
  children: React.ReactNode;
};

export const HomeTemplate: React.FC<HomeTemplatePros> = ({ children }) => {
  const breadcrumbItems = useAppSelector((state) => state.breadcrumbItems.item);
  const items = useMemo<BreadcrumbGenerateItem[]>(() => breadcrumbItems, [breadcrumbItems]);

  return (
    <div className="min-h-screen bg-primary-500">
      <VStack>
        <HomeHeader />
        <main className="dt:w-[1200px] mb:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 mb:w-full">
          {breadcrumbItems.length ? (
            <Breadcrumb
              items={items}
              color="gray"
              marginBottom="0.5rem"
              paddingX="1"
              fontSize="xs"
            />
          ) : (
            <Box height="18px" marginBottom="0.5rem"></Box>
          )}
          <div className="flex space-x-10 box-border mb:mt-4">
            {/* ページ挿入部分 */}
            <div className="dt:w-2/3 mb:w-full">{children}</div>
            <div className="dt:w-1/3 dt:block hidden">
              <Announce />
              <GroupList />
            </div>
          </div>
        </main>
      </VStack>
    </div>
  );
};
