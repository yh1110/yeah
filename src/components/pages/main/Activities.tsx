import { FunctionComponent, useEffect, useMemo } from "react";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { useLocation } from "react-router-dom";
import { ActivitiesArea } from "../../organisms/main/activities/ActivitiesArea";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";

export const Activities: FunctionComponent = () => {
  const breadcrumbItems = useMemo(() => [], []); //#NOTE Breadcrumbを非表示にするため空の配列を渡す
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(change(breadcrumbItems));
  }, [location.pathname, dispatch, breadcrumbItems]);

  return (
    <HomeTemplate>
      <ActivitiesArea />
    </HomeTemplate>
  );
};
