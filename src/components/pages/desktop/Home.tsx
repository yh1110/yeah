import { Navigate, useLocation } from "react-router-dom";
import { PostBox } from "../../organisms/main/home/PostBox";
import { TimeLine } from "../../organisms/main/home/TimeLine";
import { HomeTemplate } from "../../templates/desktop/HomeTemplate";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";
import { LoadingPage } from "../loading/LoadingPage";
import { useMediaQuery } from "@yamada-ui/react";
import { TabletHomeTemplate } from "@/components/templates/tablet/TabletHomeTemplate";
import { TabletTimeLine } from "@/components/organisms/main/home/tablet/TabletTimeLine";

export const Home = () => {
  const [isTablet] = useMediaQuery(["(max-width: 1200px)"]);
  const currentUser = useAppSelector((state) => state.user.user);
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
  const breadcrumbItems = useMemo(
    () => [
      { href: "/", name: "ホーム" },
      { href: "/", name: "フォロー中のタイムライン", isCurrentPage: true },
    ],
    []
  );
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(change(breadcrumbItems));
  }, [location.pathname, dispatch, breadcrumbItems]);

  console.log(currentUser);

  if (isLoading) return <LoadingPage />; //ローディング画面

  if (currentUser === null) return <Navigate replace to="/signin" />;

  if (isTablet) {
    return (
      <TabletHomeTemplate>
        <TabletTimeLine />
      </TabletHomeTemplate>
    );
  } else {
    return (
      <HomeTemplate>
        <PostBox />
        <TimeLine />
      </HomeTemplate>
    );
  }
};
