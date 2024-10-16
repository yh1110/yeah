import { VStack } from "@yamada-ui/react";
import { HomeHeader } from "../organisms/HomeHeader";
import React from "react";

type HomeHeaderTemplatePros = {
  children: React.ReactNode;
};

export const HomeHeaderTemplate: React.FC<HomeHeaderTemplatePros> = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary-500">
      <VStack>
        <HomeHeader />
        {children}
      </VStack>
    </div>
  );
};
