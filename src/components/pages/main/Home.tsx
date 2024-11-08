import { Navigate, useLocation } from "react-router-dom";
import { PostBox } from "../../organisms/main/home/PostBox";
import { TimeLine } from "../../organisms/main/home/TimeLine";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { change } from "@/slice/breadcrumbSlice";
import { LoadingPage } from "../loading/LoadingPage";
import { authRepository } from "@/api/auth/auth";
import { getCurrentUser } from "@/slice/userSlice";
import { setIsLoading } from "@/slice/loadingSlice";

export const Home = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
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
    dispatch(setIsLoading(true));
    const setSession = async () => {
      const user = await authRepository.getCurrentUser();
      dispatch(getCurrentUser(user));
    };
    setSession();
    dispatch(setIsLoading(false));
  }, [dispatch]);

  useEffect(() => {
    dispatch(change(breadcrumbItems));
  }, [location.pathname, dispatch, breadcrumbItems]);

  if (isLoading) return <LoadingPage />;

  if (!currentUser) return <Navigate replace to="/signin" />;

  return (
    <HomeTemplate>
      <PostBox />
      <TimeLine />
    </HomeTemplate>
  );
};
