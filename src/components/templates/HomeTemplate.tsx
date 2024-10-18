import { Box, VStack } from "@yamada-ui/react";
import { HomeHeader } from "../organisms/home/HomeHeader";
import React from "react";
import { useMemo } from "react";
import { Announce } from "../organisms/home/Announce";
import { GroupList } from "../organisms/home/GroupList";
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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
          <div className="flex space-x-10 box-border">
            <div className="w-2/3">{children}</div>
            <div className="w-1/3">
              <Announce />
              <GroupList />
            </div>
          </div>
        </main>
      </VStack>
    </div>
  );
};
