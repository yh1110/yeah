import { Navigate, useLocation } from "react-router-dom";
import { PostBox } from "../../organisms/main/home/PostBox";
import { TimeLine } from "../../organisms/main/home/TimeLine";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";
import { LoadingPage } from "../loading/LoadingPage";

export const Home = () => {
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
  const currentUser = useAppSelector((state) => state.user.user);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const breadcrumbItems = useMemo(
    () => [
      { href: "/", name: "ホーム" },
      { href: "/", name: "フォロー中のタイムライン", isCurrentPage: true },
    ],
    []
  );

  useEffect(() => {
    dispatch(change(breadcrumbItems));
  }, [location.pathname, dispatch, breadcrumbItems]);

  if (!currentUser) return <Navigate replace to="/signin" />;
  if (isLoading) return <LoadingPage />;

  return (
    <HomeTemplate>
      <PostBox />
      <TimeLine />
    </HomeTemplate>
  );
};
