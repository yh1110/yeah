import { FunctionComponent, useEffect, useMemo } from "react";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { Navigate, useLocation } from "react-router-dom";
import { ActivitiesArea } from "../../organisms/main/activities/ActivitiesArea";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";
import { LoadingPage } from "../loading/LoadingPage";

export const Activities: FunctionComponent = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
  const breadcrumbItems = useMemo(() => [], []); //#NOTE Breadcrumbを非表示にするため空の配列を渡す
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(change(breadcrumbItems));
  }, [location.pathname, dispatch, breadcrumbItems]);

  if (!currentUser && !isLoading) return <Navigate replace to="/signin" />;
  if (isLoading) return <LoadingPage />;

  return (
    <HomeTemplate>
      <ActivitiesArea />
    </HomeTemplate>
  );
};
