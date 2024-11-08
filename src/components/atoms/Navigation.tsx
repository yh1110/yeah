import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@yamada-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProfielMenuPanel } from "../pages/modal/ProfielMenuPanel";
import { Bell, GalleryVerticalEnd, LogOut, MessageCircle, Users } from "lucide-react";
import { useAppSelector } from "@/hooks/reduxHooks";

type NavigationBaseProps = {
  path: string;
  text: string;
  children: React.ReactNode;
};

export const NavigationBase: React.FC<NavigationBaseProps> = ({ path, text, children }) => {
  return (
    <Link to={path}>
      <div className="text-text-300 hover:text-secondary-300 flex items-center">
        {children}
        <span>{text}</span>
      </div>
    </Link>
  );
};

type UserMenuNavProps = {
  path: string;
};

export const UserMenuNav: React.FC<UserMenuNavProps> = ({ path }) => {
  const navigate = useNavigate();
  const userName = useAppSelector((state) => state.user.user?.userName);
  const transitionProfilePage = () => {
    console.log("transition");
    // return <Navigate replace to="/home/profile" />;
    //onClickイベントの中では正しく動作しない。<Navigate>はJSX内でのみ使用するものであり、関数の戻り値として使用してもページ遷移は発生しない
    navigate(path);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Menu placement="bottom-end">
        <MenuButton>
          <div className="flex items-center">
            <img
              src="./neko.jpg"
              alt="User avatar"
              className="w-9 h-9 object-cover rounded-full  mx-2"
            />
            <span className="text-text-100">{userName}</span>
          </div>
        </MenuButton>
        <MenuList>
          {/* 自分の投稿等のページ */}
          <MenuItem onClick={transitionProfilePage}>
            <div className="flex items-center">
              <img
                src="./neko.jpg"
                alt="User avatar"
                className="w-12 h-12 object-cover rounded-full  mx-2 mr-4"
              />
              <div>
                <p className="text-text-200">{userName}</p>
                <p className="text-text-300 text-xs">プロフィールを見る</p>
              </div>
            </div>
          </MenuItem>
          {/* ログアウト */}
          <MenuItem onClick={onOpen}>
            <div className="text-text-300 flex text-sm">
              <LogOut className="mx-2" />
              <span>ログアウト</span>
            </div>
          </MenuItem>
        </MenuList>
      </Menu>

      <ProfielMenuPanel isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export const DrawerNav = () => {
  const userName = useAppSelector((state) => state.user.user?.userName);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const signout = useDisclosure();
  return (
    <>
      <img
        src="./neko.jpg"
        alt="User avatar"
        className="w-9 h-9 object-cover rounded-full "
        onClick={() => {
          onOpen();
        }}
      />

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        size="xs"
        style={{ backgroundColor: "#171717", color: "#A6A6A6" }}
      >
        <DrawerHeader marginBottom="md">
          <Link to="/profile">
            <div className="flex items-center" onClick={onClose}>
              <img
                src="./neko.jpg"
                alt="User avatar"
                className="w-12 h-12 object-cover rounded-full   mr-4"
              />
              <div>
                <p className="text-text-200">{userName}</p>
                <p className="text-text-300 text-xs">プロフィールを見る</p>
              </div>
            </div>
          </Link>
        </DrawerHeader>

        <DrawerBody>
          <div onClick={onClose} className="flex flex-col space-y-12">
            <NavigationBase path="/" text="タイムライン">
              <GalleryVerticalEnd className="h-5 w-5 mr-2" />
            </NavigationBase>

            <NavigationBase path="/" text="サークル">
              <Users className="h-5 w-5 mr-2" />
            </NavigationBase>

            <NavigationBase path="/" text="チャット">
              <MessageCircle className="h-5 w-5 mr-2" />
            </NavigationBase>

            <NavigationBase path="/activities" text="通知">
              <Bell className="h-5 w-5 mr-2" />
            </NavigationBase>

            <div className="text-rose-800 flex items-center " onClick={signout.onOpen}>
              <LogOut className="h-5 w-5 mr-2" />
              <span>ログアウト</span>
            </div>
          </div>
        </DrawerBody>
      </Drawer>
      <ProfielMenuPanel isOpen={signout.isOpen} onClose={signout.onClose} />
    </>
  );
};
