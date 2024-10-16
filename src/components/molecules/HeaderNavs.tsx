import { Bell, GalleryVerticalEnd, MessageCircle, Users } from "lucide-react";
import { NavigationBase, UserMenuNav } from "../atoms/Navigation";

export const HeaderNavs = () => {
  return (
    <nav className="flex items-center space-x-7">
      <NavigationBase text="タイムライン">
        <GalleryVerticalEnd className="h-5 w-5" />
      </NavigationBase>

      <NavigationBase text="サークル">
        <Users className="h-5 w-5" />
      </NavigationBase>

      <NavigationBase text="チャット">
        <MessageCircle className="h-5 w-5" />
      </NavigationBase>

      <NavigationBase text="通知">
        <Bell className="h-5 w-5" />
      </NavigationBase>

      <UserMenuNav />
    </nav>
  );
};
