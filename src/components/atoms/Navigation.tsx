import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <Link to={path}>
      <button className="flex items-center">
        <img
          src="./neko.jpg"
          alt="User avatar"
          className="w-9 h-9 object-cover rounded-full  mx-2"
        />
        <span className="text-text-100">neon</span>
      </button>
    </Link>
  );
};
