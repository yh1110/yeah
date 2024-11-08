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
import { EmailVerifiedModal } from "../modal/EmailVerifiedModal";

export const Home = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  const isLoading = useAppSelector((state) => state.isLoading.isLoading);
  const isEmailVerified = useAppSelector((state) => state.isEmailVerified.isEmailVerified);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const breadcrumbItems = useMemo(
    () => [
      { href: "/", name: "ホーム" },
      { href: "/", name: "フォロー中のタイムライン", isCurrentPage: true },
    ],
    []
  );

  // useEffect(() => {
  //   const checkEmailVerrified = async () => {
  //     const isEmailVerified = await authRepository.isEmailVerified();

  //     console.log(isEmailVerified);

  //     setIsEmailVerified(isEmailVerified);
  //   };
  //   checkEmailVerrified();
  // }, [isEmailVerified]);

  useEffect(() => {
    dispatch(setIsLoading(true));
    const setSession = async () => {
      const user = await authRepository.getCurrentUser();
      dispatch(getCurrentUser(user));
      dispatch(setIsLoading(false));
    };
    console.log("session");

    setSession();
  }, [dispatch]);

  useEffect(() => {
    dispatch(change(breadcrumbItems));
  }, [location.pathname, dispatch, breadcrumbItems]);

  if (isLoading) return <LoadingPage />;

  if (!isEmailVerified) return <EmailVerifiedModal />;

  if (!currentUser) return <Navigate replace to="/signin" />;

  return (
    <HomeTemplate>
      <PostBox />
      <TimeLine />
    </HomeTemplate>
  );
};
