import { useLocation } from "react-router-dom";
import { PostBox } from "../organisms/home/PostBox";
import { TimeLine } from "../organisms/home/TimeLine";
import { HomeTemplate } from "../templates/HomeTemplate";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";

export const Home = () => {
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

  return (
    <HomeTemplate>
      <PostBox />
      <TimeLine />
    </HomeTemplate>
  );
};
