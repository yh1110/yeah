import { PostBox } from "../organisms/home/PostBox";
import { TimeLine } from "../organisms/home/TimeLine";
import { HomeTemplate } from "../templates/HomeTemplate";

export const Home = () => {
  return (
    <HomeTemplate>
      <PostBox />
      <TimeLine />
    </HomeTemplate>
  );
};
