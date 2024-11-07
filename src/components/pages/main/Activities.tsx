import { FunctionComponent, useEffect, useMemo } from "react";
import { HomeTemplate } from "../../templates/desktop/HomeTemplate";
import { useLocation } from "react-router-dom";
import { ActivitiesArea } from "../../organisms/main/activities/ActivitiesArea";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";
import { useMediaQuery } from "@yamada-ui/react";
import { TabletHomeTemplate } from "@/components/templates/tablet/TabletHomeTemplate";

export const Activities: FunctionComponent = () => {
  const [isDesktop, isTablet] = useMediaQuery(["(min-width: 1200px)", "(min-width: 580px)"]);
  const breadcrumbItems = useMemo(() => [], []); //#NOTE Breadcrumbを非表示にするため空の配列を渡す
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(change(breadcrumbItems));
  }, [location.pathname, dispatch, breadcrumbItems]);

  if (isDesktop) {
    // デスクトップ
    return (
      <HomeTemplate>
        <ActivitiesArea />
      </HomeTemplate>
    );
  } else if (isTablet) {
    //タブレット
    return (
      <TabletHomeTemplate>
        <ActivitiesArea />
      </TabletHomeTemplate>
    );
  } else {
    //モバイル
    return (
      <TabletHomeTemplate>
        <ActivitiesArea />
      </TabletHomeTemplate>
    );
  }
};
