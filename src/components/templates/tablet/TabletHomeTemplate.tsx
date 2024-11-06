import { Box, VStack } from "@yamada-ui/react";
import React from "react";
import { useMemo } from "react";
import { Breadcrumb, BreadcrumbGenerateItem } from "@yamada-ui/react";
import { useAppSelector } from "@/hooks/reduxHooks";
import { HomeHeader } from "@/components/organisms/main/home/tablet/HomeHeader";

type HomeTemplatePros = {
  children: React.ReactNode;
};

export const TabletHomeTemplate: React.FC<HomeTemplatePros> = ({ children }) => {
  const breadcrumbItems = useAppSelector((state) => state.breadcrumbItems.item);
  const items = useMemo<BreadcrumbGenerateItem[]>(() => breadcrumbItems, [breadcrumbItems]);

  return (
    <div className="min-h-screen bg-primary-500">
      <VStack>
        <HomeHeader />
        <main className="max-w-[1200px]  px-4 sm:px-6 lg:px-8 py-6 w-full">
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
          <div className="flex space-x-10 box-border mt-4">
            {/* ページ挿入部分 */}
            <div className="w-full">{children}</div>
          </div>
        </main>
      </VStack>
    </div>
  );
};
