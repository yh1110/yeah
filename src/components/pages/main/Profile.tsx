import { useLocation } from "react-router-dom";
import { TimeLine } from "../../organisms/main/profile/TimeLine";
import { UserProfile } from "../../organisms/main/profile/UserProfile";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";

export const Profile = () => {
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

  return (
    <HomeTemplate>
      <UserProfile />
      <TimeLine />
    </HomeTemplate>
  );
};
