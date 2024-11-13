import { Navigate, useLocation } from "react-router-dom";
import { UserProfile } from "../../organisms/main/profile/UserProfile";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";
import { LoadingPage } from "../loading/LoadingPage";

export const Profile = () => {
  const userName = useAppSelector((state) => state.user.user?.userName);
  const currentUser = useAppSelector((state) => state.user.user);
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
  const breadcrumbItems = useMemo(
    () => [
      { href: "/profile", name: "ユーザー" },
      { href: "/", name: userName, isCurrentPage: true },
    ],
    [userName]
  );
  const location = useLocation();
  const dispatch = useAppDispatch();

  console.log(location);

  useEffect(() => {
    dispatch(change(breadcrumbItems));
  }, [location.pathname, dispatch, breadcrumbItems]);

  if (!currentUser && !isLoading) return <Navigate replace to="/signin" />;
  if (isLoading) return <LoadingPage />;

  console.log("Profile");

  return (
    <HomeTemplate>
      <UserProfile />
    </HomeTemplate>
  );
};
