import { Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@yamada-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProfielMenuPanel } from "../pages/main/modal/ProfielMenuPanel";
import { LogOut } from "lucide-react";

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
            <span className="text-text-100">neon</span>
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
                <p className="text-text-200">neon</p>
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
