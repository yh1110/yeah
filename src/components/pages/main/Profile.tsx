import { useLocation } from "react-router-dom";
import { UserProfile } from "../../organisms/main/profile/UserProfile";
import { HomeTemplate } from "../../templates/desktop/HomeTemplate";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";
import { useMediaQuery } from "@yamada-ui/react";
import { TabletHomeTemplate } from "@/components/templates/tablet/TabletHomeTemplate";
import { TabletUserProfile } from "@/components/organisms/main/profile/tablet/TabletUserProfile";

export const Profile = () => {
  const [isDesktop, isTablet] = useMediaQuery(["(min-width: 1200px)", "(min-width: 580px)"]);
  const breadcrumbItems = useMemo(
    () => [
      { href: "/profile", name: "ユーザー" },
      { href: "/", name: "neon", isCurrentPage: true },
    ],
    []
  );
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(change(breadcrumbItems));
  }, [location.pathname, dispatch, breadcrumbItems]);

  if (isDesktop) {
    // デスクトップ
    return (
      <HomeTemplate>
        <UserProfile />
      </HomeTemplate>
    );
  } else if (isTablet) {
    //タブレット
    return (
      <TabletHomeTemplate>
        <TabletUserProfile />
      </TabletHomeTemplate>
    );
  } else {
    //モバイル
    return (
      <TabletHomeTemplate>
        <TabletUserProfile />
      </TabletHomeTemplate>
    );
  }
};
