import { useLocation } from "react-router-dom";
import { UserProfile } from "../../organisms/main/profile/UserProfile";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";

export const Profile = () => {
  const userName = useAppSelector((state) => state.user.user?.userName);
  const breadcrumbItems = useMemo(
    () => [
      { href: "/profile", name: "ユーザー" },
      { href: "/", name: userName, isCurrentPage: true },
    ],
    [userName]
  );
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(change(breadcrumbItems));
  }, [location.pathname, dispatch, breadcrumbItems]);

  return (
    <HomeTemplate>
      <UserProfile />
    </HomeTemplate>
  );
};
