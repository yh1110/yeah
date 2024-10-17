import { TimeLine } from "../organisms/profile/TimeLine";
import { UserProfile } from "../organisms/profile/UserProfile";
import { HomeTemplate } from "../templates/HomeTemplate";

export const Profile = () => {
  return (
    <HomeTemplate>
      <UserProfile />
      <TimeLine />
    </HomeTemplate>
  );
};
