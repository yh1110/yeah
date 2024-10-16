import React from "react";

type NavigationBaseProps = {
  text: string;
  children: React.ReactNode;
};

export const NavigationBase: React.FC<NavigationBaseProps> = ({ text, children }) => {
  return (
    <button className="text-text-300 hover:text-secondary-300 flex items-center">
      {children}
      <span>{text}</span>
    </button>
  );
};

export const UserMenuNav = () => {
  return (
    <button className="flex items-center">
      <img src="./neko.jpg" alt="User avatar" className="w-9 h-9 object-cover rounded-full  mx-2" />
      <span className="text-text-100">neon</span>
    </button>
  );
};
